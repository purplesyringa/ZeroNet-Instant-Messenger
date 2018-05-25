<template>
	<div class="footer">
		<input type="text" class="input" placeholder="Type here...">
	</div>
</template>

<style lang="sass" scoped>
	.footer
		width: 100%

		box-shadow: 0 -4px 4px darken(#FFF, 5%)
		border-top: 1px solid darken($light-color, 5%)

	.input
		width: 100%
		padding: 12px 16px
		border: 0

		font-size: inherit
</style>

<script type="text/javascript">
	export default {
		name: "zim-chatbar"
	};
</script>