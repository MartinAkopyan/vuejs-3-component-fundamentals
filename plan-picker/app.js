let PlanPickerItemComponent = {
	template: '#plan-template',
	props: {
		name: { type: String, required: true },
		selected: {type: Boolean, default: false},
	},

	methods: {
		select() {
			this.$emit('select', this.name)
		}
	}
}


let PlanPickerComponent = {
	components: {'plan-picker-item': PlanPickerItemComponent},
	template: '#plan-picker-item-template',
	data() {
		return {
			plans: ['The Hacker', 'The Curious', 'The Addict'],
			selectedPlan: null
		}
	},

	methods: {
		selectPlan(plan) {
			this.selectedPlan = plan
		}
	}
}

const app = Vue.createApp({
	components: {'plan-picker': PlanPickerComponent}
})

	.mount('#app')