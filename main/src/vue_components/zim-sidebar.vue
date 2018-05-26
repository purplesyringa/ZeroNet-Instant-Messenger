<template>
	<div class="sidebar">
		<!-- Main menu -->
		<ul :class="{collapsed}">
			<li>
				<div class="avatar">
					<img src="https://randomuser.me/api/portraits/men/85.jpg">
				</div>John Leider
			</li>

			<li class="divider" />

			<li v-for="item in items">
				<icon class="icon" :name="item.icon" />{{item.title}}
			</li>

			<li class="divider" />

			<li @click="collapsed = !collapsed">
				<icon :class="['icon', {rotated: collapsed}]" name="chevron-left" />Collapse
			</li>
		</ul>
	</div>
</template>

<style lang="sass" scoped>
	@import "~sass/sidebar.sass"

	ul
		width: 200px
		background-color: $dark-color
		color: $light-fg
		overflow: hidden
		z-index: 2
	li
		width: 200px
	li:hover
		background-color: lighten($dark-color, 5%)
	.divider
		background-color: lighten($dark-color, 5%)
	.header
		color: darken($light-fg, 50%)
	.collapsed
		width: 80px



	@include apply-to(less-than, $phone)
		ul, li
			width: 100vw
</style>

<script type="text/javascript">
	import "vue-awesome/icons/comment-alt";
	import "vue-awesome/icons/info-circle";
	import "vue-awesome/icons/chevron-left";

	export default {
		name: "zim-sidebar",
		data() {
			return {
				items: [
					{title: "Channels", icon: "comment-alt"},
					{title: "About", icon: "info-circle"},
				],
				collapsed: true
			};
		}
	};
</script>