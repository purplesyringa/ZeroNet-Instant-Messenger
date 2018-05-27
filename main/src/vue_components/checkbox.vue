<template>
	<div class="root">
		<input type="checkbox" :id="id" v-model="value" @change="$emit('input', $event.target.checked)">

		<label :for="id" class="checkbox">
			<icon name="check" class="icon" />
		</label>

		<label :for="id" class="text">{{name}}</label>
	</div>
</template>

<style lang="sass" scoped>
	.root
		display: flex
		flex-direction: row

		width: 300px
		margin-bottom: 16px

		@include apply-to(less-than, $phone)
			width: 100%

		*
			cursor: pointer


	input
		display: none


	.checkbox
		display: inline-block
		width: 24px
		height: 24px
		margin-right: 16px
		flex: 0 0 24px

		border: 2px solid #888
		border-radius: 4px

		transition: 0.1s all


		.icon
			margin: 2px
			color: #FFF
			opacity: 0

			transition: 0.1s all


		input:checked ~ &
			border-color: #1976D2
			background-color: #1976D2

			.icon
				opacity: 1


	.text
		margin-top: 2px
</style>

<script type="text/javascript">
	import "vue-awesome/icons/check";

	export default {
		name: "zim-checkbox",
		props: ["name", "value"],
		data() {
			return {
				id: ""
			};
		},
		mounted() {
			this.id = "zim_checkbox_" + Math.random().toString(36).substr(2);
		}
	};
</script>