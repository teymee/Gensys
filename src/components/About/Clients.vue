<template>
	<section>
		<div>
			<h1 class="text-capitalize text-center" data-aos-duration="1500"
				data-aos-delay="500"
				data-aos="fade-up">Our trusted clients</h1>
		</div>

		<div class="row cards">
			<div class="cardd col-lg-4 col-md-12 col-sm-12" data-aos-duration="1500"
				data-aos-delay="500"
				data-aos="zoom-in">
				<div class="wrapper">
					<img src="@/assets/client1.png" />
				</div>
			</div>

			<div class="cardd col-lg-4 col-md-12 col-sm-12" data-aos-duration="1500"
				data-aos-delay="500"
				data-aos="zoom-in">
				<div class="wrapper">
					<img src="@/assets/client2.png" />
				</div>
			</div>

			<div class="cardd col-lg-4 col-md-12 col-sm-12" data-aos-duration="1500"
				data-aos-delay="500"
				data-aos="zoom-in">
				<div class="wrapper">
					<img src="@/assets/client3.png" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Clients",
};
</script>

<style scoped>
section {
	width: 89%;
	margin: auto auto;
	margin-top: 70px;
}
h1 {
	font-weight: 700;
	font-size: 38px;
	margin-bottom: 50px;
}
img {
	width: 100%;
	height: 100%;
	border-radius: 15px;
}

@media screen and (max-width: 800px) {
	section {
		margin-top: 30px;
	}
	.cardd {
		margin-top: 20px;
	}
	h1 {
		font-weight: 700;
		font-size: 27px;
		margin-bottom: 30px;
	}
}
</style>
