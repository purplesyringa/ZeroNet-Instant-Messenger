<template>
	<div class="container">
		<!-- Main menu and channel list -->
		<div :class="['sidebars', {'sidebars-disabled': sidebarsDisabled}]">
			<zim-sidebar />
			<slot name="main-view" />
		</div>

		<slot />
	</div>
</template>

<style lang="sass" scoped>
	.container
		width: 100%
		height: 100%

		display: flex
		flex-direction: row

	.sidebars
		display: flex
		flex-direction: row

		@include apply-to(less-than, $phone)
			flex: 0 0 100%
			width: 100%
			transition: all 0.3s

			&.sidebars-disabled
				margin-left: -100%
</style>

<script type="text/javascript">
	import ZiMSidebar from "vue_components/zim-sidebar.vue";

	export default {
		name: "router-page",
		data() {
			return {
				sidebarsDisabled: false
			};
		},

		mounted() {
			this.$eventBus.$on("showMainView", this.showMainView);
			this.$eventBus.$on("hideMainView", this.hideMainView);
		},
		destroyed() {
			this.$eventBus.$off("showMainView", this.showMainView);
			this.$eventBus.$off("hideMainView", this.hideMainView);
		},

		methods: {
			showMainView() {
				this.sidebarsDisabled = false;
			},
			hideMainView() {
				this.sidebarsDisabled = true;
			}
		},

		components: {
			"zim-sidebar": ZiMSidebar
		}
	};
</script>