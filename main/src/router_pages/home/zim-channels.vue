<template>
	<div class="sidebar">
		<!-- Channel list -->
		<ul :class="{dragging}" :style="{width: width + 'px'}">
			<li class="header">Channels</li>
			<li class="divider" />

			<li v-for="link in links">{{link}}</li>

			<!-- Resize -->
			<div class="resize" @mousedown.prevent.stop="mouseDown"></div>
		</ul>
	</div>
</template>

<style lang="sass" scoped>
	@import "~sass/sidebar.sass"

	ul
		width: 230px
		background-color: darken($light-color, 2%)
		color: $dark-fg
	li:hover
		background-color: darken($light-color, 5%)
	.divider
		background-color: darken($light-color, 5%)
	.header
		color: lighten($dark-fg, 50%)
		background: none !important // sorry


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
	export default {
		name: "zim-channels",
		data() {
			return {
				links: ["Lobby", "Group-Test", "Group-Num2", "jhkjhjuiyhuihuihygujhjhjk", "gfdgf gsfgs gsd fg fg sdfg sdfgsdg sgdf gsd sgdf gdf"],

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