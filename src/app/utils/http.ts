import { message } from "antd"
import axios from "axios"

/**
 * get 请求方法
 *
 * @export
 * @param {string} url
 * @param {object} [config={}]
 * @returns
 */
export function httpGet(url: string, config: object = {}) {
  return axios.get(url, { ...config }).catch(e => {
    const { status, statusText } = e.response
    message.error(`${status}  ${statusText}`)
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
  return axios.post(url, data, { ...config }).catch(e => {
    const { status, statusText } = e.response
    message.error(`${status}  ${statusText}`)
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
