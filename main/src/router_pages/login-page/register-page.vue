<template>
	<div class="root">
		<div class="container">
			<div class="header">ZeroNet Instant Messenger</div>
			<div class="text">Register to start using ZiM.</div>

			<zim-input placeholder="Nickname" v-model="nickname" />
			<zim-button value="Register" @click="register" />
		</div>
	</div>
</template>

<style lang="sass" scoped>
	$time: 5s

	.root
		width: 100%
		height: 100%

		opacity: 1
		transition: opacity 0.5s

	.container
		width: 100%
		height: 100%
		padding: 0 16px
		background-color: #FFF

		display: flex
		flex-direction: column
		justify-content: center
		align-items: center

		transition: transform $time ease-in-out


	.header
		margin-bottom: 16px

		font-family: Impact, Verdana, Arial, sans-serif
		font-size: 64px
		line-height: 72px
		letter-spacing: 2px
		word-spacing: 16px
		text-align: center
		color: #222

	.text
		font-size: 32px
		line-height: 48px
		text-align: center
		color: #222
</style>

<script type="text/javascript">
	import UserManager from "libs/user/manager";

	export default {
		name: "register-page",
		data() {
			return {
				nickname: ""
			};
		},

		methods: {
			async register() {
				if(!this.nickname) {
					return;
				}

				await UserManager.register(this.nickname);
				this.$eventBus.$emit("registered");
			}
		}
	};
</script>