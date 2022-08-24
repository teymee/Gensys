<template>
  <div class="mt-5">
    <Banner />
    <SecondSection />
    <section class="half">
      <ThirdSection />
      <Fourth />
      <Fifth />
      <FAQ />
    </section>
  </div>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
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
  },
};
</script>

<style scoped>
.half {
  padding: 20px;
  background: #f6f7f9;
}
</style>
