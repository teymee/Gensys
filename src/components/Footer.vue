<template>
	<section class="footer">
		<section class="wrapper mx-auto">
			<div class="row mb-4">
				<li><img src="@/assets/logo.png" alt="" /></li>
				<div class="col-md-3 col-lg-3 col-sm-6 col-6 ">
					<ul class="list-none first">
						<li>info@genesys.com</li>
						<li>+234 8035 643 7583</li>
						<li class="first">twitter, facebook etc</li>
					</ul>
				</div>

				<div class="col-md-3 col-lg-3 col-sm-6 col-6">
					<ul class="list-none">
						<li class="fs-5" style="color: #46266e; font-weight: 700">
							Company
						</li>
						<li>About Us</li>
						<li>Contact Us</li>
					</ul>
				</div>

				<div class="col-md-3 col-lg-3 col-sm-6 col-6">
					<ul class="list-none">
						<li class="fs-5" style="color: #46266e; font-weight: 700">
							Sitemap
						</li>
						<li>Why Gensys?</li>
						<li>How it works</li>
					</ul>
				</div>

				<div class="col-md-3 col-lg-3 col-sm-6 col-6">
					<ul class="list-none">
						<li class="fs-5" style="color: #46266e; font-weight: 700">Legal</li>
						<li>Terms</li>
						<li>Security</li>
					</ul>
				</div>
			</div>
		</section>
		<div class="mb-4">
			<div class="last-footer d-flex justify-content-between mx-auto pt-4">
				<p class="">2022 at Genesys</p>
				<p class="">Term of use</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style scoped>
.wrapper {
	width: 80%;
	margin: auto;
	padding-top: 20px;
}
.footer {
	background-color: #fbfcfe;
}
.last-footer {
	width: 80%;
}
ul {
	list-style: none;
}

li {
	padding-top: 25px;
}

img {
	margin-bottom: -15px;
}

@media screen and (max-width: 800px) {
	.wrapper {
		width: 95%;
	}
	li {
		font-size: 10px;
		padding-top: 15px;
	}
	.last-footer {
		width: 80%;
		font-size: 10px;
	}
	img {
		width: 120px;
		padding-left: 30px;
		margin-bottom: -5px;
	}

	/* .first{
		padding-bottom:-500px !important;
		margin-bottom:-500px !important;
		background: red;
	} */
}
</style>
