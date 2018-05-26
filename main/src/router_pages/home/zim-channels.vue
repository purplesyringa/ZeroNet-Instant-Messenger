<template>
	<div class="sidebar">
		<!-- Channel list -->
		<ul :class="{dragging}" :style="{width: width + 'px'}">
			<li class="header">
				<icon name="circle" style="color:green" />
				Online
			</li>
			<li class="divider" />

			<div class="scrollable">
				<li v-for="channel in channels" @click="showChannel(channel.name)" :class="{active: current === '#' + channel.name}">
					<div :class="['name', {'name-only': !channel.description}]">#{{channel.name}}</div>
					<div class="user-info">{{channel.description}}</div>
					<div class="clearfix" />
				</li>

				<li class="divider divider-big" />

				<li v-for="user in users" @click="showUser(user.address)" :class="{active: current === '@' + user.address}">
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
		background-color: darken($light-color, 20%)
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


	.active
		background-color: $dark-color
		transition: all 0.1s
		&:hover
			background-color: $dark-color

		.name
			color: $light-fg
			transition: all 0.1s
		.user-info
			color: darken($light-fg, 40%)
			transition: all 0.1s

		.avatar-hashtag
			background-color: $light-color
			color: $dark-fg
			transition: all 0.1s


	.resize
		display: block
		width: 16px
		height: 100%

		position: absolute
		right: -12px
		top: 0

		cursor: w-resize



	@include apply-to(less-than, $phone)
		.sidebar
			flex: 1 1 0
			min-width: 0
		ul
			width: 100% !important // sorry
</style>

<script type="text/javascript">
	import "vue-awesome/icons/hashtag";
	import "vue-awesome/icons/circle";

	export default {
		name: "zim-channels",
		data() {
			return {
				channels: [
					{
						name: "lobby",
						description: "Main channel"
					},
					{
						name: "Group-Test"
					},
					{
						name: "Group-Num2"
					},
					{
						name: "jhkjhjuiyhuihuihygujhjhjk"
					},
					{
						name: "gfdgf gsfgs gsd fg fg sdfg sdfgsdg sgdf gsd sgdf gdf"
					}
				],
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
				widthBefore: null,

				current: ""
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
			},

			showChannel(name) {
				this.$eventBus.$emit("showChannel", name);
				this.current = "#" + name;
			},
			showUser(address) {
				this.$eventBus.$emit("showUser", address);
				this.current = "@" + address;
			}
		}
	};
</script>