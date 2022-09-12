<template>
	<section class="row wrapper mx-auto my-5 text-sm-center">
		<div class="col-lg-6 col-md-12 col-sm-12 image">
			<img
				src="@/assets/Frame2.png"
				alt="fuel tank"
				data-aos="fade-right"
				data-aos-duration="1300"
			/>
		</div>
		<div
			class="col-lg-6 col-md-12 col-sm-12"
			data-aos="fade-left"
			data-aos-duration="1300"
		>
			<h2 style="margin-top: -20px">Real-time remote monitoring</h2>
			<p class="mt-4">
				Gensys is a comprehensive solution for fuel tracking and management. It
				allows you to remotely keep track of fueling activities. The system
				records the fill time, fuel and water level, and any other crucial data
				regarding the fueling procedure. As a result, utility staff can use the
				smart fuel control system to fully control the fueling procedure,
				ensuring that generators are safe and operating effectively.
			</p>
		</div>
	</section>

	<section class="row mx-auto my-5 text-sm-center switch w-75">
		<div
			class="col-lg-6 col-md-12 col-sm-12"
			data-aos="fade-left"
			data-aos-duration="1300"
		>
			<h2>Monitor Power Source</h2>
			<p class="mt-4">
				The Gensys software allows you to know the source of your current power
				supply. With Gensys, you can monitor and compare hours spent using the
				generator versus the power grid. This way, you can track your energy
				usage and you can make sure you are getting the most out of your power
				sources and managing costs in the long runby using less generator power
			</p>
		</div>

		<div class="col-lg-6 col-md-12 col-sm-12 image mt-sm-5 app-img">
			<img
				src="@/assets/frame3.png"
				alt="Gensys Dashboard"
				data-aos="fade-right"
				data-aos-duration="1300"
			/>
		</div>
		'
	</section>

	<section class="row w-75 mx-auto my-5 text-sm-center">
		<div class="col-lg-6 col-md-12 col-sm-12 image">
			<img
				src="@/assets/Frame1.png"
				alt="fuel tank"
				data-aos="fade-right"
				data-aos-duration="1300"
			/>
		</div>
		<div
			class="col-lg-6 col-md-12 col-sm-12"
			data-aos="fade-left"
			data-aos-duration="1300"
		>
			<h2>Order for fuel</h2>
			<p class="mt-4">
				Because of Epump’s long-standing partnership with reputable fuel
				stations, Customers can order fuel products and have them deelivered
				right to their generator tank from the app. With this convenient
				servive, customers can avoid the inconvenience of running out of fuel
				during a power outagewith top notch service delivery guaranteed.
			</p>
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
	width: 80%;
}
img {
	height: 500px;
	width: 435px;
}

.col-md-12 h2 {
	text-align: left;
}

.app-img {
	margin-top: -50px !important;
}
h2 {
	color: #46266e;
	font-weight: 700;
	font-size: 32px;
	margin-top: 20%;
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

	.wrapper {
		margin-top: -70px !important;
	}
	h1,
	h2 {
		font-size: 20px;
		margin-top: -30px;
		text-align: center !important;
	}

	p {
		font-size: 10px;
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
	.image {
		width: 100% !important;
		display: flex;
		justify-content: center;
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
