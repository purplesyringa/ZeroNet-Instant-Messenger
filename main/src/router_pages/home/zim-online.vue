<template>
	<div class="online">
		<div class="header">
			<icon name="chevron-left" class="back" @click.native="back" />Online right now
		</div>

		<div class="user">@glightstar</div>
		<div class="user">@gitcenter</div>
		<div class="user">@thunder33345</div>
	</div>
</template>

<style lang="sass" scoped>
	.online
		display: inline-block
		width: 230px
		height: 100%

		background-color: darken($light-color, 2%)
		border-left: 1px solid darken(#FFF, 5%)

		@include apply-to(less-than, $phone)
			width: 100%


	.header
		width: 100%
		padding: 26px 16px

		box-shadow: 0 4px 4px darken(#FFF, 5%)
		border-bottom: 1px solid darken($light-color, 5%)

	.back
		display: none
		width: 20px
		height: 20px

		margin-right: 16px

		@include apply-to(less-than, $phone)
			display: inline-block


	.user
		margin: 12px 16px
</style>

<script type="text/javascript">
	import "vue-awesome/icons/chevron-left";

	export default {
		name: "zim-online",

		methods: {
			back() {
				this.$eventBus.$emit("hideOnline");
			}
		}
	};
</script>