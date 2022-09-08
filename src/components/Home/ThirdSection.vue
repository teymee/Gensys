<template>
	<section class="text-center w-75 mx-auto my-5">
		<h1>Why Gensys</h1>
		<p class="mx-auto">
			Gensys also allows you keep track of the number of hours spent using power
			grid versus the time spent using generator.
		</p>
	</section>
</template>

<script>
export default {
	name: "ThirdSection",
};
</script>

<style scoped>
h1 {
	color: #1a3365;
	font-weight: 700;
	font-size: 36px;
	margin-top: -40px;
	margin-bottom: 20px;
}
p {
	font-size: 16px;
	width: 50%;
}

@media screen and (max-width: 800px) {
	section {
		width: 95% !important;
	}
	h1 {
		font-size: 30px;
		margin-top: 30px;
		margin-bottom: 20px;
	}

	p {
		font-size: 13px;
		width: 100%;
		margin: auto;
		margin-top: 10px;
	}
}
</style>
