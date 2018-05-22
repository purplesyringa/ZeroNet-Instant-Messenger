<template>
	<div style="width: 100%; height: 100%;">
		<v-navigation-drawer v-model="drawer" class="pb-0" hide-overlay stateless absolute="true" app>
			<v-layout fill-height>
				<v-navigation-drawer
				dark
				mini-variant
				stateless
				value="true"
				>
				<v-toolbar flat class="transparent">
					<v-list class="pa-0">
						<v-list-tile avatar>
							<v-list-tile-avatar>
								<img src="https://randomuser.me/api/portraits/men/85.jpg" style="margin-bottom: 7px;">
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
					<v-divider></v-divider>
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
				<v-list class="grow">
					<v-subheader>Channels</v-subheader>
					<v-list-tile
					v-for="link in links"
					:key="link"
					@click=""
					>
						<v-list-tile-title v-text="link"></v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-layout>
		</v-navigation-drawer>
		<v-content app style="height: 100%; padding-left: 0; padding-right: 0;">
			<div style="padding: 10px; padding-left: 15px; padding-right: 15px;">
				<div v-for="(message, index) in messages" style="margin-bottom: 5px;">
					<strong style="font-size: 1.2em;" v-if="(index > 0 &&messages[index - 1].username != message.username) || index == 0">{{ message.username }}</strong>
					<div>{{ message.text }}</div>
				</div>
			</div>
			<!--<v-card height="200px">-->
				<v-bottom-nav absolute :value="true" :active.sync="e2" :color="color">
				</v-bottom-nav>
			<!--</v-card>-->
		</v-content>
		<v-navigation-drawer dark app v-model="drawer2" absolute="true" right>
		</v-navigation-drawer>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "home",
		data() {
			return {
				drawer: true,
				items: [
					{ title: 'Home', icon: 'dashboard' },
					{ title: "About", icon: 'settings' },
				],
				links: ['Lobby', 'Group-Test', 'Group-Num2'],
				mini: true,
				right: null,
				e2: 3,
				color: 'blue-grey',
				messages: [
					{ username: "Krixano", text: "Testing" },
					{ username: "Git Center", text: "Blah Blah Blah" },
					{ username: "Thunder", text: "test-in" },
					{ username: "Thunder", text: "Another message sent!" },
				]
			};
		}
	};
</script>