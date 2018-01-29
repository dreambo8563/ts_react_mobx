import { message } from "antd"
import axios from "axios"

import { appStore } from "../routers"

/**
 * get 请求方法
 *
 * @export
 * @param {string} url
 * @param {object} [config={}]
 * @returns
 */
export function httpGet(url: string, config: object = {}) {
  appStore.setLoading(true)
  return axios
    .get(url, { ...config })
    .catch(e => {
      appStore.setLoading(false)
      const { status, statusText } = e.response || {
        status: "unknown",
        statusText: "系统错误"
      }
      message.error(`${status}  ${statusText}`)
    })
    .then(res => {
      appStore.setLoading(false)
      return res
    })
}
/**
 * post 请求方法
 *
 * @export
 * @param {string} url
 * @param {object} [data={}]
 * @param {object} [config={}]
 * @returns
 */
export function httpPost(url: string, data: object = {}, config: object = {}) {
  appStore.setLoading(true)
  return axios
    .post(url, data, { ...config })
    .catch(e => {
      appStore.setLoading(false)
      const { status, statusText } = e.response || {
        status: "Unknown",
        statusText: "系统错误"
      }
      message.error(`${status}  ${statusText}`)
    })
    .then(res => {
      appStore.setLoading(false)
      return res
    })
}
/**
 * 并发请求方法
 *
 * @export
 * @param {any} cb 回调函数
 * @param {any} promises 多个请求promise
 * @returns
 */
export function httpAll(cb, ...promises) {
  return axios.all(promises).then(axios.spread(cb))
}
