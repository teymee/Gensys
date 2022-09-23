<template>
	<section class="general mb-3">
		<section class="mx-auto my-5">
			<div class="row header">
				<div
					class="col-lg-5 col-xs-6"
					data-aos="fade-right"
					data-aos-duration="1000"
				>
					<svg
						width="486"
						height="13"
						viewBox="0 0 486 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M485.042 6.57898L475.042 0.805477V12.3525L485.042 6.57898ZM0.960938 7.57898H476.042V5.57898H0.960938V7.57898Z"
							fill="#46266E"
						/>
					</svg>
				</div>
				<div
					class="col-lg-7 col-xs-6"
					data-aos="zoom-in"
					data-aos-duration="1600"
					data-aos-delay="300"
				>
					<h1>How Gensys Works</h1>
					<p class="mx-auto p-width">
						Gensys helps customers keep track of their fuel consumption. It is
						programmed to detect anomalies in different instances. This is how
						it works:
					</p>
				</div>
			</div>

			<div class="row mt-3 w-100 steps">
				<div
					class="col-md-12 col-lg-4 col-sm-12 mt-sm-3 step"
					data-aos-duration="1500"
					data-aos-delay="500"
					data-aos="zoom-in"
				>
					<div class="py-2 px-3 inner" style="border-radius: 20px">
						<div class="px-4">
							<h4 class="mt-5 step-num">1</h4>
							<p class="mt-3 mb-5">
								We install Automated Tank Guage probes (ATG probes) in tanks to
								take stock of products as well as the level of water in the tank
								if any, and the temperature in the tank.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-md-12 col-lg-4 col-sm-12 mt-sm-3 step"
					data-aos-duration="1500"
					data-aos-delay="600"
					data-aos="zoom-in"
				>
					<div class="py-2 px-3 inner" style="border-radius: 20px">
						<div class="px-4">
							<h4 class="mt-5 step-num">2</h4>
							<p class="mt-3 mb-5">
								We install a console in the utility office that is hooked to the
								probe and keeps track of the operating hours of both generator
								and network power.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-md-12 col-lg-4 col-sm-12 mt-sm-3 step"
					data-aos-duration="1500"
					data-aos-delay="750"
					data-aos="zoom-in"
				>
					<div class="py-2 px-3 inner" style="border-radius: 20px">
						<div class="px-4">
							<h4 class="mt-5 step-num">3</h4>
							<p class="mt-3 mb-5 pb-1">
								Gensys transmits the received information to the cloud where our
								algorithm filters the information to detect anomalies and
								management gets all the information in real-time, online.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
export default {
	name: "Fifth",
};
</script>

<style scoped>
.general {
	width: 100%;
	margin: auto;
	margin-top: 80px;
}

.get-started {
	border-radius: 20px;
	width: 90%;
	background-image: url("@/assets/Big_card.png");
	background-color: #cccccc;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}
h4 {
	background-color: #46266e;
	width: 35px;
	color: white;
	text-align: center;
	font-size: 18px;
	border-radius: 50%;
	padding: 7px 0;
}
.header {
	width: 95%;
	margin: auto;
	align-items: center;
}
.inner {
	width: 90%;
}
.header h1 {
	margin-bottom: 50px;
}
.header svg {
	width: 100%;
	margin-top: 60px;
}
p {
	width: 100%;
	font-size: 13px;
}
h1 {
	color: #46266e;
	font-weight: 700;
	font-size: 38px;
}

.inner-get-started {
	width: 85%;
	margin: auto auto;
}

.inner-get-started img {
	width: 550px;

	height: 350px;
}

.inner-get-started h3 {
	font-weight: 700;
	margin-top: -45px;
	line-height: 50px;
	font-size: 30px;
}

.inner-text button {
	padding: 10px;
}
.steps {
	width: 90% !important;
	margin: auto;
}

.steps p {
	width: 100%;
}
@media screen and (max-width: 800px) {
	section {
		width: 100%;
	}

	.steps {
		width: 95% !important;
	}
	.header {
		width: 95%;
		text-align: center;
		margin-top: 70px !important;
	}
	.header svg {
		display: none;
	}
	.header h1 {
		font-size: 24px !important;
	}
	.step {
		text-align: center;
		margin-top: 20px;
	}
	.step h4 {
		margin-top: 20px !important;
	}
	. h1,
	h3 {
		font-size: 20px;
	}
	.header p {
		font-size: 13px;
		margin-top: -30px;
	}

	.col-sm-12 {
		margin-bottom: 10px;
	}
	.inner-get-started img {
		width: 90%;
		height: 97%;
	}

	.inner-get-started {
		width: 100% !important;
		display: flex;
		justify-content: center;
	}
	.get-started {
		width: 100%;
		border-radius: 10px;
	}

	.inner-text {
		width: 100%;
		text-align: center;
		margin-top: 40px;
	}

	.inner-text h3 {
		width: 100%;
		font-size: 20px;
		line-height: 30px !important;
	}

	p {
		width: 100%;
		font-size: 13px !important;
	}
}
</style>
