<template>
	<div class="root">
		<input type="text" class="input" required :value="value" @input="$emit('input', $event.target.value)">
		<div class="placeholder">{{placeholder}}</div>
		<div class="line"></div>
	</div>
</template>

<style lang="sass" scoped>
	.root
		position: relative
		width: 300px
		height: 52px

		@include apply-to(less-than, $phone)
			width: 100%


	.input
		display: block
		width: 100%
		padding: 12px 0

		position: absolute
		left: 0
		top: 8px

		background: none
		border: none
		border-bottom: 1px solid #888
		outline: none

		font-size: 16px

		transition: all 0.3s


	.line
		display: block
		width: 100%
		height: 2px

		position: absolute
		left: 0
		top: 51px

		background-color: #1976D2

		transform: scaleX(0)
		transition: transform 0.3s

	.input:focus ~ .line
		transform: scaleX(1)


	.placeholder
		position: absolute
		left: 0
		top: 20px

		color: #888
		transition: all 0.3s

	.input:focus ~ .placeholder, .input:valid ~ .placeholder
		left: 0
		top: 0

		font-size: 14px
		line-height: 16px
		color: #1976D2
</style>

<script type="text/javascript">
	export default {
		name: "zim-input",
		props: ["placeholder", "value"]
	};
</script>