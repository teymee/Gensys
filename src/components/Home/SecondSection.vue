<template>
  <section class="my-5">
    <div
      class="
        container
        d-lg-flex
        py-5
        justify-content-around
        align-items-center
        wrapper
      "
    >
      <div class="text-white text-sm-center text-lg-start mb-sm-5">
        <h1>Gensys</h1>
        <h5 class="fw-bold">Fuel Management System</h5>
        <p class="mt-3">
          Gain control of your business’s fuel and generator activities,<span>
            Reduce costs and strengthen your operations</span
          >
        </p>
        <p class="mb-3 tagline">Reduce costs and strengthen your operations</p>
        <h6 class="fw-bold">Download the Gensys App</h6>
        <router-link to="'/'">
          <img
            src="@/assets/Playstore.png"
            alt="Get the mobile app"
            class="app-download"
          />
        </router-link>
      </div>

      <div class="lap">
        <img
          alt="Laptop showing Gensys Dashboard or Portal"
          src="@/assets/laptop.png"
          class="laptop"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecondSection",
};
</script>

<style scoped>
section {
  background: #46266e url("@/assets/dots.png") no-repeat right;
  width: 75%;
  margin: auto auto;
  border-radius: 20px;
}

.wrapper {
  width: 85%;
  margin: auto auto;
}

h1 {
  color: #ffbb00;
  font-weight: 700;
  font-size: 65px;
}

.laptop {
  height: 250px;
}
p {
  font-size: 15px;
}

h5 {
  font-size: 19px;
}

h6 {
  font-size: 17px;
}

@media screen and (max-width: 800px) {
  section {
    width: 95%;
    text-align: center;
    background-image: none;
    background: url("@/assets/frame-card.png") no-repeat contain;
  }

  .app-download {
    height: 50px;
    margin-bottom: 30px;
  }
  button {
    margin-top: -200px;
  }

  P {
    font-size: 13px;
  }
  .tagline {
    display: none;
  }

  h1 {
    font-size: 40px;
  }
  .lap img {
    width: 90%;
    height: 97%;
  }
  .lap {
    width: 100% !important;

    display: flex;
    justify-content: center;
  }
}
</style>