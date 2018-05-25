<template>
	<div class="sidebar">
		<!-- Main menu -->
		<ul :class="['left', {collapsed}]">
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

		<!-- Channel list -->
		<ul :class="['right', {dragging}]" :style="{width: width + 'px'}">
			<li class="header">Channels</li>
			<li class="divider" />

			<li v-for="link in links">{{link}}</li>

			<!-- Resize -->
			<div class="resize" @mousedown.prevent.stop="mouseDown"></div>
		</ul>
	</div>
</template>

<style lang="sass" scoped>
	.sidebar
		display: block
		float: left
		flex: 0 0 auto
		height: 100%

		box-shadow: 4px 0 4px darken($light-color, 5%)


	ul
		height: 100%
		margin: 0
		padding: 0

		position: relative
		float: left

		transition: all 0.3s
	ul.dragging
		transition: none

	// <li> is an item
	li
		display: block
		margin: 0
		padding: 12px 16px
		min-height: 46px

		line-height: 20px
		white-space: nowrap
		text-overflow: ellipsis
		overflow: hidden

		list-style-type: none
		cursor: pointer

	// Divider between <li>s
	.divider
		padding: 0
		width: 100% !important // sorry
		min-height: 1px
		margin-bottom: -1px

	// Big item, but w/o avatar
	.header
		padding: 26px 16px


	// Avatar is big and circle
	.avatar
		display: inline-block
		width: 48px
		height: 48px
		margin-right: 16px
		vertical-align: middle

		overflow: hidden
		border-radius: 50%
	.avatar img
		width: 100%

	// Icon is small
	.icon
		display: inline-block
		width: 48px
		height: 20px
		margin-right: 16px
		vertical-align: middle

		text-align: center

		transition: all 0.3s
	.rotated
		transform: rotate(180deg)


	// Different styles
	.left
		width: 200px
		background-color: $dark-color
		color: $light-fg
		overflow: hidden
	.left li
		width: 200px
	.left li:hover
		background-color: lighten($dark-color, 5%)
	.left .divider
		background-color: lighten($dark-color, 5%)
	.left .header
		color: darken($light-fg, 50%)
	.left.collapsed
		width: 80px

	.right
		width: 230px
		background-color: darken($light-color, 2%)
		color: $dark-fg
	.right li:hover
		background-color: darken($light-color, 5%)
	.right .divider
		background-color: darken($light-color, 5%)
	.right .header
		color: lighten($dark-fg, 50%)
		background: none !important // sorry
	.right.collapsed
		width: 110px



	.resize
		display: block
		width: 16px
		height: 100%

		position: absolute
		right: -12px
		top: 0

		cursor: w-resize
</style>

<script type="text/javascript">
	import "vue-awesome/icons/comment";
	import "vue-awesome/icons/cog";
	import "vue-awesome/icons/chevron-left";

	export default {
		name: "zim-sidebar",
		data() {
			return {
				items: [
					{title: "Channels", icon: "comment"},
					{title: "About", icon: "cog"},
				],
				links: ["Lobby", "Group-Test", "Group-Num2", "jhkjhjuiyhuihuihygujhjhjk", "gfdgf gsfgs gsd fg fg sdfg sdfgsdg sgdf gsd sgdf gdf"],

				collapsed: true,

				width: 230,
				dragging: false,
				mouseDownEvent: null,
				widthBefore: null
			};
		},

		methods: {
			mouseDown(e) {
				this.mouseDownEvent = e;
				this.widthBefore = this.width;
				this.dragging = true;
				document.body.addEventListener("mousemove", this.mouseMove);
				document.body.addEventListener("mouseup", this.mouseUp);
			},
			mouseMove(e) {
				this.width = e.clientX - this.mouseDownEvent.clientX + this.widthBefore;
				if(this.width < 110) {
					this.width = 110;
				} else if(this.width > 500) {
					this.width = 500;
				}
			},
			mouseUp(e) {
				this.mouseDownEvent = null;
				this.widthBefore = null;
				this.dragging = false;
				document.body.removeEventListener("mousemove", this.mouseMove);
				document.body.removeEventListener("mouseup", this.mouseUp);
			}
		}
	};
</script>