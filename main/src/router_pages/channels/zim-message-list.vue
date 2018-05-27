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
	import ChannelManager from "libs/channel/manager";

	export default {
		name: "zim-message-list",
		data() {
			return {
				messages: [],
				current: null
			};
		},

		mounted() {
			this.$eventBus.$on("showChannel", this.onShowChannel);
			this.$eventBus.$on("showUser", this.onShowUser);
			this.$eventBus.$on("sendMessage", this.onSendMessage);
		},
		destroyed() {
			this.$eventBus.$off("showChannel", this.onShowChannel);
			this.$eventBus.$off("showUser", this.onShowUser);
			this.$eventBus.$off("sendMessage", this.onSendMessage);

			if(this.current) {
				this.current.off("message", this.onMessage);
			}
		},

		methods: {
			onShowChannel(name) {
				if(this.current) {
					this.current.off("message", this.onMessage);
				}

				this.current = ChannelManager.getChannel(name);
				this.current.on("message", this.onMessage);
			},

			onMessage(message) {
				this.messages.push({
					avatar: "https://randomuser.me/api/portraits/men/85.jpg",
					name: message.userName,
					content: message.content
				});
			},

			onSendMessage(text) {
				this.current.send(text);
			}
		}
	};
</script>