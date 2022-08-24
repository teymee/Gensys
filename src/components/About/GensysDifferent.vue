<template>
  <section class="my-5">
    <div class="text-center">
      <h2>What Make Gensys Different</h2>
      <p>
        We are dedicated to providing the best possible fueling management
        system <br />
        for industrial generators at corporations across the globe.
      </p>
    </div>

    <div class="row my-5">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="bg-white shadow-sm p-4 about-card">
          <img src="@/assets/clock.png" alt="" class="mb-4" />

          <h4 class="mb-4">Expert Experience</h4>

          <p class="mb-4">
            Novelty is our core value.Priority is given to new ideas
          </p>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="bg-white shadow-sm p-4 about-card">
          <img src="@/assets/clock.png" alt="" class="mb-4" />

          <h4 class="mb-4">Competitive prices</h4>

          <p class="mb-5">We sell our products at a strategic price points</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="bg-white shadow-sm p-4 about-card">
          <img src="@/assets/clock.png" alt="" class="mb-4" />

          <h4 class="mb-4">Customer Dedication</h4>

          <p class="mb-5">We are committed to satisfying our customers.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GensysDifferent",
};
</script>

<style scoped>
section {
  width: 80%;
  margin: auto;
}

h2 {
  color: #1a3365;
  font-size: 43px;
  font-weight: 700;
  margin-top:90px;
}
.about-card {
  border-radius: 20px;
}
@media screen and (max-width: 800px) {
  section {
    width: 85%;
  }
  h2 {
    font-size: 25px;
  }
  .col-sm-12{
    margin-top: 20px;
  }
}
</style>