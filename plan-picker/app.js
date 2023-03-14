const app = Vue.createApp({
	data() {
		return {
			plans: ['The Hacker', 'The Curious', 'The Addict']
		}
	}
})
.component('plan', {
	template: '#plan-template',
	props: {
		name: {type: String, required: true},
	}
})
.mount('#app')