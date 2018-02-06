import { qs } from "../utils/http"
export const courseSubscribeListAPI = (query: object) =>
  qs(`/api/courses`, query)
