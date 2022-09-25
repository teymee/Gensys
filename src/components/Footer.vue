<template>
	<section class="footer">
		<section class="wrapper mx-auto">
			<div class="row mb-4">
				<div class="col-md-3 col-lg-3 col-sm-6 col-6">
					<li><img src="@/assets/logo.png" alt="" /></li>
					<ul class="list-none first pt-2">
						<li>epump@fuelmetrics.com.ng</li>
						<li class="pb-2 tel">+23480356437583</li>
						<li class="first d-flex justify-content-between">
							<img src="@/assets/twitter.svg" />
							<img src="@/assets/facebook.svg" />
							<img src="@/assets/Union.svg" />
							<img src="@/assets/instagram.svg" />
						</li>
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
				<p class="">
					2022
					<svg
						width="13"
						height="13"
						viewBox="0 0 13 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.5 0C10.0899 0 13 2.91005 13 6.5C13 10.0899 10.0899 13 6.5 13C2.91005 13 0 10.0899 0 6.5C0 2.91005 2.91005 0 6.5 0ZM6.5 0.90675C5.01658 0.90675 3.59391 1.49604 2.54497 2.54497C1.49604 3.59391 0.90675 5.01658 0.90675 6.5C0.90675 7.98342 1.49604 9.40609 2.54497 10.455C3.59391 11.504 5.01658 12.0932 6.5 12.0932C7.98342 12.0932 9.40609 11.504 10.455 10.455C11.504 9.40609 12.0932 7.98342 12.0932 6.5C12.0932 5.01658 11.504 3.59391 10.455 2.54497C9.40609 1.49604 7.98342 0.90675 6.5 0.90675ZM6.604 3.02315C7.306 3.02315 7.98005 3.2201 8.55595 3.58475C8.65193 3.65146 8.71845 3.75264 8.74166 3.86719C8.76488 3.98175 8.74298 4.10084 8.68054 4.19965C8.61811 4.29846 8.51995 4.36936 8.40652 4.39758C8.29309 4.42579 8.17315 4.40914 8.0717 4.3511C7.63244 4.07467 7.12365 3.92881 6.60465 3.93055C5.12395 3.93055 3.93055 5.0843 3.93055 6.5C3.93055 7.9157 5.12395 9.06945 6.60465 9.06945C7.1253 9.06945 7.6232 8.92645 8.05025 8.6619C8.10091 8.63053 8.15725 8.60945 8.21606 8.59985C8.27487 8.59026 8.33499 8.59234 8.393 8.60598C8.451 8.61962 8.50575 8.64455 8.55412 8.67935C8.60249 8.71415 8.64353 8.75814 8.6749 8.8088C8.70627 8.85946 8.72735 8.9158 8.73695 8.97461C8.74654 9.03342 8.74446 9.09354 8.73082 9.15155C8.71718 9.20955 8.69225 9.2643 8.65745 9.31267C8.62265 9.36104 8.57866 9.40208 8.528 9.43345C7.94984 9.79035 7.28344 9.97857 6.604 9.97685C4.62995 9.97685 3.02315 8.42335 3.02315 6.5C3.02315 4.576 4.62995 3.02315 6.60465 3.02315H6.604Z"
							fill="#545454"
						/>
					</svg>
					Gensys
				</p>
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
	width: 85%;
	margin: auto;
	padding-top: 20px;
}
.footer {
	width: 100%;
	background-color: #fbfcfe;
}
.last-footer {
	width: 85%;
	border-top: 1px solid rgba(0, 0, 0, 0.5);
}

.last-footer p {
	padding: 0px 30px;
}
ul {
	list-style: none;
}

li {
	padding-top: 25px;
}
.first {
	margin-left: -20px;
	width: 90%;
	line-height: 10px;
}
.first img {
	width: 20px;
	margin-left: 20px;
}
img {
	margin: -15px 0;
	width: 80px;
}

@media screen and (max-width: 800px) {
	.wrapper {
		width: 95%;
	}
	li {
		font-size: 12px;
		padding-top: 15px;
	}
	.first{
		width:100% !important;
	}
	.last-footer {
		width: 80%;
		font-size: 12px;
	}
	img {
		width: 80px;
	}
	.tel{
		font-size: 13px !important;
		width:100% !important;
	}
}
</style>
