<template>
	<section class="my-5">
		<div
			class="container d-lg-flex py-5 justify-content-around align-items-center wrapper"
		>
			<div class="text-white text-sm-center text-lg-start mb-sm-5 banner-text">
				<h1>Gensys</h1>
				<h5 class="fw-bold">Remote Access to Your Generator System</h5>
				<p class="mt-3 w-sm-100 w-lg-75 mb-5">
					Take control of your business generator and fueling activities, get
					accurate data, reduce costs and strengthen your operations.
				</p>
				<router-link to="'/'">
					<img
						src="@/assets/Playstore.png"
						alt="Get the mobile app"
						class="app-download"
					/>
				</router-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "SecondSection",
};
</script>

<style scoped>
section {
	width: 100%;
}

.wrapper {
	border-radius: 15px;
	width: 90%;
	background-image: url("@/assets/Big_card.png");

	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	margin-bottom: 20px;
	height: 450px;
}

.banner-text {
	max-width: 50%;
	position: absolute;
	left: 7%;
	top: 10%;
}

h1 {
	color: #ffbb00;
	font-weight: 700;
	font-size: 65px;
}

p {
	font-size: 15px;
}

h5 {
	font-size: 19px;
}

h6 {
	font-size: 17px;
}

@media screen and (max-width: 800px) {
	section {
		width: 100%;
		text-align: center;
	}

	.wrapper {
		background-image: url("@/assets/mobile-card.png");
		width: 100%;
		border-radius: 0;
		height: 600px;
	}

	.banner-text {
		max-width: 85% !important;
		margin-bottom: 100px;
		margin-top: -30px;
	}

	.app-download {
		height: 50px;
		margin-bottom: 30px;
	}
	img {
		margin-top: -30px;
	}

	p {
		font-size: 10px;
	}
	.tagline {
		display: none;
	}

	h5 {
		font-size: 20px;
	}

	h1 {
		font-size: 30px;
	}
}
</style>
