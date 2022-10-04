import qs from 'qs'
import { useStore } from '@/stores/index'
import configs from '@/config/index'
import { debounce } from '@/utils/utils'
import msg from '@/utils/msg'

const config = {
  baseUrl: configs.host,
  header: {
    'content-type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  },
  method: 'GET',
  dataType: 'json',
  responseType: 'text'
}
/**
 * 参数对象序列化
 * @param {*} params
 */
const setParams = (params:any) =>
  qs.stringify(params, {
    arrayFormat: 'indices'
  })
//请求拦截
const requestCheck = (options: any) => {

  const store = useStore()
  if (store.token) {
    options.header['Authorization'] = `${store.token}`
  }
  return options
}
//返回拦截
// const requestRes = (res) => {
//   const status = +res.statusCode
//   if (status == 401) {

//     debounce(() => {
//       store.dispatch('RefreshToken')
//     })

//     return res
//   }

// 	if (status == 500 || status == 400) {
// 		debounce(() => {
// 			msg.info(res.data.msg)
//     })
//     // return

// 		// throw new Error(res.data.msg);
// 		// return
// 	}
//   return res.data
// }
/**
 * 请求配置
 * @param {*} options
 */
const MeRequest = (options = {} as any) => {
  options.baseURL = options.baseURL || config.baseUrl
  options.dataType = options.dataType || config.dataType
  options.url = config.baseUrl + options.url
  options.data = options.data
  options.header = {
    ...config.header,
    ...options.header
  }
  options.method = options.method || config.method
  options = {
    ...requestCheck(options),
    ...options
  }
  return new Promise((resolve, reject) => {
    options.success = function (res:any) {
      if (res.statusCode == 401) {
        debounce(() => {
          // store.dispatch('RefreshToken')
          uni.reLaunch({
            url: '/pages/login/index'
          })
        })
        return reject(res)
      }

      if (res.statusCode == 500 || res.statusCode == 400) {
        debounce(() => {
          msg.info(res.data.msg)
        })
        return reject(res)
      }
      return resolve(res.data)

    }
    options.fail = function (err:any) {
      reject(err)
    }
    uni.request(options)
  })
}
const Request = {
  get: (url:any, data:any, options = {} as any) => {
    options.url = url
    options.data = data
    options.method = 'GET'
    return MeRequest(options)
  },
  post: (url:any, data:any, options = {} as any) => {
    options.url = url
    options.data = data
    options.method = 'POST'
    return MeRequest(options)
  },
  put: (url:any, data:any, options = {} as any) => {
    options.url = url
    options.data = data
    options.method = 'PUT'
    return MeRequest(options)
  },
  del: (url:any, data:any, options = {} as any) => {
    options.url = url
    options.data = data
    options.method = 'DELETE'
    return MeRequest(options)
  }
}
export default Request
