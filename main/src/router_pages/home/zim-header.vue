<template>
	<div class="header">
		<span class="big">ZeroNet Instant Messenger</span>
		<span class="small">ZiM</span>
	</div>
</template>

<style lang="sass" scoped>
	.header
		width: 100%
		padding: 26px 16px

		border-bottom: 1px solid darken($light-color, 5%)

	.small
		display: none

		text-align: center
		font-size: 24px
		font-style: italic
		letter-spacing: 4px

	@include apply-to(less-than, $phone)
		.big
			display: none
		.small
			display: block
</style>

<script type="text/javascript">
	export default {
		name: "zim-header"
	};
</script>