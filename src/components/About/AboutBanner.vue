<template>
	<section>
		<div class="wrapper">
			<h1>Monitor your Business Fuel consumptions</h1>
			<p>
				Stay ahead of your business fuel management, monitor power usage and
				avoid discrepancies in fuel purchase with Gensys powered by Epump
			</p>
		</div>
		<img src="@/assets/about-line.png" />
	</section>
</template>

<script>
export default {
	name: "AboutBanner",
};
</script>

<style scoped>
section {
	background: white;
}
.wrapper {
	padding-top: 140px;
	width: 50%;
	text-align: center;
	margin: auto;
	padding-bottom: 20px;
}

h1 {
	width: 90%;
	margin: auto;
	font-weight: 600;
	font-size: 64px;
}

p {
	width: 80%;
	margin: auto;
	margin-top: 20px;
	font-size: 20px;
}
img {
	width: 100% !important;
}
</style>
