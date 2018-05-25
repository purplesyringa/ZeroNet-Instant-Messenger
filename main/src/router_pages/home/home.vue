<template>
	<div style="width: 100%; height: 100%;">
		<!-- Main menu and channel list -->
		<zim-sidebar />

		<!-- Header -->
		<v-toolbar app dense class="elevation-3">
			<v-toolbar-side-icon />
			<v-toolbar-title>ZeroNet Instant Messenger</v-toolbar-title>
		</v-toolbar>

		<!-- Online list -->
		<v-navigation-drawer clipped dark app v-model="drawer2" right width="250" class="elevation-2" />

		<!-- Messages -->
		<zim-message-list />
	</div>
</template>

<script type="text/javascript">
	import ZiMSidebar from "./zim-sidebar.vue";
	import ZiMMessageList from "./zim-message-list.vue";

	export default {
		name: "home",
		components: {
			"zim-sidebar": ZiMSidebar,
			"zim-message-list": ZiMMessageList,
		}
	};
</script>