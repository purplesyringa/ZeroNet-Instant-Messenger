<template>
	<div style="width: 100%; height: 100%;">
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
		<v-toolbar app dense class="elevation-3">
			<v-toolbar-side-icon />
			<v-toolbar-title>ZeroNet Instant Messenger</v-toolbar-title>
		</v-toolbar>
		<v-navigation-drawer clipped dark app v-model="drawer2" right width="250" class="elevation-2" />
		<v-content style="padding-left: 0; padding-right: 0; padding-top: 0;" class="fill-height">
			<v-card class="fill-height" style="height: 100%;" flat>
				<div style="padding: 10px; padding-left: 15px; padding-right: 15px; overflow-y: scroll; height: 100%; width: 100%; position: absolute; padding-bottom: 50px;">
					<div v-for="(message, index) in messages" :style="index + 1 > messages.length - 1 || messages[index + 1].username != message.username ? 'margin-bottom: 7px;' : 'margin-bottom: 0;'">
						<strong style="font-size: 1.2em;" v-if="(index > 0 &&messages[index - 1].username != message.username) || index == 0">{{ message.username }}</strong>
						<div>{{ message.text }}</div>
					</div>
				</div>
				<div class="elevation-2" style="position: absolute; bottom: 0; width: 100%; height: 50px; background: #424242; color: white; padding: 3px;">
					<v-text-field
						name="Message"
						value="Testing"
						style="margin: 0; color: white;" color="white"
					/>
				</div>
				<!--<v-bottom-nav absolute :value="true" :color="color" style="height: 50px; padding: 0;">
					
				</v-bottom-nav>-->
			</v-card>
		</v-content>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "home",
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