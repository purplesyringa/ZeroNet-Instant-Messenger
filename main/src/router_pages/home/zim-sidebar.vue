<template>
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
					<v-list-tile v-for="item in items" :key="item.title" @click="">
						<v-list-tile-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>{{ item.title }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

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
</template>

<style lang="sass" scoped>
	.list__tile__action, .list__tile__avatar
		flex: 0 0 48px !important
		min-width: 48px !important
	.list__tile__action .icon, .list__tile__avatar .avatar
		margin: 0 auto

	.list__tile__content
		padding-left: 8px
</style>

<script type="text/javascript">
	export default {
		name: "zim-sidebar",
		data() {
			return {
				drawer: true,
				items: [
					{ title: "Channels", icon: "chat", active: true },
					{ title: "About", icon: "settings" },
				],
				links: ["Lobby", "Group-Test", "Group-Num2"],
				mini: true
			};
		}
	};
</script>