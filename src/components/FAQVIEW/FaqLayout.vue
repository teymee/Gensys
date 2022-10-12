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
    <div class="mobile">
      <MobileMeun/>
    </div>

    <div class="col-lg-8 right">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import MenuSidebar from "@/components/FAQVIEW/MenuSidebar.vue";
import MobileMeun from "./MobileMeun.vue";
export default {
  name: "FaqLayout",
  components: { MenuSidebar, MobileMeun },
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

.mobile{
      display:none
}

@media screen and (max-width: 800px) {
.left{
      display:none;
}

.mobile{
      display:block;
  position: sticky;
  top:7.7%;
  width:100%;
  background:#FAFAFA;
  margin-left:10px;
  padding: 20px 0;

}
}
</style>