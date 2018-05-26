<template>
	<div class="header">
		<span class="big">ZeroNet Instant Messenger</span>
		<span class="small">ZiM</span>

		<icon name="globe" class="channels" @click.native="showChannels" />
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


	.channels, .online
		display: none
		width: 20px
		height: 20px

		position: absolute
		top: 26px
	.channels
		left: 30px
	.online
		right: 96px


	@include apply-to(less-than, $phone)
		.big
			display: none
		.small
			display: block
		.channels, .online
			display: inline-block
</style>

<script type="text/javascript">
	import "vue-awesome/icons/globe";
	import "vue-awesome/icons/signal";

	export default {
		name: "zim-header",
		methods: {
			showChannels() {
				this.$eventBus.$emit("showChannels");
			},
			showOnline() {
				this.$eventBus.$emit("showOnline");
			}
		}
	};
</script>