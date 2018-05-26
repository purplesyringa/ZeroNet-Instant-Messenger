<template>
	<div class="message-list">
		<template v-for="message in messages">
			<div class="message">
				<div class="avatar">
					<img :src="message.avatar">
				</div>

				<div class="name">{{message.name}}</div>
				<div class="content">{{message.content}}</div>
				<div class="clearfix" />
			</div>
			<div class="clearfix" />
		</template>
	</div>

	<!--
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
		</v-card>
	</v-content>
	-->
</template>

<style lang="sass" scoped>
	.message-list
		overflow-y: scroll
		height: 100%


	.message
		display: block
		margin: 16px

	.avatar
		display: inline-block
		width: 48px
		height: 48px
		margin-right: 16px
		float: left

		border-radius: 50%
		overflow: hidden
	.avatar img
		width: 100%

	.name
		margin-bottom: 4px

		font-weight: bold
</style>

<script type="text/javascript">
	export default {
		name: "zim-message-list",
		data() {
			return {
				messages: [
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Pinging ya all!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Anyone here?"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Hello?!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/84.jpg",
						name: "Git Center",
						content: "I'm here"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Hello @gitcenter!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/86.jpg",
						name: "Krixano",
						content: "Welcome back, John Leider!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Hi @Krixano!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Pinging ya all!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Anyone here?"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Hello?!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/84.jpg",
						name: "Git Center",
						content: "I'm here"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Hello @gitcenter!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/86.jpg",
						name: "Krixano",
						content: "Welcome back, John Leider!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Hi @Krixano!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Pinging ya all!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Anyone here?"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Hello?!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/84.jpg",
						name: "Git Center",
						content: "I'm here"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Hello @gitcenter!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/86.jpg",
						name: "Krixano",
						content: "Welcome back, John Leider!"
					},
					{
						avatar: "https://randomuser.me/api/portraits/men/85.jpg",
						name: "John Leider",
						content: "Hi @Krixano!"
					}
				]
			};
		}
	};
</script>