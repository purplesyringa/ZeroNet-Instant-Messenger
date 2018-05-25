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
				<i class="icon material-icons">{{item.icon}}</i>{{item.title}}
			</li>

			<li class="divider" />

			<li @click="collapsed = !collapsed">
				<i class="icon material-icons">chevron_left</i>Collapse
			</li>
		</ul>

		<!-- Channel list -->
		<ul :class="['right', {collapsed: !collapsed}]">
			<li class="header">Channels</li>
			<li class="divider" />

			<li v-for="link in links">{{link}}</li>
		</ul>
	</div>

	<!--
	<v-navigation-drawer v-model="drawer" class="pb-0 elevation-4" hide-overlay stateless app>
		<v-layout fill-height>
			<v-navigation-drawer
				dark
				:mini-variant="mini"
				stateless
				value="true"
			>
				<v-toolbar flat class="transparent">
					<v-list class="pa-0">
						<v-list-tile avatar>
							<v-list-tile-avatar>
								<img src="https://randomuser.me/api/portraits/men/85.jpg">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>John Leider</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list>
				</v-toolbar>
				<v-list class="pt-0" dense>
					<v-divider />
					<v-list-tile v-for="item in items" :key="item.title" @click="">
						<v-list-tile-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>{{ item.title }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

					<v-divider />
					<v-list-tile @click="mini = !mini">
						<v-list-tile-action>
							<v-icon>{{mini ? "chevron_right" : "chevron_left"}}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Collapse</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-navigation-drawer>
			<v-list class="grow" dense>
				<v-subheader>Channels</v-subheader>
				<v-list-tile
					v-for="link in links"
					:key="link"
					@click=""
					class="active"
				>
					<v-list-tile-title v-text="link" />
				</v-list-tile>
			</v-list>
		</v-layout>
	</v-navigation-drawer>
	-->
</template>

<style lang="sass" scoped>
	//.list__tile__action, .list__tile__avatar
	//	flex: 0 0 48px !important
	//	min-width: 48px !important
	//.list__tile__action .icon, .list__tile__avatar .avatar
	//	margin: 0 auto

	//.list__tile__content
	//	padding-left: 8px

	//.divider
	//	display: block !important


	//.navigation-drawer
	//	flex: 0 0 180px !important
	//	transition-property: all !important
	//.navigation-drawer--mini-variant
	//	flex: 0 0 80px !important

	//.list.grow
	//	width: 0

	$dark-color: #222
	$dark-fg: #000
	$light-color: #FFF
	$light-fg: #FFF


	.sidebar
		display: block
		float: left
		width: 310px
		height: 100%

		box-shadow: 4px 0 4px darken($light-color, 5%)


	ul
		height: 100%
		margin: 0
		padding: 0
		float: left

	// <li> is an item
	li
		display: block
		margin: 0
		padding: 12px 16px
		min-height: 24px

		line-height: 20px
		white-space: nowrap
		text-overflow: ellipsis
		overflow: hidden

		list-style-type: none
		cursor: pointer

	// Divider between <li>s
	.divider
		padding: 0
		min-height: 1px

	// Big item, but w/o avatar
	.header
		padding: 24px 16px


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
		margin-right: 16px
		vertical-align: middle

		text-align: center


	// Different styles
	.left
		width: 200px
		background-color: $dark-color
		color: $light-fg
	.left li:hover
		background: lighten($dark-color, 5%)
	.left .divider
		background-color: lighten($dark-color, 5%)
	.left .header
		color: darken($light-fg, 50%)
	.left.collapsed
		width: 80px

	.right
		width: 230px
		background-color: $light-color
		color: $dark-fg
	.right li:hover
		background: darken($light-color, 5%)
	.right .divider
		background-color: darken($light-color, 5%)
	.right .header
		color: lighten($dark-fg, 50%)
		background: none !important // sorry
	.right.collapsed
		width: 110px
</style>

<script type="text/javascript">
	export default {
		name: "zim-sidebar",
		data() {
			return {
				items: [
					{title: "Channels", icon: "chat"},
					{title: "About", icon: "settings"},
				],
				links: ["Lobby", "Group-Test", "Group-Num2", "jhkjhjuiyhuihuihygujhjhjk", "gfdgf gsfgs gsd fg fg sdfg sdfgsdg sgdf gsd sgdf gdf"],

				collapsed: false
			};
		}
	};
</script>