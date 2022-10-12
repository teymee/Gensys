<template>
 <header>Header</header>
  <main>
    <section class="article">
      <div class="hero">
        <h1>Sticky Sidebar</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas iure repudiandae fugiat iusto? Distinctio nostrum ex reprehenderit doloremque suscipit quos.</p>
        <button>Action</button>
      </div>
      <div class="grid">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
        <div class="box">Box 5</div>
        <div class="box">Box 6</div>
      </div>
    </section>
    <aside class="sticky">Sidebar</aside>
  </main>
  <footer>Footer</footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
      name: 'Test',
    components: { Navbar }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 200vh;
}
header, footer {
  background: #eee;
  padding: 5rem;
  text-align: center;
}

main {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 80%;
  margin: 2rem auto;
}

/* Styling hero */
.hero {
  max-width: 50rem;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: .5rem;
}

.hero p {
  color: #555;
  opacity: .8;
  line-height: 1.5rem;
}

.hero button {
  background: #111;
  color: #fff;
  padding: .7rem 1.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
}

/* Styling grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
}

.grid div {
  background: #eee;
  height: 10rem;
  /* center the text */
  display: flex;
  align-items: center;
  justify-content: center;
}

.article {
  /* background: #eee; */
  flex-grow: 999;
  flex-basis: 0;
}

.sticky {
  background: #eee;
  height: 10rem;
  width: 10rem;
  flex-grow: 1;
  flex-basis: 300px;
  position: sticky;
  top: 2rem;
  /* center the text */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>