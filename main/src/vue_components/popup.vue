<template>
	<div>
		<div :class="['bg', {visible}]" @click="close"></div>
		<div :class="['alert', {visible}]">
			<div class="title">{{title}}</div>
			<slot />
			<div class="button" @click="click">{{button.toUpperCase()}}</div>
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.bg
		position: fixed
		left: 0
		top: 0
		z-index: 1000

		display: block
		width: 100%
		height: 100%

		background-color: rgba(0, 0, 0, 0.3)
		opacity: 0
		pointer-events: none

		transition: all 0.3s


	.alert
		display: block
		padding: 16px

		position: fixed
		top: 50%
		left: 50%
		z-index: 1001
		transform: translate(-50%, -50%)

		background-color: #FFF
		border-radius: 4px
		box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2)

		opacity: 0
		pointer-events: none

		transition: all 0.3s

	.title
		margin-bottom: 16px

		font-size: 20px
		line-height: 24px

	.button
		float: right
		cursor: pointer

		font-family: Roboto, Arial, sans-serif
		font-weight: bold
		letter-spacing: 1px
		color: #1976D2


	.visible
		opacity: 1
		pointer-events: all
</style>

<script type="text/javascript">
	export default {
		name: "join-popup",
		props: ["title", "visible", "button"],
		methods: {
			close() {
				this.visible = false;
				this.$emit("update:visible", false);
			},
			click() {
				this.close();
				this.$emit("click");
			}
		}
	};
</script>