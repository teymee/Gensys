<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <section class="body">
    <router-view />
    <Footer />
  </section>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    changeOpen() {
      this.isOpen = !this.isOpen;
    },
  },
  components: { Footer, Navbar },
};
</script>

<style>
::-moz-selection {
  /* Code for Firefox */
  color: white;
  background: #3e235f;
}

::selection {
  color: white;
  background: #3e235f;
}

* {
  font-family: "Quiet Sans" !important;
  box-sizing: border-box;
}

li {
  list-style: none !important;
}
.body {
  background: #fafafa;
}
a {
  text-decoration: none !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p {
  font-style: normal;
}
h1,
h2 {
  font-style: normal;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

button {
  font-style: normal;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #46266e;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #684594;
}
</style>
