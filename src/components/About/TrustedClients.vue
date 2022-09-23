<template>
	<section>
		<div>
			<div>
				<h1 class="text-capitalize text-center">Our trusted clients</h1>
			</div>
		</div>

		<div class="d-flex justify-content-between">
			<div class="">
				<div class="wrapper">
					<img src="@/assets/epump1.png" />
				</div>
			</div>

			<div class="">
				<div class="wrapper">
					<img src="@/assets/driveme.png" />
				</div>
			</div>

			<div class="">
				<div class="wrapper">
					<img src="@/assets/jumia.png" />
				</div>
			</div>

			<div class="">
				<div class="wrapper">
					<img src="@/assets/appzone.png" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "TrustedClients",
};
</script>

<style scoped>
section {
	width: 60%;
	margin: auto;
	margin-top: 100px;
	margin-bottom: 100px;
}

h1 {
	font-weight: 700;
	font-size: 38px;
	margin-bottom: 50px;
}
</style>
