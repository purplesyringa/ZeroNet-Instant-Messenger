<template>
	<v-app>
		<div class="current-view">
			<component :is="$parent.currentView" ref="currentView"></component>
		</div>
	</v-app>
</template>

<script language="text/javascript">
	export default {
		props: [],
		name: "root"
	};
</script>