<template>
  <aside class="menu">
    <ul>
      <router-link :to="{ path: '/faq', hash: '#genEnq' }">
        <li
          class="d-flex"
          :class="curRoute.includes('genEnq') ? 'active-list' : ' '"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 22V14H13V16H15V22H12V24H20V22H17ZM16 8C15.7033 8 15.4133 8.08797 15.1666 8.2528C14.92 8.41762 14.7277 8.65189 14.6142 8.92597C14.5006 9.20006 14.4709 9.50166 14.5288 9.79264C14.5867 10.0836 14.7296 10.3509 14.9393 10.5607C15.1491 10.7704 15.4164 10.9133 15.7074 10.9712C15.9983 11.0291 16.2999 10.9994 16.574 10.8858C16.8481 10.7723 17.0824 10.58 17.2472 10.3334C17.412 10.0867 17.5 9.79667 17.5 9.5C17.5 9.10218 17.342 8.72064 17.0607 8.43934C16.7794 8.15804 16.3978 8 16 8V8Z"
            />
            <path
              d="M16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91973 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05845 6.10051 6.10051C8.05845 4.14258 10.553 2.80921 13.2687 2.26901C15.9845 1.72882 18.7994 2.00607 21.3576 3.06569C23.9157 4.12532 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 4.00001C13.6266 4.00001 11.3066 4.70379 9.33316 6.02237C7.35977 7.34095 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.69361 20.6689 5.83649 22.8071 7.51472 24.4853C9.19295 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2325 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 12.8174 26.7357 9.76516 24.4853 7.51472C22.2349 5.26429 19.1826 4.00001 16 4.00001V4.00001Z"
            />
          </svg>
          <span> GENERAL ENQUIRES </span>
        </li>
      </router-link>

      <router-link :to="{ path: '/faq', hash: '#device' }">
        <li
          class="d-flex"
          :class="curRoute.includes('device') ? 'active-list' : ' '"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75359 4.79981C8.84728 4.80047 7.96806 5.10891 7.25995 5.67458C6.55184 6.24025 6.05683 7.02963 5.85599 7.91341L3.31039 19.1134C3.17735 19.6988 3.17779 20.3067 3.31169 20.8919C3.44559 21.4772 3.70951 22.0248 4.08387 22.4941C4.45823 22.9634 4.93344 23.3425 5.47426 23.6031C6.01508 23.8638 6.60763 23.9994 7.20799 23.9998H24.792C25.3925 23.9996 25.9852 23.8642 26.5262 23.6037C27.0672 23.3431 27.5427 22.9641 27.9172 22.4947C28.2917 22.0253 28.5558 21.4777 28.6898 20.8923C28.8238 20.307 28.8243 19.699 28.6912 19.1134L26.1472 7.91341C25.9461 7.02856 25.4501 6.23837 24.7407 5.67258C24.0313 5.10679 23.1506 4.79902 22.2432 4.79981H9.75359ZM7.41439 8.26861C7.53479 7.73811 7.83184 7.26426 8.25685 6.92472C8.68185 6.58518 9.2096 6.4001 9.75359 6.39981H22.2448C22.789 6.39973 23.3172 6.58465 23.7425 6.92422C24.1678 7.26379 24.4651 7.73785 24.5856 8.26861L27.1312 19.4686C27.2109 19.82 27.2105 20.1848 27.13 20.5361C27.0495 20.8873 26.8909 21.2159 26.6661 21.4975C26.4412 21.779 26.1559 22.0063 25.8312 22.1626C25.5064 22.3188 25.1507 22.3999 24.7904 22.3998H7.20799C6.84779 22.3996 6.49225 22.3183 6.16774 22.162C5.84322 22.0057 5.55806 21.7784 5.33338 21.4968C5.1087 21.2153 4.95028 20.8868 4.86985 20.5357C4.78943 20.1846 4.78906 19.8199 4.86879 19.4686L7.41279 8.26861H7.41439ZM8.79999 25.5998C8.58781 25.5998 8.38433 25.6841 8.2343 25.8341C8.08427 25.9841 7.99999 26.1876 7.99999 26.3998C7.99999 26.612 8.08427 26.8155 8.2343 26.9655C8.38433 27.1155 8.58781 27.1998 8.79999 27.1998H23.2C23.4122 27.1998 23.6156 27.1155 23.7657 26.9655C23.9157 26.8155 24 26.612 24 26.3998C24 26.1876 23.9157 25.9841 23.7657 25.8341C23.6156 25.6841 23.4122 25.5998 23.2 25.5998H8.79999Z"
            />
          </svg>
          <span>DEVICES</span>
        </li>
      </router-link>

      <router-link :to="{ path: '/faq', hash: '#install' }">
        <li
          class="d-flex"
          :class="curRoute.includes('install') ? 'active-list' : ' '"
        >
          <svg
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="diff-svg"
          >
            <path
              d="M24.5999 5.70034L21.2219 1.33301H4.77795L1.38928 5.70034"
              stroke="#46266E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 6.66634C1 6.31272 1.14048 5.97358 1.39052 5.72353C1.64057 5.47348 1.97971 5.33301 2.33333 5.33301H23.6667C24.0203 5.33301 24.3594 5.47348 24.6095 5.72353C24.8595 5.97358 25 6.31272 25 6.66634V24.6663C25 25.1968 24.7893 25.7055 24.4142 26.0806C24.0391 26.4556 23.5304 26.6663 23 26.6663H3C2.46957 26.6663 1.96086 26.4556 1.58579 26.0806C1.21071 25.7055 1 25.1968 1 24.6663V6.66634Z"
              stroke="#46266E"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M18.3333 15.9993L13 21.3327L7.66663 15.9993M12.9946 10.666V21.3327"
              stroke="#46266E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>INSTALLATION AND OPERATION</span>
        </li>
      </router-link>

      <router-link :to="{ path: '/faq', hash: '#sub' }">
        <li
          class="d-flex"
          :class="curRoute.includes('sub') ? 'active-list' : ' '"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66663 10.1667C2.66663 9.0616 3.10561 8.00179 3.88701 7.22039C4.66842 6.43899 5.72822 6 6.83329 6H25.1666C26.2717 6 27.3315 6.43899 28.1129 7.22039C28.8943 8.00179 29.3333 9.0616 29.3333 10.1667V21.8333C29.3333 22.9384 28.8943 23.9982 28.1129 24.7796C27.3315 25.561 26.2717 26 25.1666 26H6.83329C5.72822 26 4.66842 25.561 3.88701 24.7796C3.10561 23.9982 2.66663 22.9384 2.66663 21.8333V10.1667ZM6.83329 7.66667C6.17025 7.66667 5.53437 7.93006 5.06553 8.3989C4.59668 8.86774 4.33329 9.50363 4.33329 10.1667V12.3333H27.6666V10.1667C27.6666 9.50363 27.4032 8.86774 26.9344 8.3989C26.4655 7.93006 25.8297 7.66667 25.1666 7.66667H6.83329ZM4.33329 21.8333C4.33329 22.4964 4.59668 23.1323 5.06553 23.6011C5.53437 24.0699 6.17025 24.3333 6.83329 24.3333H25.1666C25.8297 24.3333 26.4655 24.0699 26.9344 23.6011C27.4032 23.1323 27.6666 22.4964 27.6666 21.8333V14H4.33329V21.8333ZM20.8333 19.6667C20.6123 19.6667 20.4003 19.7545 20.244 19.9107C20.0878 20.067 20 20.279 20 20.5C20 20.721 20.0878 20.933 20.244 21.0893C20.4003 21.2455 20.6123 21.3333 20.8333 21.3333H24.5C24.721 21.3333 24.9329 21.2455 25.0892 21.0893C25.2455 20.933 25.3333 20.721 25.3333 20.5C25.3333 20.279 25.2455 20.067 25.0892 19.9107C24.9329 19.7545 24.721 19.6667 24.5 19.6667H20.8333Z"
            />
          </svg>
          <span>SUBCRIPTION</span>
        </li>
      </router-link>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "MenuSidebar",
  computed: {
    curRoute() {
      return this.$route.hash;
    },
  },
};
</script>

<style scoped>
a {
  color: #46266e;
}
ul {
  margin-top: 60px;
}
.menu {
  width: 100%;
}
.menu li {
  border: 1px solid #bfbfbf;
  padding: 17px 0;
  padding-left: 15px;
  margin-bottom: 10px;
  align-items: center;
  border-radius: 3px;
}
.menu li:hover {
  background: #46266e;
  color: white;
  cursor: pointer;
}
.active-list {
  background: #46266e !important;
  color: white;
  cursor: pointer;
}
.unactive-link {
  background: #46266e !important;
  color: white;
}
.active-list svg {
  fill: white !important;
}
svg {
  fill: #46266e;
}
.diff-svg {
  fill: none !important;
}

.menu li:hover svg {
  fill: white !important;
}
.menu svg {
  margin-right: 15%;
}
</style>