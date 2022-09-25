<template>
	<section
		class="my-5"
		data-aos="fade-up"
		data-aos-easing="ease-out-cubic"
		data-aos-duration="2000"
	>
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

		<div class="img-wrapper">
			<img src="@/assets/home-last-banner.png" alt="" />
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
	display: flex;
	justify-content: space-between;
	background: linear-gradient(100.53deg, #653a91 38.62%, #1d122b 81.47%);
	width: 90%;
	margin: auto;
	border-radius: 20px;
}

.wrapper {
	border-radius: 15px;
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
.app-download {
	width: 170px;
}

@media screen and (max-width: 800px) {
	section {
		width: 100%;
		text-align: center;
		border-radius: 0px;
		flex-direction: column;
	}

	.banner-text {
		max-width: 90% !important;
		margin-bottom: 100px;
	}

	.app-download {
		height: 50px;
	}
	.img-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 170px !important;
	}
	img {
		width:90%;
		
	}

	p {
		font-size: 13px;
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
