<template>
	<section class="text-center mx-auto">
		<h1>Why Gensys</h1>
		<p class="mx-auto">
			Because Gensys brings transparency to the entire generator fueling
			process. With our solution, you can remotely monitor and regulate your
			business fueling and keep track of the number of hours spent using the
			power grid. Gensys also allows you keep track of the number of hours spent
			using power grid versus the time spent using generator.
		</p>
	</section>
</template>

<script>
export default {
	name: "ThirdSection",
};
</script>

<style scoped>
section {
	width: 79%;
	margin-top: 70px;
	margin-bottom: 100px;
}
h1 {
	color: #1a3365;
	font-weight: 700;
	font-size: 36px;
	margin-top: -40px;
	margin-bottom: 20px;
}
p {
	font-size: 16px;
	width: 100%;
}

@media screen and (max-width: 800px) {
	section {
		width: 95% !important;
	}
	h1 {
		font-size: 20px;
		margin-top: -40px;
		margin-bottom: 20px;
	}

	p {
		font-size: 10px;
		width: 100%;
		margin: auto;
		margin-top: 10px;
	}
}
</style>
