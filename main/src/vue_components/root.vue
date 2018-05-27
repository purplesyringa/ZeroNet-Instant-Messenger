<template>
	<div style="width: 100%; height: 100%;">
		<login-page :class="{hidden: siteInfo.cert_user_id}" />
		<div class="current-view" style="width: 100%; height: 100%;" v-if="siteInfo.cert_user_id">
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
	import RouterPage from "./router-page.vue";
	import LoginPage from "router_pages/login-page/login-page.vue";

	export default {
		props: [],
		name: "root",
		data() {
			return {
				siteInfo: {
					cert_user_id: ""
				}
			};
		},
		mounted() {
			this.$eventBus.$on("setSiteInfo", this.onSiteInfo);
		},
		destroyed() {
			this.$eventBus.$off("setSiteInfo", this.onSiteInfo);
		},

		methods: {
			onSiteInfo(siteInfo) {
				this.siteInfo = siteInfo;
			}
		},

		components: {
			"router-page": RouterPage,
			"login-page": LoginPage
		}
	};
</script>