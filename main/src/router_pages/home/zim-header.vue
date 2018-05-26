<template>
	<div class="header">
		<span class="big">ZeroNet Instant Messenger</span>
		<span class="small">ZiM</span>

		<icon name="signal" class="online" @click.native="showOnline" />
	</div>
</template>

<style lang="sass" scoped>
	.header
		width: 100%
		padding: 26px 16px

		position: relative

		border-bottom: 1px solid darken($light-color, 5%)

	.small
		display: none

		text-align: center
		font-size: 24px
		font-style: italic
		letter-spacing: 4px


	.online
		display: none
		width: 20px
		height: 20px

		position: absolute
		right: 96px
		top: 26px


	@include apply-to(less-than, $phone)
		.big
			display: none
		.small
			display: block
		.online
			display: inline-block
</style>

<script type="text/javascript">
	import "vue-awesome/icons/signal";

	export default {
		name: "zim-header",
		methods: {
			showOnline() {
				this.$eventBus.$emit("showOnline");
			}
		}
	};
</script>