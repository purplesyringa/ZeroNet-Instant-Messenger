<template>
	<div style="width: 100%; height: 100%;">
		<v-navigation-drawer v-model="drawer" class="pb-0" floating hide-overlay stateless absolute="true" app>
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
		<v-content style="width: 100%; height: 100%; padding-left: 0;">
			<div fill-height>Testing</div>
			<!--<v-card height="200px">-->
				<v-bottom-nav :value="true" :active.sync="e2" :color="color" absolute shift>
				</v-bottom-nav>
			<!--</v-card>-->
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
					{ title: 'Home', icon: 'dashboard' },
					{ title: "About", icon: 'settings' },
				],
				links: ['Lobby', 'Group-Test', 'Group-Num2'],
				mini: true,
				right: null,
				e2: 3,
				color: 'blue-grey'
			};
		}
	};
</script>