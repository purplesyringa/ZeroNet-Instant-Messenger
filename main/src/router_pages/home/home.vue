<template>
	<div class="container">
		<!-- Main menu and channel list -->
		<zim-sidebar />

		<!-- Header & message list -->
		<div class="middle">
			<zim-header />
			<div class="message-list">
				<zim-message-list />
			</div>
			<zim-chatbar />
		</div>

		<!--
		<v-navigation-drawer clipped dark app v-model="drawer2" right width="250" class="elevation-2" />
		-->
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
	import ZiMHeader from "./zim-header.vue";
	import ZiMMessageList from "./zim-message-list.vue";
	import ZiMChatbar from "./zim-chatbar.vue";

	export default {
		name: "home",
		components: {
			"zim-sidebar": ZiMSidebar,
			"zim-header": ZiMHeader,
			"zim-message-list": ZiMMessageList,
			"zim-chatbar": ZiMChatbar
		}
	};
</script>