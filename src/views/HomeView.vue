<template>
  <Navbar :isIntersecting="isIntersecting" />
  <div class="cover">
    <Banner @BannerIntersecting="Intersect($event)" />
    <section class="half mt-4" id="benefits">
      <ThirdSection />
      <Fourth />
    </section>
    <BlackBanner />
  
    <FAQ />
    <Fifth />
    <SecondSection />
    <!-- <Signup /> -->

    <!-- <GetSupport /> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Home/Banner.vue";
import SecondSection from "@/components/Home/SecondSection.vue";
import ThirdSection from "@/components/Home/ThirdSection.vue";
import Fourth from "@/components/Home/Fourth.vue";
import Fifth from "@/components/Home/Fifth.vue";
import FAQ from "@/components/FAQ.vue";
import Signup from "@/components/Home/Signup.vue";
import GetSupport from "@/components/Home/GetSupport.vue";
import BlackBanner from "@/components/Home/BlackBanner.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
    Banner,
    SecondSection,
    ThirdSection,
    Fourth,
    Fifth,
    FAQ,
    Signup,
    GetSupport,
    BlackBanner,
  },

  data() {
    return {
      isIntersecting: false,
    };
  },

  methods: {
    Intersect(message) {
      this.isIntersecting = message;
    },
  },

  //   methods:{
  // 	HomeViewIntersect($event){
  //       this.isIntersecting = $event;
  // 	console.log(isIntersect)
  //     };
  //   },
};
</script>

<style scoped>
.cover{
  /* overflow-x: hidden; */
}
.half {
  padding: 20px;
  background: #f7fafe;
  
}
</style>
