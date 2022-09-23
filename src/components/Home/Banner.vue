<template>
	<section class="row mt-3">
		<div class="col-lg-7 col-sm-12 mt-3">
			<div
				class="banner-text mt-5"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<h3 class="mb-5">Monitor your Business’s Fuel consumption</h3>
				<p>
					Stay ahead of your business fuel management, monitor power usage and
					avoid discrepancies in fuel purchase with Gensys powered by Epump
				</p>

				<div class="button">
					<router-link to="/">
						<button
							class="px-3 border-0 outline-0 rounded py-3"
							style="
								color: white;
								background-color: #46266e;
								margin-right: 10px;
							"
						>
							<svg
								width="20"
								height="23"
								viewBox="0 0 25 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								style="margin-top: -1px"
							>
								<path
									d="M13.431 13.4236L17.8665 8.98806L3.54 0.93606C2.5905 0.42306 1.701 0.35106 0.921 0.91206L13.431 13.4236ZM18.6225 18.6166L23.2335 16.0231C24.1335 15.5191 24.627 14.8051 24.627 14.0131C24.627 13.2226 24.1335 12.5071 23.235 12.0031L19.0605 9.65856L14.361 14.3566L18.6225 18.6166ZM0.15 2.00256C0.0539999 2.29806 0 2.62806 0 2.98956V25.0471C0 25.6186 0.126 26.1106 0.354 26.5021L12.4995 14.3551L0.15 2.00256ZM13.431 15.2851L1.353 27.3646C1.584 27.4531 1.833 27.4996 2.0955 27.4996C2.5635 27.4996 3.051 27.3616 3.5475 27.0856L17.43 19.2901L13.431 15.2851Z"
									fill="white"
								/>
							</svg>

							<span class="ms-1"> Available on Playstore </span>
						</button>
					</router-link>
					<button
						class="px-3 border-0 outline-0 rounded py-3 contact-button"
						style="background-color: transparent; color: #46266e"
					>
						Contact Epump
						<svg
							width="7"
							height="10"
							viewBox="0 0 7 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="ms-2"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L6.03033 4.46967C6.32322 4.76256 6.32322 5.23744 6.03033 5.53033L2.03033 9.53033C1.73744 9.82322 1.26256 9.82322 0.96967 9.53033C0.676777 9.23744 0.676777 8.76256 0.96967 8.46967L4.43934 5L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z"
								fill="#46266e"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div class="col-lg-5 col-sm-12">
			<div class="banner-img">
				<img
					class="banner1 col-sm-12"
					src="@/assets/banner1.png"
					alt=""
					data-aos="fade-left"
					data-aos-duration="1200"
					data-aos-delay="100"
				/>
				<div class="row banner-images mt-3">
					<div class="col-lg-6">
						<img
							src="@/assets/banner2.png"
							alt=""
							class="banner2"
							data-aos="fade-up"
							data-aos-delay="300"
							data-aos-duration="1500"
						/>
					</div>
					<div class="col-lg-6">
						<img
							src="@/assets/banner3.png"
							alt=""
							class="banner3"
							data-aos="fade-up"
							data-aos-delay="500"
							data-aos-duration="2000"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Banner",
};
</script>

<style scoped>
section {
	width: 85%;
	margin: auto auto;
	padding-top: 100px !important;
}
/* .banner-text {
	margin-left: 30px;
} */
.banner1 {
	width: 530px;
	height: 280px;
}
.banner2,
.banner3 {
	height: 275px;
}
.banner3 {
	margin-left: 20px;
}

.banner-images {
	width: 520px;
}

.button {
	margin-top: 70px;
	margin-bottom: 90px;
	display: flex;
	align-items: center;
}

h3 {
	font-size: 60px;
	font-weight: 400;
	width: 88%;
	line-height: 75px;
}

p {
	font-size: 19px;
	color: #1e1e1e;
	width: 85%;
}
.contact-button {
	border: 1px solid #46266e !important;
}

@media screen and (max-width: 800px) {
	section {
		width: 100%;
	}
	.banner-text {
		margin-left: 0px;
		text-align: center;
	}
	h3 {
		font-size: 23px;
		width: 100%;
		margin-top: -75px;
		font-weight: 700;
		line-height: 30px;
	}

	.banner-img {
		display: flex !important;
		width: 100%;
		justify-content: space-between;
		align-content: center;
		align-items: center;
	}
	.banner1 {
		width: 90%;
		height: 155px;
		margin: auto;
	}

	.banner-images {
		display: none;
	}

	p {
		font-size: 13px;
		width: 90%;
		margin: auto;
		margin-top: -30px;
	}

	button {
		flex-flow: column;

		font-size: 13px;
	}
	.button {
		margin:auto;
		margin-top: 25px;
		margin-bottom: 50px;
		width:100%;
		display:flex;
		justify-content:center;
		
	}
	.header-button {
		width: 90%;
		margin: auto;
	}
}
</style>
