<template>
	<section class="mx-auto my-5" data-aos="fade-up" data-aos-duration="1300">
		<div class="row align-items-center header">
			<div class="co-lg-6 col-md-6 col-sm-12">
				<div class="image">
					<img src="@/assets/headphone.png" alt="Headphones" />
				</div>
			</div>

			<div class="co-lg-6 col-md-6 col-sm-12">
				<div>
					<h2>Contact Us</h2>
					<p class="my-4">
						We are a tech organisation but we never leave our customers hanging.
						See our FAQ page to get answers to some of your questions. If you
						can’t find the answer you are looking for, send us an email or fill
						out the contact form below
					</p>

					<h4>Email : help@gensys.com</h4>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "First",
};
</script>

<style scoped>
section {
	width: 80%;
	padding-top: 70px;
}

h2,
h4 {
	color: #1a3365;
}
h4 {
	font-size: 20px;
	text-decoration: underline;
	margin-bottom: 20px;
	font-weight: 600;
}
h2 {
	font-size: 38px;
	margin-top: -30px;
	margin-bottom: 30px;
	font-weight: 700;
}

img {
	width: 500px;
}

p {
	font-size: 15px;
}
@media screen and (max-width: 800px) {
	.col-sm-12 {
		text-align: center;
	}
	section {
		margin-bottom: 100px !important;
	}
	h2 {
		font-size: 25px;
	}
	p {
		font-size: 13px;
	}
	h4 {
		font-size: 15px;
	}
	img {
		width: 70%;
		height: 97%;
	}
	.image {
		width: 100% !important;
		display: flex;
		justify-content: center;
		margin-top: 50px;
	}

	.header {
		display: flex;
		flex-direction: column-reverse;
	}
}
</style>
