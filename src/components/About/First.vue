<template>
	<section>
		<div class="row first align-items-center justify-content-between my-5">
			<div class="col-lg-7 col-md-7 col-sm-12">
				<div data-aos="fade-left" data-aos-duration="1300">
					<h2>About Us</h2>
					<p>
						Gensys powered by Epump is a fuel management system built for
						corporations with industrial generators. Our technology allows you
						to remotely monitor and regulate generator fuelling, thereby
						fostering transparency and trust throughout the entire fuel
						management process.
					</p>
				</div>
			</div>

			<div
				class="col-lg-4 col-md-5 col-sm-12"
				data-aos="fade-right"
				data-aos-duration="1300"
			>
				<div class="image">
					<img src="@/assets/about.png" alt="" class="about-img" />
				</div>
			</div>
		</div>

		<div class="row second align-items-center my-5 switch">
			<div
				class="col-lg-6 col-md-6 col-sm-12"
				data-aos="fade-right"
				data-aos-duration="1300"
			>
				<div class="image">
					<img
						src="@/assets/fuelmetricsLogo.png"
						alt=""
						class="fuelmetrics-logo"
					/>
				</div>
			</div>

			<div
				class="col-lg-6 col-md-6 col-sm-12"
				data-aos="fade-left"
				data-aos-duration="1300"
			>
				<div>
					<h2 class="mb-3">Our Mission</h2>
					<p>
						Epump is making energy distribution efficient and profitable for
						companies across Africa. We are transforming Africa’s energy
						industry using software, hardware and cloud computing.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "First",
};
</script>

<style scoped>
section {
	width: 80%;
	margin: auto;
	padding-top: 70px;
}
.second img {
	width: 400px;
}

.first img {
	height: 350px;
}
h2 {
	color: #1a3365;
	font-size: 43px;
	font-weight: 700;
}
@media screen and (max-width: 800px) {
	.switch {
		display: flex;
		flex-direction: column-reverse;
	}

	h2 {
		font-size: 25px;
		margin-top: -30px;
	}
	p {
		font-size: 13px !important;
	}

	.col-md-7 p {
		width: 95%;
		margin: auto;
	}
	img {
		width: 70%;
		height: 97%;
	}
	.image {
		width: 100% !important;
		display: flex;
		justify-content: center;
		margin-top: -30px;
	}
	.col-sm-12 {
		text-align: center !important;
		width: 100%;
		margin-bottom: 60px;
	}

	.col-sm-12 p {
		margin-top: 25px;
	}

	section {
		width: 95%;
	}
	.about-img {
		width: 150px !important;
		height: 150px !important;
	}
	.fuelmetrics-logo {
		width: 200px !important;
	}
}
</style>
