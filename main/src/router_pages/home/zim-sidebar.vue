<template>
	<v-navigation-drawer v-model="drawer" class="pb-0 elevation-4" hide-overlay stateless app>
		<v-layout fill-height>
			<v-navigation-drawer
				dark
				mini-variant
				stateless
				value="true"
			>
				<v-toolbar flat class="transparent">
					<v-list class="pa-0">
						<v-list-tile avatar style="margin-bottom: 7px;">
							<v-list-tile-avatar>
								<img src="https://randomuser.me/api/portraits/men/85.jpg">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>John Leider</v-list-tile-title>
							</v-list-tile-content>
							<v-list-tile-action>
								<v-btn icon @click.native.stop="mini = !mini">
									<v-icon>chevron_left</v-icon>
								</v-btn>
							</v-list-tile-action>
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
				mini: true,
				right: null,
				color: "blue-grey",
				messages: [
					{ username: "Krixano", text: "Testing" },
					{ username: "Git Center", text: "Blah Blah Blah" },
					{ username: "Thunder", text: "test-in" },
					{ username: "Thunder", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Thunder", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Git Center", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Thunder", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Glightstar", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Krixano", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Krixano", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Thunder", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Git Center", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Thunder", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Thunder", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Thunder", text: "Lorem Ipsum Dolor Amet!" },
					{ username: "Git Center", text: "Lorem Ipsum Dolor Amet!" },
				]
			};
		}
	};
</script>