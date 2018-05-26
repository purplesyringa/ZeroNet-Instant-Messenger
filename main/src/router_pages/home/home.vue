<template>
	<div class="container">
		<!-- Main menu and channel list -->
		<div :class="['sidebars', {'sidebars-disabled': sidebarsDisabled}]">
			<zim-sidebar />
			<zim-channels />
		</div>

		<!-- Header & message list -->
		<div class="middle">
			<zim-header />
			<div class="message-list">
				<zim-message-list />
			</div>
			<zim-chatbar />
		</div>

		<!-- Online user list -->
		<div :class="['online-root', {'online-enabled': onlineEnabled}]">
			<zim-online />
		</div>
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

	.middle
		flex: 1 0
		overflow: hidden

		display: flex
		flex-direction: column

		@include apply-to(less-than, $phone)
			min-width: 100%
			width: 100%

	.message-list
		flex: 1
		min-height: 0


	@include apply-to(less-than, $phone)
		.online-root
			width: 100%
			height: 100%

			position: absolute
			left: 100%

			transition: all 0.3s

		.online-enabled
			left: 0
</style>

<script type="text/javascript">
	import ZiMSidebar from "vue_components/zim-sidebar.vue";
	import ZiMChannels from "./zim-channels.vue";
	import ZiMHeader from "./zim-header.vue";
	import ZiMMessageList from "./zim-message-list.vue";
	import ZiMChatbar from "./zim-chatbar.vue";
	import ZiMOnline from "./zim-online.vue";

	export default {
		name: "home",
		data() {
			return {
				sidebarsDisabled: false,
				onlineEnabled: false
			};
		},

		mounted() {
			this.$eventBus.$on("showChannel", this.onShowChannel);
			this.$eventBus.$on("showUser", this.onShowUser);
			this.$eventBus.$on("showOnline", this.onShowOnline);
			this.$eventBus.$on("hideOnline", this.onHideOnline);
		},
		destroyed() {
			this.$eventBus.$off("showChannel", this.onShowChannel);
			this.$eventBus.$off("showUser", this.onShowUser);
			this.$eventBus.$off("showOnline", this.onShowOnline);
			this.$eventBus.$off("hideOnline", this.onHideOnline);
		},

		methods: {
			onShowChannel() {
				this.sidebarsDisabled = true;
			},
			onShowUser() {
				this.sidebarsDisabled = true;
			},
			onShowOnline() {
				this.onlineEnabled = true;
			},
			onHideOnline() {
				this.onlineEnabled = false;
			}
		},

		components: {
			"zim-sidebar": ZiMSidebar,
			"zim-channels": ZiMChannels,
			"zim-header": ZiMHeader,
			"zim-message-list": ZiMMessageList,
			"zim-chatbar": ZiMChatbar,
			"zim-online": ZiMOnline
		}
	};
</script>