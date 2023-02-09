import { defineStore } from 'pinia'
import { GlobalState } from '../interface'
import piniaPersistConfig from '@/config/piniaPersist'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: 'GlobalState',
	// state: 返回对象的函数
	state: (): GlobalState => ({
		// token
		token: 'token',
		// userInfo
		userInfo: '',
		// language
		language: ''
	}),
	getters: {},
	actions: {
		// setToken
		setToken(token: string) {
			this.token = token
		},
		// setUserInfo
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo
		},
		// updateLanguage
		updateLanguage(language: string) {
			this.language = language
		}
	},
	persist: piniaPersistConfig('GlobalState') // 持久化配置，无需持久化可以不需配置
})

export default GlobalStore
