<template>
  <section class="text-center">
    <h1 class="">
      Track your fuel management. <br />
      Be in control
    </h1>
    <p class="mt-4">
      Gensys powered by Epump is the most efficient and effective way to monitor
      generator activities and make sure your business is running smoothly.
    </p>

    <div class="button">
      <router-link to="/">
        <button
          class="px-3 border-0 outline-0 rounded py-3"
          style="color: white; background-color: #46266e; margin-right: 10px"
        >
          Get started today
        </button>
      </router-link>
      <button
        class="px-3 border-0 outline-0 rounded py-3"
        style="background-color: transparent; color: #46266e"
      >
        Contact sales
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
            fill="#46266e"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
h1 {
  font-size: 54px;
  font-weight: 700;
  margin-top: -30px;
}

.button {
  margin-top: 70px;
  margin-bottom: 90px;
}
p {
  font-size: 19px;
  color: #1e1e1e;
  width: 50%;
  margin: auto;
}

/* button{
 margin-bottom:90px;
} */

@media screen and (max-width: 800px) {
  h1 {
    font-size: 25px;
    margin-top: -40px;
  }

  p {
    font-size: 13px;
    width: 90%;
    margin: auto;
  }

  button {
    flex-flow: column;

    font-size: 14px;
  }
  .button {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .header-button {
    width: 90%;
    margin: auto;
  }
}
</style>