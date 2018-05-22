<template>
	<v-app>
		<v-content>
			<div class="current-view" style="width: 100%; height: 100%;">
				<component :is="$parent.currentView" ref="currentView"></component>
			</div>
		</v-content>
	</v-app>
</template>

<script language="text/javascript">
	export default {
		props: [],
		name: "root"
	};
</script>