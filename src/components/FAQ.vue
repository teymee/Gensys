<template>
  <section class="faq mx-auto mt-5">
    <h1 style="color: #1a3365" class="text-center">
      Frequently asked questions
    </h1>
    <ul class="mt-4">
      <li class="mb-3" v-for="item in faq" :key="item.title">
        <div class="mx-auto py-lg-3 faq-inner">
          <div class="d-flex justify-content-between mt-3">
            <p class="title">{{ item.title }}</p>
            <div @click="toggle">
              <img src="@/assets/plus.svg" />
            </div>
          </div>

          <transition name="fade">
            <p v-if="open" class="mt-4">
              {{ item.body }}
            </p>
          </transition>
        </div>
      </li>
    </ul>

    <p class="text-center my-5 last-para">
      If you can find answer to the your question in FAQ, you can also
      <span style="font-weight: 700; color: #1a3365">Contact Us</span>
    </p>
  </section>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      open: false,
      faq: [
        {
          title: "What is Genesys ?",
          body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
        },
        {
          title: "How does Gensys work?",
          body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
        },
        {
          title: "What are the benefits of using Gensys?",
          body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
        },
        {
          title: "	How do I get started with Gensys?",
          body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
        },
        {
          title: "	How do I get started with Gensys?",
          body: "Gensys transparent and trust in the entire generator fueling process. With our solution ,you can remotely monitor and regulate generator fueling. Gensys also allows you keep track of the number of hours spent using power grid versus the time spent using generator.",
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
section {
  width: 80% !important;
}

li {
  border: 1px solid #1a3365;
  list-style: none;
  border-radius: 20px;
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

  li {
    border-radius: 10px;
  }

  .faq h1 {
    font-size: 20px;
  }

  .title {
    font-size: 13px;
  }

  img {
    width: 15px;
    margin-top: -10px;
  }

  p {
    font-size: 13px;
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