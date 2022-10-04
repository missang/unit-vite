import Request from './axios'
const link = (url: string) => `${url}`
// replace(/^\/api/, '/insured/api')
export const get = (url: string) => (params: {}) =>
  Request.get(link(url), { params })
export const post = (url: string) => (params: {}) =>
  Request.post(link(url), params)
export const put = (url: string) => (params: {}) =>
  Request.put(link(url), params)
export const del = (url: string) => (params: {}) =>
  Request.delete(link(url), { params })
export const patch = (url: string) => (params: {}) =>
  Request.patch(link(url), params)
