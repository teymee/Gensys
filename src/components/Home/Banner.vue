<template>
	<section class="row mt-3">
		<div class="col-lg-7 col-sm-12 mt-3">
			<div class="banner-text mt-5">
				<h3 class="mb-5">
					Monitor Your Power Consumption With
					<span class="text-warning">Gensys</span>
				</h3>
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
							Download Gensys
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
				<img class="banner1" src="@/assets/banner1.png" alt="" />
				<div class="row banner-images mt-3">
					<div class="col-lg-6">
						<img src="@/assets/banner2.png" alt="" class="banner2" />
					</div>
					<div class="col-lg-6">
						<img src="@/assets/banner3.png" alt="" class="banner3" />
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
	width: 90%;
	margin: auto auto;
}
.banner-text {
	margin-left: 30px;
}
.banner1 {
	width: 560px;
	height: 280px;
}
.banner2,
.banner3 {
	height: 300px;
}

.banner-images {
	width: 600px;
}

.button {
	margin-top: 70px;
	margin-bottom: 90px;
}
h3 {
	font-size: 60px;
	font-weight: bold;
	width: 90%;
}

p {
	font-size: 19px;
	color: #1e1e1e;
	width: 85%;
}

@media screen and (max-width: 800px) {
	.contact-button {
		border: 1px solid #46266e !important;
	}
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
		width: 210px;
		height: 155px;
	}

	.banner2,
	.banner3 {
		height: 70px;
		width: 100%;

		margin-left: 6px;
	}
	.banner2 {
		margin-bottom: 10px;
		margin-top: -20px;
	}

	

	p {
		font-size: 10px;
		width: 90%;
		margin: auto;
		margin-top: -30px;
	}

	button {
		flex-flow: column;

		font-size: 10px;
	}
	.button {
		margin-top: 25px;
		margin-bottom: 50px;
	}
	.header-button {
		width: 90%;
		margin: auto;
	}
}
</style>
