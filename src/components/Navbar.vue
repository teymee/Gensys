<template>
  <nav class="" :class="[{ 'all-white': !isIntersecting }]">
    <transition name="fade">
      <div class="overlay" v-if="toggle">
        <div class="closebtn" @click="toggleNav">&times;</div>
        <ul class="overlay-content text-white">
          <router-link :to="{ path: '/', hash: '#benefits' }">
            <li @click="toggleNav">
              <span class="text-white"> Benefits </span>
            </li>
          </router-link>

          <router-link to="/about">
            <li class="" @click="toggleNav">
              <span class="text-white"> About Us </span>
            </li>
          </router-link>
          <router-link :to="{ path: '/faq', hash: '#genEnq' }">
            <li class="" @click="toggleNav">
              <span class="text-white">FAQ </span>
            </li>
          </router-link>
          <router-link to="/contact">
            <li class="" @click="toggleNav">
              <button class="dashboard" type="submit">Contact Us</button>
            </li>
          </router-link>
        </ul>
      </div>
    </transition>

    <div class="d-flex justify-content-between align-items-center nav">
      <div>
        <router-link to="/">
          <img src="@/assets/logo.png" v-if="!isIntersecting" />
          <img src="@/assets/white-logo.svg" v-if="isIntersecting" />
        </router-link>
      </div>

      <ul class="d-flex justify-content-between align-middle nav-list">
        <router-link :to="{ name: 'home', hash: '#benefits' }"
          ><li class="">Benefits</li></router-link
        >
        <router-link to="/about">
          <li class="">About Us</li>
        </router-link>
        <router-link :to="{ path: '/faq', hash: '#genEnq' }">
          <li class="">FAQ</li>
        </router-link>
        <router-link to="/contact">
          <li><button class="dashboard" type="submit">Contact Us</button></li>
        </router-link>
      </ul>

      <div class="breadcrumb" @click="toggleNav">
        <svg
          width="28"
          height="28"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="!isIntersecting"
        >
          <g clip-path="url(#clip0_2932_4588)">
            <path
              d="M16 14.5H2C1.86739 14.5 1.74021 14.4473 1.64645 14.3536C1.55268 14.2598 1.5 14.1326 1.5 14C1.5 13.8674 1.55268 13.7402 1.64645 13.6464C1.74021 13.5527 1.86739 13.5 2 13.5H16C16.1326 13.5 16.2598 13.5527 16.3536 13.6464C16.4473 13.7402 16.5 13.8674 16.5 14C16.5 14.1326 16.4473 14.2598 16.3536 14.3536C16.2598 14.4473 16.1326 14.5 16 14.5Z"
              fill="#1E1E1E"
            />
            <path
              d="M16 9.5H2C1.86739 9.5 1.74021 9.44732 1.64645 9.35355C1.55268 9.25979 1.5 9.13261 1.5 9C1.5 8.86739 1.55268 8.74021 1.64645 8.64645C1.74021 8.55268 1.86739 8.5 2 8.5H16C16.1326 8.5 16.2598 8.55268 16.3536 8.64645C16.4473 8.74021 16.5 8.86739 16.5 9C16.5 9.13261 16.4473 9.25979 16.3536 9.35355C16.2598 9.44732 16.1326 9.5 16 9.5Z"
              fill="#1E1E1E"
            />
            <path
              d="M16 4.5H2C1.86739 4.5 1.74021 4.44732 1.64645 4.35355C1.55268 4.25979 1.5 4.13261 1.5 4C1.5 3.86739 1.55268 3.74021 1.64645 3.64645C1.74021 3.55268 1.86739 3.5 2 3.5H16C16.1326 3.5 16.2598 3.55268 16.3536 3.64645C16.4473 3.74021 16.5 3.86739 16.5 4C16.5 4.13261 16.4473 4.25979 16.3536 4.35355C16.2598 4.44732 16.1326 4.5 16 4.5Z"
              fill="#1E1E1E"
            />
          </g>
          <defs>
            <clipPath id="clip0_2932_4588">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <svg
          width="28"
          height="28"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="isIntersecting"
        >
          <g clip-path="url(#clip0_2932_4593)">
            <path
              d="M16 14.5H2C1.86739 14.5 1.74021 14.4473 1.64645 14.3536C1.55268 14.2598 1.5 14.1326 1.5 14C1.5 13.8674 1.55268 13.7402 1.64645 13.6464C1.74021 13.5527 1.86739 13.5 2 13.5H16C16.1326 13.5 16.2598 13.5527 16.3536 13.6464C16.4473 13.7402 16.5 13.8674 16.5 14C16.5 14.1326 16.4473 14.2598 16.3536 14.3536C16.2598 14.4473 16.1326 14.5 16 14.5Z"
              fill="white"
            />
            <path
              d="M16 9.5H2C1.86739 9.5 1.74021 9.44732 1.64645 9.35355C1.55268 9.25979 1.5 9.13261 1.5 9C1.5 8.86739 1.55268 8.74021 1.64645 8.64645C1.74021 8.55268 1.86739 8.5 2 8.5H16C16.1326 8.5 16.2598 8.55268 16.3536 8.64645C16.4473 8.74021 16.5 8.86739 16.5 9C16.5 9.13261 16.4473 9.25979 16.3536 9.35355C16.2598 9.44732 16.1326 9.5 16 9.5Z"
              fill="white"
            />
            <path
              d="M16 4.5H2C1.86739 4.5 1.74021 4.44732 1.64645 4.35355C1.55268 4.25979 1.5 4.13261 1.5 4C1.5 3.86739 1.55268 3.74021 1.64645 3.64645C1.74021 3.55268 1.86739 3.5 2 3.5H16C16.1326 3.5 16.2598 3.55268 16.3536 3.64645C16.4473 3.74021 16.5 3.86739 16.5 4C16.5 4.13261 16.4473 4.25979 16.3536 4.35355C16.2598 4.44732 16.1326 4.5 16 4.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2932_4593">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["isIntersecting"],
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleNav() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>
.all-white {
  background: white;
  transition: ease 1s;
}

