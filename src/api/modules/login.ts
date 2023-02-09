import { Login } from '@/api/interface/index'
import http from '@/api'

export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(`/login`, params, { headers: {} }) // 正常 post json 请求  ==>  application/json
}
