<template>
	<section data-aos="fade-up" data-aos-duration="1500">
		<!-- <img class="arrow" src="@/assets/arrow.png" alt="" /> -->
		<div class="faq mx-auto mt-5">
			<h1 class="text-center">Frequently asked questions</h1>
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
					title: "What is Gensys ?",
					body: "Gensys powered by Epump is the most reliable way to keep track of your company's fueling system. It is a revolutionary new product that will help you keep track of your fuel consumption and know precisely how much you're paying for it. Gensys allows you to monitor performance metrics for each fueling event. This information is compiled into a detailed report that can be sent out to all relevant parties at regular intervals.",
				},
				{
					title: "How does Gensys work?",
					body: "It starts with the installation of a probe into your generator tank, which measures your tank's fuel level in real time. Our console which would be installed in your office would receive signals from the probe, so it can be seen live by you, your management team at the utility company, and your fuel supplier—basically anyone who needs access can see where things stand at any given moment. It's all about building trust by being transparent.",
				},
				{
					title: "What are the benefits of using Gensys?",
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
	width: 88%;
	margin: auto;
}
.arrow {
	position: absolute;
	top: 50%;
	left: 30px;
	transform: translate(-50%, -50%);
}
.faq {
	width: 100%;
}
h1 {
	font-size: 30px;
	margin-bottom: 50px;
	font-weight: 700;
	font-size: 38px;
	color:black;
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
	.faq {
		width: 98% !important;
	}

	li {
		border-radius: 10px;
	}

	.faq h1 {
		font-size: 20px;
	}

	.title {
		font-size: 13px;
	}

	.arrow {
		width: 60px;
		left: 0;
		display: none;
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
