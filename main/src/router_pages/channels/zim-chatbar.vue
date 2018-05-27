<template>
	<div class="footer">
		<input type="text" class="input" placeholder="Type here..." @keypress.enter="submit" v-model="value">
	</div>
</template>

<style lang="sass" scoped>
	.footer
		width: 100%

		border-top: 1px solid darken($light-color, 5%)

	.input
		width: 100%
		padding: 12px 16px
		border: 0

		font-size: inherit
</style>

<script type="text/javascript">
	export default {
		name: "zim-chatbar",
		data() {
			return {
				value: ""
			};
		},

		methods: {
			submit() {
				this.$eventBus.$emit("sendMessage", this.value);
				this.value = "";
			}
		}
	};
</script>