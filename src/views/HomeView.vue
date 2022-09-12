<template>
	<div class="mt-4">
		<Banner />
		<Fifth />
		<SecondSection />
		<section class="half">
			<ThirdSection />
			<Fourth />
		</section>
		<Signup />

		<FAQ />
		<GetSupport />
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Home/Banner.vue";
import SecondSection from "@/components/Home/SecondSection.vue";
import ThirdSection from "@/components/Home/ThirdSection.vue";
import Fourth from "@/components/Home/Fourth.vue";
import Fifth from "@/components/Home/Fifth.vue";
import FAQ from "@/components/FAQ.vue";
import Signup from "@/components/Home/Signup.vue";
import GetSupport from "@/components/Home/GetSupport.vue";
export default {
	name: "HomeView",
	components: {
		// HelloWorld,
		Banner,
		SecondSection,
		ThirdSection,
		Fourth,
		Fifth,
		FAQ,
		Signup,
		GetSupport,
	},
};
</script>

<style scoped>
.half {
	padding: 20px;
	background: #f6f7f9;
}
</style>
