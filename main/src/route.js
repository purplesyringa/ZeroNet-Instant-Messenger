import {zeroPage} from "zero";

import Vue from "vue/dist/vue.min.js";
import VueRouter from "./libs/vuerouter.js";
const router = VueRouter(zeroPage);
Vue.use(router.plugin);

zeroPage.on("wrapperPopState", res => router.router.listenForBack(res.params));

import Routes from "./router_pages/routes.js";
export const route = vue => {
	const routes = Routes(vue, zeroPage);

	routes.forEach(route => {
		router.router.add({
			path: route.path,
			controller(params) {
				route.controller(params);
			}
		});
	});
	router.router.check(router.router.getURL());
};