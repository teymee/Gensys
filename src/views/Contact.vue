<template>
	<section>
		<First />
		<Feedback />
		<div class="faq">
			<FAQ />
		</div>
	</section>
</template>

<script>
import First from "../components/Contact/First.vue";
import Feedback from "../components/Contact/Feedback.vue";
import FAQ from "@/components/FAQ.vue";
export default {
	name: "Contact",
	components: { First, Feedback, FAQ },
};
</script>

<style scoped>
@media screen and (max-width: 800px) {
	.faq {
		width: 90%;
		margin: auto;
	}
}
</style>
