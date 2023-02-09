<script setup lang="ts">
import { loginApi } from '@/api/modules/login'
import { useStore } from '@/stores/index'
// import { ref } from 'vue'
defineProps<{ msg: string }>()
onMounted(() => {
	loginApi({
		username: '2312',
		password: '2346'
	})
})
const count = ref(0)
const { x, y } = useMouse()
const { global, user } = useStore()
global.setToken('321')
user.setUserName('123')
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
		<span>{{ x }}/{{ y }}</span>
		<div>{{ global.token }}</div>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
	</p>
	<p>
		Install
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
