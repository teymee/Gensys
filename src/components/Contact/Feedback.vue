<template>
	<section
		class="mx-auto my-5"
		data-aos="fade-up"
		data-aos-delay="700"
		data-aos-duration="1300"
	>
		<div class="row align-items-center">
			<div class="co-lg-6 col-md-6 col-sm-12">
				<div class="first-header">
					<h2>Your Feedback is our priority</h2>
					<p class="my-4">
						We are committed to innovation and competence in other to provide
						profient solution. Hope to hear from you . Thanks!
					</p>
				</div>
			</div>

			<div class="co-lg-6 col-md-6 col-sm-12">
				<div>
					<form class="bg-white p-2 shadow-sm rounded-2">
						<div class="inner-form">
							<div>
								<label class="d-block mb-2">Name</label>
								<input type="text" placeholder="Enter fullname" />
							</div>

							<div>
								<label class="d-block mb-2">Email</label>
								<input type="email" placeholder="You@email.com" />
							</div>

							<div>
								<label class="d-block mb-2">Phone Number</label>
								<input type="tel" placeholder="Phone Number" />
							</div>

							<div>
								<label class="d-block mb-2">Enquiry</label>
								<textarea
									placeholder="Would like to know your taught about gensys"
									rows="4"
									cols="70"
								></textarea>
							</div>
						</div>

						<button>Send</button>
					</form>
				</div>
			</div>
		</div>
	</section>
	<div class="get-started mx-auto" data-aos="fade-up" data-aos-duration="1300">
		<div
			class="row inner-get-started py-5 align-items-center text-white text-left"
		>
			<div class="col-lg-6 col-md-6 col-sm-12">
				<div>
					<h3>
						Sign up Now and keep track of your generator fueling activities.
					</h3>
					<p class="lh-lg my-3">
						Gensys is our solution to the challenge that makes managing your
						business fueling management difficuit.
					</p>
					<button
						class="outline-0 border-0 py-2 px-3 rounded-1 bg-white"
						style="font-size: 13px; color: #1a3365"
					>
						GET STARTED TODAY
					</button>
				</div>
			</div>

			<div class="col-lg-6 col-md-6 col-sm-12">
				<div class="image">
					<img
						src="@/assets/devices.png"
						alt="Gensys on all electronic devices, Laptop, Desktop, Mobile phones"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Feedback",
};
</script>

<style scoped>
section {
	width: 80%;
}

form button {
	background-color: #46266e;
	width: 76%;
	margin-left: 43px;
	color: white;
	padding: 15px 0;
	border: none;
	border-radius: 5px;
	margin-bottom: 20px;
	font-size: 15px;
}

input,
textarea {
	border: 1px solid #b2b2b2;
	width: 90%;
	outline: none;
	padding: 15px 0;
	padding-left: 25px;
	border-radius: 3px;
	margin-bottom: 30px;
}

label {
	font-size: 20px;

	color: #1e1e1e;
}
input::placeholder {
	color: #b3b3b3;
}

.inner-form {
	width: 85%;
	margin: auto auto;
	padding-top: 40px;
}
h2,
h4 {
	color: #1a3365;
}
h4 {
	font-size: 24px;
	text-decoration: underline;
	margin-bottom: 20px;
	font-weight: 600;
}
h2 {
	font-size: 48px;
	margin-top: -30px;
	margin-bottom: 30px;
	font-weight: 700;
}

.get-started {
	border-radius: 20px;
	width: 80%;
	background-image: url("@/assets/design-card.png");
	background-color: #cccccc;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	text-align: left;
}

.inner-get-started {
	width: 85%;
	margin: auto auto;
	text-align: left;
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
	text-align: left;
}

@media screen and (max-width: 800px) {
	section {
		width: 90%;
	}
	.first-header {
		text-align: center;
	}

	h2 {
		font-size: 24px;
	}
	p,
	label {
		font-size: 13px;
	}
	input,
	textarea {
		padding: 10px;
		width: 100%;
	}

	textarea::placeholder,
	input::placeholder {
		color: #b3b3b3;
		font-size: 13px;
	}

	.get-started {
		width: 100% !important;
		border-radius: 0px;
	}
	.inner-get-started {
		text-align: center;
    
    width:100%;
	}
	.inner-get-started h3 {
		font-size: 23px;
		margin-top: 40px;
		line-height: 30px;
    text-align: center;
	}
  p{
    font-size:13px;
  }
	img {
		width: 100% !important;
		height: 200px !important;
	}
	.image {
		width: 100% !important;
		display: flex;
		justify-content: center;
		margin-top: 50px;
	}
}
</style>
