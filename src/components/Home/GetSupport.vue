<template>
	<section data-aos="fade-up" data-aos-duration="1500">
		<div class="wrapper">
			<div class="text">
				<div>
					<h2>Get Instant Support when you need it</h2>
					<p>
						Send Us mail: <span>info@gensys.com</span> We are here to give our
						full support and serving you is our priority in other to reduce
						fraud and other casualty.
					</p>
					<button>Get started</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
	width: 90%;
	margin: auto;
}
.wrapper {
	display: flex;
	padding: 50px 0;
	margin: auto auto;
	align-items: center;
	justify-content: space-around;
	width: 85%;
	background-image: url("@/assets/support.png");
	background-color: #cccccc;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-bottom: 20px;
	border-radius: 20px;
	height: 450px;
	position: relative;
}

.text {
	width: 50%;
	position: absolute;
	left: 6%;
}
h2 {
	width: 80%;
	font-weight: 700;
	font-size: 38px;
	line-height: 58px;
	margin-bottom: 30px;
	color: #46266e;
}

p {
	font-size: 15px;
	width: 80%;
	margin-bottom: 30px;
}
span {
	color: #1a3365;
	font-weight: 700;
}

button {
	background: #46266e;
	color: white;
	padding: 13px 30px;
	border: none;
	border-radius: 5px;
}

@media screen and (max-width: 800px) {
	section {
		width: 100%;
	}
	.wrapper {
		flex-direction: column;
		width: 100%;

		background-image: url("@/assets/mobile-support.png");
	}

	.text {
		width: 90%;
		text-align: center;
		top: 0;
		padding-top: 20px;
	}
	h2 {
		width: 100%;
		font-weight: 700;
		font-size: 20px;
		line-height: 28px;
		margin-bottom: 10px;
	}

	p {
		font-size: 10px;
		width: 100%;
            margin-bottom: 10px;
	}
	button {
		font-size: 10px;
	}
}
</style>
