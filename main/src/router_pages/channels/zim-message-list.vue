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