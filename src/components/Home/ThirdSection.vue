<template>
	<section
		class="text-center mx-auto"
		data-aos="fade-up"
		data-aos-duration="1300"
	>
		<h1>Why Gensys?</h1>

		<p style="margin-top: -5px" class="w-75 mx-auto">
			Because Gensys brings transparency to the entire generator fueling
			process. With our solution, you can remotely monitor and regulate your
			business fueling and keep track of the number of hours spent using the
			power grid.
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
		font-size: 13px;
		width: 100% !important;
		margin: auto;
		margin-top: 10px;
	}
}
</style>
