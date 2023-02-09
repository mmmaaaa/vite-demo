import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import useUserStore from './modules/user'
import useGlobalStore from './modules/globalStore'

// 模块化
export function useStore() {
	return {
		user: useUserStore(),
		global: useGlobalStore()
	}
}
// piniaPersist(持久化)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
