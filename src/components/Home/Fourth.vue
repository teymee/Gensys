<template>
	<section class="wrapper mx-auto">
		<div
			class="row my-5 pt-4 text-sm-center bg-white rounded-3 real-time-section"
		>
			<div
				class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center img-wrapper"
			>
				<img
					src="@/assets/Frame2.png"
					alt="fuel tank"
					data-aos="fade-right"
					data-aos-duration="1300"
					class="first-img"
				/>
			</div>
			<div
				class="col-lg-6 col-md-12 col-sm-12 real-time-text"
				data-aos="fade-left"
				data-aos-duration="1300"
			>
				<h2>Real-time remote monitoring</h2>
				<p class="mt-4">
					Gensys gives access to remote tracking of fueling activities. The
					system records fill time, fuel and water level, and any other crucial
					data regarding the fueling procedure while giving detailed reports and
					analyses that give you a greater understanding of your fuel usage
					patterns. Utility staff can use this control system to fully control
					the fueling process, ensuring that generators are safe and operating
					effectively.
				</p>
			</div>
		</div>

		<div class="row my-5">
			<div class="col-lg-6 col-md-12 col-sm-12">
				<div class="container mx-auto py-3 bg-white rounded-3">
					<div class="d-flex justify-content-center mb-4 img-wrapper">
						<img
							src="@/assets/frame3.png"
							alt="Gensys Dashboard"
							data-aos="fade-right"
							data-aos-duration="1300"
							class="image second-img"
						/>
					</div>
					<div
						class="text-section mx-auto"
						data-aos="fade-left"
						data-aos-duration="1300"
					>
						<h2 class="text-left">Monitor Power Source</h2>
						<p class="mt-4">
							With Gensys you can know the source of your current power supply.
							Gensys monitors and compares hours spent using the generator and
							the power grid. This way, you can track your energy usage and make
							sure you are getting the most out of your power sources.
						</p>
					</div>
				</div>
			</div>

			<div class="col-lg-6 col-md-12 col-sm-12 rounded-3 order-fuel">
				<div class="container mx-auto py-3 bg-white rounded-3">
					<div class="d-flex justify-content-center mt-3 mb-5 img-wrapper">
						<img
							src="@/assets/Frame1.png"
							alt="Gensys Dashboard"
							data-aos="fade-right"
							data-aos-duration="1300"
							class="last-img"
						/>
					</div>
					<div
						class="text-section mx-auto "
						data-aos="fade-left"
						data-aos-duration="1300"
					>
						<h2 class="text-left">Order for fuel</h2>
						<p class="mt-4">
							With Epump's long-standing partnership with reputable fuel
							stations, customers can order fuel products and have them
							delivered right to their generator tank from the app. With this
							convenient service, customers can avoid the inconvenience of
							running out of fuel during a power outage with top-notch service
							delivery guaranteed.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Fourth",
};
</script>

<style scoped>
.wrapper {
	align-items: center !important;
	width: 87%;
	padding: 20px 0;
	border-radius: 15px;
}
img {
	width: 600px;
}
.text-section {
	width: 88%;
}

.real-time-text {
	margin-top: 7%;
	text-align: left;
}
.real-time-text p {
	width: 80%;
}
.image {
	width: 500px;
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
}
.last-img {
	width: 550px;
	height: 280px;
}

h2 {
	font-weight: 700;
	font-size: 32px;

	width: 100%;
}

p {
	font-size: 15px;
	margin-bottom: 20px;
	line-height: 27px;
	text-align: left;
}

a {
	border-bottom: 1px solid #46266e;
	color: #46266e;
	font-weight: 700;
}
@media screen and (max-width: 800px) {
	section {
		width: 100% !important;
	}
	.img-wrapper {
		width: 100%;
	}
	.real-time-section {
		margin-top: 40px !important;
	}
	.first-img {
		height: 200px !important;
		width: 300px !important;
	}

	.image {
		width: 300px !important;
		height: 200px !important;
	}
	.last-img {
		width: 280px !important;
		height: 150px !important;
	}
	.real-time-text p,
	.text-section {
		width: 100% !important;
	}

	.order-fuel {
		margin-top: 30px;
	}

	h1,
	h2 {
		font-size: 20px;
		margin-top: -30px;
		text-align: center !important;
	}

	p {
		font-size: 13px;
		width: 100%;
		line-height: 22px;
		margin: auto;
		text-align: center;
		margin-bottom: 20px;
	}

	img {
		height: 326px;
		width: 435px;
		margin-bottom: 20px;
	}

	.switch {
		display: flex;
		flex-direction: column-reverse;
	}
	.switch h2 {
		margin-top: 120px;
	}
	.app-img {
		height: 200px;
		width: 435px;
	}
}
</style>
