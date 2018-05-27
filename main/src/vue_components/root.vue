<template>
	<div style="width: 100%; height: 100%;">
		<login-page :class="{hidden: (siteInfo.cert_user_id && user) || registerPage}" />
		<register-page v-if="registerPage" />

		<div class="current-view" style="width: 100%; height: 100%;" v-if="siteInfo.cert_user_id && user">
			<router-page>
				<component :is="$parent.mainView" slot="main-view" />
				<component :is="$parent.pagesView" />
			</router-page>
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.hidden
		position: absolute

		opacity: 0 !important // sorry
		pointer-events: none
</style>

<script language="text/javascript">
	import Vue from "vue/dist/vue.min.js";
	import UserManager from "libs/user/manager";
	import RouterPage from "./router-page.vue";
	import LoginPage from "router_pages/login-page/login-page.vue";
	import RegisterPage from "router_pages/login-page/register-page.vue";

	export default {
		props: [],
		name: "root",
		data() {
			return {
				registerPage: false,
				siteInfo: {
					cert_user_id: ""
				},
				user: null
			};
		},

		beforeCreate() {
			Vue.prototype.$user = null;
		},
		mounted() {
			this.$eventBus.$on("setSiteInfo", this.onSiteInfo);
			this.$eventBus.$on("registered", this.onRegistered);
		},
		destroyed() {
			this.$eventBus.$off("setSiteInfo", this.onSiteInfo);
			this.$eventBus.$off("registered", this.onRegistered);
		},

		methods: {
			async onSiteInfo(siteInfo) {
				this.siteInfo = siteInfo;

				if(!siteInfo.cert_user_id) {
					this.registerPage = false;
					return;
				}

				if(Vue.prototype.$user) {
					return;
				}

				if(await UserManager.isRegisteredSelf()) {
					Vue.prototype.$user = UserManager.getSelf();
					this.user = Vue.prototype.$user;
					console.log("SET");
				} else {
					this.registerPage = true;
				}
			},

			onRegistered() {
				this.registerPage = false;
				Vue.prototype.$user = UserManager.getSelf();
				this.user = Vue.prototype.$user;
			}
		},

		components: {
			"router-page": RouterPage,
			"login-page": LoginPage,
			"register-page": RegisterPage
		}
	};
</script>