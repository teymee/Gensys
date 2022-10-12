<template>
  <Navbar />
  <section data-aos="fade-up" data-aos-duration="1500">
    <div class="faq mx-auto mt-5">
     

      <FaqLayout>
        <FaqDetails />
       
      </FaqLayout>
    </div>
    <Signup />
 
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Accordion from "@/components/Accordion.vue";
import Footer from "@/components/Footer.vue";
import Signup from "@/components/Home/Signup.vue";
import FaqLayout from "@/components/FAQVIEW/FaqLayout.vue";
import FaqDetails from "@/components/FAQVIEW/FaqDetails.vue";
export default {
  name: "FAQ",

  computed: {
    curRoute() {
      return this.$route.hash;
    },
  },
  components: { Navbar, Accordion, Footer, Signup, FaqLayout, FaqDetails },
};
</script>

<style scoped>
section {
  padding-top: 100px;
  background: #fafafa;
  position: relative;
}

@media screen and (max-width: 800px) {
  section {
    width: 98% !important;
    margin: auto;
  }
  .title {
    font-size: 13px;
  }

  .title p {
    font-size: 13px;
    margin-top: 10px;
  }
  .title img {
    margin-right: 15px;
  }

  .details li {
    padding-top: 5px;
    font-size: 13px;
  }

  .faq {
    width: 98% !important;
  }

  li {
    border-radius: 10px;
    font-size: 13px !important;
  }

  .faq h1 {
    font-size: 20px;
  }

  .last-para {
    width: 85%;
    margin: auto;
  }
  li {
    margin-left: -30px;
  }
  .dropdown-text {
    padding-bottom: 20px;
    font-size: 13px;
  }
  .list {
    margin-left: 30px;
    padding-bottom: 20px;
  }
  .list li {
    font-size: 13px;
  }
}
</style>
