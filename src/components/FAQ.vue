<template>
	<section data-aos="fade-up" data-aos-duration="1500">
		<img class="arrow" src="@/assets/arrow.png" alt="" />
		<div class="faq mx-auto mt-5">
			<h1 style="color: #1a3365" class="text-center">
				Frequently asked questions
			</h1>
			<ul class="mt-4">
				<li class="mb-3" v-for="item in faq" :key="item.title">
					<div class="mx-auto py-lg-3 faq-inner">
						<!-- <div class="d-flex justify-content-between mt-3">
              <p class="title">{{ item.title }}</p>
              <div @click="toggle">
                <img src="@/assets/plus.svg" />
              </div>
            </div> -->
						<Accordion :title="item.title">
							<transition name="fade">
								<p class="mt-4">
									{{ item.body }}
								</p>
							</transition>
						</Accordion>
					</div>
				</li>
			</ul>

			<p class="text-center my-5 last-para">
				If you can find answer to the your question in FAQ, you can also
				<span style="font-weight: 700; color: #1a3365">Contact Us</span>
			</p>
		</div>
	</section>
</template>

<script>
import Accordion from "./Accordion.vue";
export default {
	name: "FAQ",
	data() {
		return {
			open: false,
			faq: [
				{
					title: "What is Genesys ?",
					body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
				},
				{
					title: "How does Gensys work?",
					body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
				},
				{
					title: "What are the benefits of using Gensys?",
					body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
				},
				{
					title: "\tHow do I get started with Gensys?",
					body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
				},
				{
					title: "\tHow do I get started with Gensys?",
					body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
				},
			],
		};
	},

	components: { Accordion },
};
</script>

<style scoped>
section {
	color: #46266e !important;
	position: relative;
}
.arrow {
	position: absolute;
	top: 50%;
	left: 30px;
	transform: translate(-50%, -50%);
}
.faq {
	width: 80%;
}
h1 {
	font-size: 30px;
	margin-bottom: 50px;
}
li {
	border: 1px solid #46266e;
	list-style: none;
	border-radius: 20px;
	font-size: 14px !important;
}

span p {
	/* font-size: 20px; */
	color: #1a3365;
}
.faq-inner {
	width: 90%;
}
@media screen and (max-width: 800px) {
	section {
		width: 100% !important;
	}
  .faq{
    width: 98% !important;
  }

	li {
		border-radius: 10px;
	}

	.faq h1 {
		font-size: 20px;
	}

	.title {
		font-size: 10px;
	}

	.arrow {
		width: 60px;
		left: 0;
    display:none;
	}
	p {
		font-size: 10px;
	}
	.last-para {
		width: 85%;
		margin: auto;
	}
	li {
		margin-left: -30px;
	}
}
</style>
