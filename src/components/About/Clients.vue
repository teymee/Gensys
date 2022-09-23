<template>
	<section>
		<div>
			<h1 class="text-capitalize text-center">Our trusted clients</h1>
		</div>

		<div class="row cards">
			<div class="cardd col-lg-4 col-md-12 col-sm-12">
				<div class="wrapper">
					<img src="@/assets/client1.png" />
				</div>
			</div>

			<div class="cardd col-lg-4 col-md-12 col-sm-12">
				<div class="wrapper">
					<img src="@/assets/client2.png" />
				</div>
			</div>

			<div class="cardd col-lg-4 col-md-12 col-sm-12">
				<div class="wrapper">
					<img src="@/assets/client3.png" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Clients",
};
</script>

<style scoped>
section {
	width: 85%;
	margin: auto auto;
	margin-top: 70px;
}
h1 {
	font-weight: 700;
	font-size: 38px;
	margin-bottom: 50px;
}
img {
	width: 100%;
	height: 100%;
	border-radius: 15px;
}
</style>
