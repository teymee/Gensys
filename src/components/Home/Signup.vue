<template>
	<section data-aos="fade-up" data-aos-duration="1500">
		<div class="wrapper">
			<div class="text">
				<h2 class="text-capitalize">
					Sign up Now and keep track of your generator fueling activities.
				</h2>
				<p>
					Gensys is our solution to the challenge that makes managing your
					business fueling management difficuit.
				</p>
			</div>

			<div>
				<button>Get Started</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
section{
	background: red;
	width:93%;
	margin: auto auto;
	margin-bottom: 50px;
}

.wrapper {
	display: flex;
	padding: 50px 0;
	margin: auto auto;
	align-items: center;
	justify-content: space-around;
	width: 85%;
	background: linear-gradient(100.53deg, #653a91 38.62%, #1d122b 81.47%);
	margin-bottom: 20px;
	border-radius: 20px;
}

.text {
	width: 50%;
	color: white;
}

h2 {
	line-height: 50px;
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 40px;
}

button {
	border: none;
	color: #1a3365;
	font-size: 15px;
	padding: 17px 30px;
	border-radius: 5px;
	background: white;
}

@media screen and (max-width: 800px) {
	section {
		width: 100%;
	}
	.wrapper {
		flex-direction: column;
		width: 100%;
		border-radius: 0px;
	}

	.text {
		width: 90%;
		text-align: center;
	}

	h2 {
		line-height: 40px;
		font-size: 18px;
	}
	p {
		font-size: 13px;
		margin-top: -30px;
		margin-bottom: 40px;
	}
}
</style>
