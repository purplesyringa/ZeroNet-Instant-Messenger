<template>
	<div class="button" @click="$emit('click')">{{value}}</div>
</template>

<style lang="sass" scoped>
	$color: #1976D2

	.button
		display: block
		width: 300px
		padding: 12px 16px
		margin-bottom: 16px

		text-align: center
		font-size: 16px
		color: #FFF

		background-color: $color
		border-radius: 8px
		cursor: pointer

		transition: all 0.3s

		@include apply-to(less-than, $phone)
			width: 100%


	.button:hover
		background-color: darken($color, 5%)
</style>

<script type="text/javascript">
	export default {
		name: "zim-button",
		props: ["value"]
	};
</script>