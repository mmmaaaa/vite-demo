import { defineStore } from 'pinia'
import { UserState } from '../interface'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
const UserStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: 'User',
	// state: 返回对象的函数
	state: (): UserState => ({
		username: 'mma'
	}),
	getters: {},
	actions: {
		setUserName(username: string) {
			this.username = username
		}
	}
})

export default UserStore