.all-white li {
  color: #46266e !important;
}
nav {
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  position: fixed;
  top: 0;
 
  /* background: transparent; */
  /* background: white; */
  z-index: 999;
}
.nav {
  width: 90%;
  margin: auto;
}

a {
  font-weight: normal;
}
img {
  width: 100px;
}
ul {
  list-style: none;
  margin-top: 20px;
  align-items: center;
  margin-left: 60px;
}
li {
  padding: 0 20px;
  font-size: 17px;
  color: white;
}
.breadcrumb {
  display: none !important;
}
.dashboard {
  color: white;
  border: 1px solid #46266e;
  padding: 10px 23px;
  border-radius: 9px;
  background: #46266e;
  margin-left: 50px;
}
.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: white;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

.overlay a {
  font-size: 20px;
}
.overlay .closebtn {
  font-size: 70px;
  top: 15px;
  right: 35px;
  color: white;
}
.overlay {
  display: none;
}
@media screen and (max-width: 767px) {
  nav {
    padding: 7px 0;
    padding-bottom: 6px !important;
    padding-top: 30px;
  }

  .lg-dashboard {
    display: none;
  }
  .overlay {
    display: block;
  }
  .breadcrumb {
    display: block !important;
    margin-top: -15px !important;
  }
  ul {
    margin-left: -10px;
    margin-top: -30px !important;
  }

  .dashboard {
    color: white;
    border: 1px solid white;
    padding: 13px 23px;
    border-radius: 10px;
    font-size: 20px;
    background: transparent !important;
    margin-left: 0px;
  }

  li {
    padding: 15px 0px;
    font-size: 20px;
    color: white !important;
  }

  .nav-list,
  .lg {
    display: none !important;
  }
  img {
    width: 60px;
    margin-top: -30px;
  }
}
</style>
