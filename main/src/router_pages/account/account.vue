<template>
	<div class="account-container">
		<zim-input placeholder="Nickname" v-model="nickname" />
		<zim-button value="Save" @click="save" />
	</div>
</template>

<style lang="sass" scoped>
	.account-container
		width: 100%
		height: 100%
		padding: 28px 16px
</style>

<script type="text/javascript">
	import UserManager from "libs/user/manager";

	export default {
		name: "account",
		data() {
			return {
				nickname: ""
			};
		},

		async mounted() {
			this.nickname = await this.$user.getNickname();
		},

		methods: {
			save() {
				if(this.nickname) {
					this.$user.setNickname(this.nickname);
				}
			}
		}
	};
</script>