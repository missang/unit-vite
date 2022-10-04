import qs from 'qs'
import axios from '../axios'
import { get, post, del } from '../requestType'
const ENV = (import.meta as any).env
export default {
	// 添加收货地址
  login: post('/api/user/login'),

}