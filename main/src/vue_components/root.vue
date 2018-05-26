<template>
	<div class="current-view" style="width: 100%; height: 100%;">
		<component :is="$parent.currentView" ref="currentView"></component>
	</div>
</template>

<script language="text/javascript">
	export default {
		props: [],
		name: "root"
	};
</script>