<template>
	<div class="current-view" style="width: 100%; height: 100%;">
		<router-page>
			<component :is="$parent.mainView" slot="main-view" />
			<component :is="$parent.pagesView" />
		</router-page>
	</div>
</template>

<script language="text/javascript">
	import RouterPage from "./router-page.vue";

	export default {
		props: [],
		name: "root",
		components: {
			"router-page": RouterPage
		}
	};
</script>