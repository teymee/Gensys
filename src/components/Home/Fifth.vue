<template>
	<section class="general mb-3">
		<section class="mx-auto my-5">
			<div
				class="text-center"
				data-aos="zoom-in"
				data-aos-duration="1600"
				data-aos-delay="300"
			>
				<h1>Our Other Products</h1>
			</div>

			<div class="row mt-3 w-100 steps">
				<div
					class="col-md-12 col-lg-4 col-sm-12 mt-sm-3 step"
					data-aos-duration="1500"
					data-aos-delay="500"
					data-aos="zoom-in"
				>
					<div class="inner">
						<div class="px-4">
							<div>
								<img src="@/assets/epump-product.png" />
							</div>
							<h4 class="mt-3">Epump</h4>
							<p class="my-3">
								The cloud-based software that gives you control over your fuel
								station by improving the stations' ability to monitor, control
								and grow.
							</p>
							<span>Learn more</span>
						</div>
					</div>
				</div>

				<div
					class="col-md-12 col-lg-4 col-sm-12 mt-sm-3 step"
					data-aos-duration="1500"
					data-aos-delay="500"
					data-aos="zoom-in"
				>
					<div class="inner">
						<div class="px-4">
							<div>
								<img src="@/assets/epump-product.png" />
							</div>
							<h4 class="mt-3">Epump Go</h4>
							<p class="my-3">
								The top-of-the-line forecourt controller developed in Africa to
								give pumps in your filling station advanced capabilities.
							</p>
							<span>Learn more</span>
						</div>
					</div>
				</div>

				<div
					class="col-md-12 col-lg-4 col-sm-12 mt-sm-3 step"
					data-aos-duration="1500"
					data-aos-delay="500"
					data-aos="zoom-in"
				>
					<div class="inner">
						<div class="px-4">
							<div>
								<img src="@/assets/atg.png" />
							</div>
							<h4 class="mt-3">ATG</h4>
							<p class="my-3">
								Automatic tank gauges for fuel tanks used to accurately measure
								stock level, giving you data like product volume and water
								volume.
							</p>
							<span>Learn more</span>
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
	font-weight: 600;
	font-size: 24px;
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
	background: white;
	border: 1px solid #d1d3d4;
	padding: 30px 10px;
	border-radius: 15px;
}
span {
	color: #46266e;
	border-bottom: 1px solid #46266e;
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
	.inner {
		width: 100%;
	}

	p {
		width: 100%;
		font-size: 13px !important;
	}
}
</style>
