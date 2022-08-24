<template>
  <section>
    <First />
    <GensysDifferent />
    <OurProducts />
  </section>
</template>

<script>
import First from "@/components/About/First.vue";
import GensysDifferent from "@/components/About/GensysDifferent.vue";
import OurProducts from "@/components/About/OurProducts.vue";
export default {
  components: { First, GensysDifferent, OurProducts },
};
</script>

<style>
</style>
