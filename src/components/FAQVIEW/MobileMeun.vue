<template>
  <section>
    <ul class="">
      <div class="container d-flex">
        <li
          v-for="list in menu"
          :class="curRoute.includes(list.link) ? 'active-list' : 'unactive-link'"
        >
          <router-link :to="{ path: '/faq', hash: list.link }">
            {{ list.name }}
          </router-link>
        </li>
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  name: "MobileMenu",
  data() {
    return {
      menu: [
        {
          name: "GENERAL ENQUIRES",
          link: "#genEnq",
        },
        {
          name: "DEVICES",
          link: "#device",
        },
        {
          name: "INSTALLATION AND OPERATION",
          link: "#install",
        },
        {
          name: "SUBCRIPTION",
          link: "#sub",
        },
      ],
    };
  },
  computed: {
    curRoute() {
      return this.$route.hash;
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
  height: 50px;
  position: sticky !important;
  top: 2rem;
 
}
ul {
  width: 400% !important;
}
section::-webkit-scrollbar {
  display: none;
}

li {
  border: 1px solid #46266e;
  padding: 10px 20px;
  margin-right: 20px;
  border-radius: 5px;
}
.active-list {
  background: #46266e !important;
  color: white;
  cursor: pointer;
}
.unactive-link {

 background: white;
}

.unactive-link a{
      color: #46266e !important;
}
a{
      color: white !important;
}
.active-link a{
      color: white !important;
}

</style>