<template>
  <section class="">
    <div class="banner-text" data-aos="fade-right" data-aos-duration="1500">
      <h3 class="">
        Monitor the Fuel consumption of your
        <span class="typing"
          ><VueWriter :array="arr" :typeSpeed="100" :caret="underscore"
        /></span>
      </h3>

      <p>
        Stay ahead of your business fuel management, monitor power usage and
        avoid discrepancies in fuel purchase with Gensys powered by Epump
      </p>

      <div class="button">
        <router-link to="/">
          <img src="@/assets/banner-playstore.png" />
        </router-link>

        <router-link :to="{ name: 'contact' }">
          <button
            class="px-3 border-0 outline-0 rounded py-3 contact-button"
            style="background-color: transparent"
          >
            Contact Epump
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ms-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L6.03033 4.46967C6.32322 4.76256 6.32322 5.23744 6.03033 5.53033L2.03033 9.53033C1.73744 9.82322 1.26256 9.82322 0.96967 9.53033C0.676777 9.23744 0.676777 8.76256 0.96967 8.46967L4.43934 5L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z"
                fill="white"
              />
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import VueWriter from "vue-writer";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
  components: { VueWriter },
  data() {
    return {
      observer: null,
      isIntersecting: null,
      arr: ["Business's", "Home", "Hosipital", "Schools", "Banks"],
    };
  },

  mounted() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      // threshold: 1,
      rootMargin: "-200px 0px 0px 0px",
    });

    this.observer.observe(this.$el);
  },

  beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          this.isIntersecting = true;
        } else {
          this.isIntersecting = false;
        }
        this.$emit("BannerIntersecting", this.isIntersecting);
      });
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  margin: auto auto;
  background-image: url("@/assets/banner-bg.png");
  height: 100vh !important;
  z-index: 9999 !important;
}

.typing {
  background-color: #46266e;
  display: inline-block;
  color: white;
  padding: 0 10px;
  font-style: italic;
}
.banner-text {
  color: white;
  text-align: center;
  width: 73%;
  margin: auto;
  padding-top: 200px !important;
}

h3 {
  font-size: 86px;
  font-weight: 600;
}

p {
  font-size: 20px;
  width: 65%;
  margin: auto;
  margin-bottom: 40px !important;
  margin-top: 20px !important;
  font-weight: 200 !important;
}

.banner2,
.banner3 {
  width: 100%;
}

.button {
  display: flex;
  align-items: center;
  width: 40%;
  margin: auto;

  padding-left: 20px;
}

.button img {
  width: 90%;
}

.contact-button {
  border: 1px solid white !important;
  color: white;
}

@media screen and (max-width: 800px) {
  section {
    width: 100%;
    height: 80vh !important;
  }

  .button img {
  width: 50%;
}
  .banner-text {
    margin-left: 0px;
    text-align: center;
    margin: auto;
    width: 90%;
    padding-top: 250px !important;
  }
  .typing {
    background: transparent !important;
  }
  .is-typed {
    margin: auto;
    margin-top:10px;
    padding: 5px 10px;
    background-color: #46266e;
  }
  h3 {
    font-size: 30px;
    width: 100%;
    margin-top: -75px;
    font-weight: 700;
    line-height: 30px;
  }

  .banner-img {
    display: flex !important;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .banner1 {
    width: 90%;
    height: 155px;
    margin: auto;
  }

  .banner-images {
    display: none;
  }

  p {
    font-size: 13px;
    width: 90%;
    margin: auto;
    margin-top: -30px;
  }

  button {
    flex-flow: column;

    font-size: 13px;
  }
  .button {
    margin: auto;
    margin-top: 25px;
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 0px;
  }
  .header-button {
    width: 90%;
    margin: auto;
  }
}
</style>
