import "./sass/main.sass";

// Vue.js
import Vue from "vue/dist/vue.min.js";

// asyncComputed
import AsyncComputed from "vue-async-computed";
Vue.use(AsyncComputed);

// Material icons
import "material-icons/iconfont/material-icons.css";

// Font Awesome
import Icon from "vue-awesome/components/Icon.vue";
Vue.component("icon", Icon);

// Dummy node
import Dummy from "vue_components/dummy.vue";
Vue.component("dummy", Dummy);

// Input
import Input from "vue_components/input.vue";
Vue.component("zim-input", Input);

// Button
import Button from "vue_components/button.vue";
Vue.component("zim-button", Button);

Vue.prototype.$eventBus = new Vue();

import root from "./vue_components/root.vue";
var app = new Vue({
	el: "#app",
	render: h => h(root),
	data: {
		mainView: null,
		pagesView: null,
		zeroPage: null
	}
});

import {route, zeroPage} from "./route.js";
route(app);

Vue.prototype.$zeroPage = zeroPage;

(async function() {
	const siteInfo = await zeroPage.getSiteInfo();
	app.$eventBus.$emit("setSiteInfo", siteInfo);
})();
zeroPage.on("setSiteInfo", msg => {
	app.$eventBus.$emit("setSiteInfo", msg.params);
});