<template>
	<section>
		<div class="row wrapper">
			<div
				class="col-lg-6 col-md-12 col-sm-12"
				data-aos="fade-right"
				data-aos-duration="1300"
			>
				<img src="@/assets/about-img.png" />
			</div>

			<div
				class="col-lg-6 col-md-12 col-sm-12"
				data-aos="fade-left"
				data-aos-duration="1300"
			>
				<div>
					<h1 class="text-capitalize">
						A growing platform for modern businesses in Africa
					</h1>
					<p>
						Because Gensys brings transparency to the entire generator fueling
						process. With our solution, you can remotely monitor and regulate
						your business fueling and keep track of the number of hours spent
						using the power grid.Gensys transmits the received information to
						the cloud where our algorithm filters the information to detect
						anomalies and management gets all the information in real-time ,
						online
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "GrowingPlatform",
};
</script>

<style scoped>
section {
	width: 85%;
	margin: auto;
}
.wrapper {
	padding-top: 100px;
}
h1 {
	font-weight: 700;
	font-size: 38px;
}
p {
	margin-top: 70px;
	font-weight: 400;
	font-size: 18px;
}

@media screen and (max-width: 800px) {
	img {
		width: 100%;
	}

	.wrapper {
		text-align: center;
	}
	h1 {
		margin-top: 30px;
		font-size: 24px;
	}

	p {
		margin-top: 20px;
		font-size: 14px;
	}
}
</style>
