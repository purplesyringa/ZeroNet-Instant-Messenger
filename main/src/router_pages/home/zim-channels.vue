<template>
	<div class="sidebar">
		<!-- Channel list -->
		<ul :class="{dragging}" :style="{width: width + 'px'}">
			<li class="header">Channels & users</li>
			<li class="divider" />

			<div class="scrollable">
				<li v-for="channel in channels">
					<div class="avatar avatar-hashtag">
						<icon name="hashtag" class="hashtag" />
					</div>
					<div class="name">#{{channel}}</div>
					<div class="user-info">Channel</div>
					<div class="clearfix" />
				</li>

				<li v-for="user in users">
					<div class="avatar">
						<img src="https://randomuser.me/api/portraits/men/83.jpg">
					</div>
					<div class="name">{{user.name}}</div>
					<div class="user-info">{{user.certUserId}}</div>
					<div class="clearfix" />
				</li>

				<!-- Resize -->
				<div class="resize" @mousedown.prevent.stop="mouseDown"></div>
			</div>
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

	.scrollable
		overflow-x: hidden
		overflow-y: auto


	.avatar
		float: left
	.name
		color: $dark-fg
	.user-info
		color: lighten($dark-fg, 40%)
	.name, .user-info
		overflow: hidden
		white-space: nowrap
		text-overflow: ellipsis


	.avatar-hashtag
		background-color: $dark-color
		color: $light-fg
	.hashtag
		display: block
		width: 32px
		height: 32px
		margin: 8px auto


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
	import "vue-awesome/icons/hashtag";

	export default {
		name: "zim-channels",
		data() {
			return {
				channels: ["Lobby", "Group-Test", "Group-Num2", "jhkjhjuiyhuihuihygujhjhjk", "gfdgf gsfgs gsd fg fg sdfg sdfgsdg sgdf gsd sgdf gdf"],
				users: [
					{
						certUserId: "gitcenter@zeroid.bit",
						name: "Git Center",
						address: "1Cy3ntkN2GN9MH6EaW6eHpi4YoRS2nK5Di"
					},
					{
						certUserId: "krixano@zeroid.bit",
						name: "Krixano",
						address: "12gAes6NzDS9E2q6Q1UXrpUdbPS6nvuBPu"
					}
				],

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
				if(this.width < 230) {
					this.width = 230;
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