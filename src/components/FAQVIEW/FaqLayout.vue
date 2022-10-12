<template>
  <div class="text-center">
    <h1>Frequently asked questions</h1>
    <p>
      Get to know more about frequently asked questions arround Gensys as a
      whole.
    </p>
  </div>
  <section class="row">
    <div class="left col-lg-4">
      <MenuSidebar />
    </div>

    <div class="col-lg-8 right">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import MenuSidebar from "@/components/FAQVIEW/MenuSidebar.vue";
export default {
  name: "FaqLayout",
  components: { MenuSidebar },
};
</script>

<style scoped>
section {
  width: 100%;
}
.left {
  height: 500px;

  position: sticky;
  top: 10%;
}

.right {
  height: 100%;
}
</style>