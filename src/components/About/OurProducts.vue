<template>
	<section>
		<h2 class="mx-5 text-center">Our Products</h2>

		<div class="products py-4">
			<div class="img-container d-flex justify-content-around">
				<img src="@/assets/remis.png" alt="" />
				<img src="@/assets/epump.png" alt="" />
				<img src="@/assets/gensys.png" alt="" />
				<img src="@/assets/epump_go.png" alt="" />
				<img src="@/assets/product.png" alt="" />
				<img src="@/assets/remis_app.png" alt="" />
			</div>
		</div>

		<div class="get-started mx-auto text-center py-5">
			<h2>Join the <span style="color: #ffbb00">Gensys</span> User</h2>
			<p>
				It’s time to choose a life of convenience, freedom and control, Download
				the Gensys app and sign up to join the Gensys User.
			</p>
			<div class="button">
				<router-link to="/">
					<button
						class="px-3 border-0 outline-0 rounded py-3"
						style="color: #46266e; background-color: white; margin-right: 10px"
					>
						Get started today
					</button>
				</router-link>
				<button
					class="px-3 border-0 outline-0 rounded py-3 text-white"
					style="background-color: transparent"
				>
					Contact sales
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
							fill="white"
						/>
					</svg>
				</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "OurProducts",
};
</script>

<style scoped>
.header {
	width: 65%;
	margin: auto;
}
.header img {
	margin: 0 120px;
}
.products {
	width: 80%;
	margin: auto;
	margin-top: 50px;
	margin-bottom: 50px;
	background-color: #e4d9f2;
	border-top-left-radius: 20px;
	border-bottom-right-radius: 20px;
}

.products img {
	width: 90px;
}

.get-started {
	border-radius: 15px;
	width: 80%;
	background-image: url("@/assets/design-card.png");
	background-color: #cccccc;
	/* height: 500px; */
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	margin-bottom: 20px;
}

.get-started h2,
.get-started p {
	color: white;
}
.get-started p {
	margin-bottom: 100px;
	width: 50%;
	margin: auto;
	margin-bottom: 50px;
}
h2 {
	color: #1a3365;
	font-size: 43px;
	font-weight: 700;
}

@media screen and (max-width: 800px) {
	section {
		width: 100%;
	}

	h2 {
		font-size: 25px;
	}
	.col-sm-12 {
		margin-top: 20px;
	}

	p {
		font-size: 13px;
		margin-top: 20px;
		margin: auto;
		width: 85%;
	}
	.get-started {
		width: 95%;
	}

	button {
		flex-flow: column;

		font-size: 14px;
	}
	.button {
		margin-top: -10px;
	}

	.get-started p {
		margin-bottom: 100px;
		width: 100%;
		margin: auto;
		margin-bottom: 50px !important;
	}
	.img-container img {
		width: 55px !important;
		margin-right: 20px;
	}
	.img-container {
		padding: 30px 10px;
		max-width: 95%;
		margin: auto;
		overflow-x: scroll !important;
	}
}
</style>
