<template>
	<section data-aos-duration="1500" data-aos-delay="500" data-aos="fade-up">
		<div>
			<div>
				<h1 class="text-capitalize text-center">Our trusted clients</h1>
			</div>
		</div>

		<div class="d-flex justify-content-between images">
			<div class="">
				<div class="wrapper">
					<img src="@/assets/epump1.png" />
				</div>
			</div>

			<div class="">
				<div class="wrapper">
					<img src="@/assets/driveme.png" />
				</div>
			</div>

			<div class="">
				<div class="wrapper">
					<img src="@/assets/jumia.png" />
				</div>
			</div>

			<div class="">
				<div class="wrapper">
					<img src="@/assets/appzone.png" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "TrustedClients",
};
</script>

<style scoped>
section {
	width: 60%;
	margin: auto;
	margin-top: 100px;
	margin-bottom: 100px;
}

h1 {
	font-weight: 700;
	font-size: 38px;
	margin-bottom: 50px;
}
@media screen and (max-width: 800px) {
	section {
		width: 100%;
		margin-top: 60px;
	}
	h1 {
		font-size: 28px;
		margin-bottom: 30px;
	}
	.wrapper {
		display: flex;
		justify-content: center;
	}
	img {
		width: 70%;
	}
}
</style>
