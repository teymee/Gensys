<template>
  <Navbar />
  <section>
    <AboutBanner />
    <GrowingPlatform />

    <OurValues />
    <!-- <Clients /> -->
    <TrustedClients />
    <Signup />
    <!-- <First />
		<GensysDifferent />
		<OurProducts /> -->
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import First from "@/components/About/First.vue";
import GensysDifferent from "@/components/About/GensysDifferent.vue";
import OurProducts from "@/components/About/OurProducts.vue";
import AboutBanner from "@/components/About/AboutBanner.vue";
import GrowingPlatform from "@/components/About/GrowingPlatform.vue";
import OurValues from "@/components/About/OurValues.vue";
import Clients from "@/components/About/Clients.vue";
import Signup from "@/components/Home/Signup.vue";
import TrustedClients from "@/components/About/TrustedClients.vue";
export default {
  components: {
    Navbar,
    First,
    GensysDifferent,
    OurProducts,
    AboutBanner,
    GrowingPlatform,
    OurValues,
    Clients,
    Signup,
    TrustedClients,
  },
};
</script>

<style></style>
