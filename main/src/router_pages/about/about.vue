<template>
	<div class="about-container">
		<div class="header">ZeroNet Instant Messenger</div>

		<p>
			A project built together by:
		</p>
		<ol>
			<li>@Git Center, @Krixano (programming)</li>
			<li>@Thunder, @Glightstar and @Piloth (ideas)</li>
		</ol>

		<div class="footer">
			<a href="https://github.com/imachug/zeronet-instant-messenger">ZiM is open-source. We are looking for contributors.</a>
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.about-container
		width: 100%
		height: 100%
		padding: 28px 16px

	.header
		padding-right: 80px // 0 button

		font-size: 32px
		line-height: 40px

	.footer
		position: absolute
		bottom: 28px
</style>

<script type="text/javascript">
	export default {
		name: "about"
	};
</script>