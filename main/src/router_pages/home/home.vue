<template>
	<div class="container">
		<!-- Main menu and channel list -->
		<zim-sidebar />
		<zim-channels />

		<!-- Header & message list -->
		<div class="middle">
			<zim-header />
			<div class="message-list">
				<zim-message-list />
			</div>
			<zim-chatbar />
		</div>

		<!-- Online user list -->
		<zim-online />
	</div>
</template>

<style lang="sass">
	.container
		width: 100%
		height: 100%

		display: flex
		flex-direction: row

	.middle
		flex: 1 0
		overflow: hidden

		display: flex
		flex-direction: column

	.message-list
		flex: 1
		min-height: 0
</style>

<script type="text/javascript">
	import ZiMSidebar from "./zim-sidebar.vue";
	import ZiMChannels from "./zim-channels.vue";
	import ZiMHeader from "./zim-header.vue";
	import ZiMMessageList from "./zim-message-list.vue";
	import ZiMChatbar from "./zim-chatbar.vue";
	import ZiMOnline from "./zim-online.vue";

	export default {
		name: "home",
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