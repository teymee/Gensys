<template>
	<section data-aos="fade-up" data-aos-duration="1500">
		<div class="wrapper">
			<div class="text">
				<h2>
					Sign up Now and keep track of your generator fueling activities.
				</h2>
				<p>
					Gensys is our solution to the challenge that makes managing your
					business fueling management difficuit.
				</p>
			</div>

			<div>
				<button>
					Download Gensys App
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.2456 5.56711C10.5726 5.18607 3.10541 1.05888 1.23169 0.0563914C1.04892 -0.0410895 0.849731 -0.00400772 0.704651 0.105071C0.584015 0.195746 0.500122 0.335375 0.5 0.49646V11.4998C0.5 11.6632 0.583954 11.8018 0.705566 11.8931C0.789124 11.9559 0.887726 12 1 12C1.0791 12 1.15698 11.9797 1.23145 11.9399C3.10492 10.9377 10.5722 6.81065 11.2456 6.42943C11.4026 6.34055 11.5 6.17544 11.5 5.99815C11.5 5.82086 11.4026 5.65574 11.2456 5.56711Z"
							fill="url(#paint0_linear_1843_21707)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1843_21707"
								x1="-1.55624"
								y1="4.80433"
								x2="9.66661"
								y2="10.0376"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="white" stop-opacity="0.2" />
								<stop offset="1" stop-color="white" stop-opacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</button>
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
	margin: auto auto;
}

.wrapper {
	display: flex;
	padding: 50px 0;
	margin: auto auto;
	align-items: center;
	justify-content: space-around;
	width: 85%;
	background-image: url("@/assets/design-card.png");
	background-color: #cccccc;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-bottom: 20px;
	border-radius: 20px;
	margin-top: 30px;
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
	padding: 17px 15px;
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
		font-size: 10px;
		margin-top: -30px;
		margin-bottom: 40px;
	}
}
</style>
