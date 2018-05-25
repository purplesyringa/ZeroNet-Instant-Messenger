<template>
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

	<div>Messages</div>
</template>

<script type="text/javascript">
	export default {
		name: "zim-message-list",
		data() {
			return {
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