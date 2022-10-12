<template>
  <Navbar />
  <section data-aos="fade-up" data-aos-duration="1500">
    <div class="faq mx-auto mt-5">
      <div class="text-center">
        <h1>Frequently asked questions</h1>
        <p>
          Get to know more about frequently asked questions arround Gensys as a
          whole.
        </p>
      </div>

      <div class="menu">
        <ul>
          <router-link :to="{ path: '/faq', hash: '#genEng' }">
            <li
              class="d-flex"
              :class="curRoute.includes('genEng') ? 'active-list' : ' '"
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
      </div>

      <div class="details">
        <div class="container mb-5" id="genEnq">
          <div class="title d-flex">
            <img src="@/assets/info.svg" />
            <div>
              <h1>General Enquires</h1>
              <p>Get a general overview of Gensys</p>
            </div>
          </div>
          <ul class="mt-4">
            <li class="mb-3" v-for="item in generalEnq" :key="item.title">
              <div class="mx-auto py-lg-3 faq-inner">
                <Accordion :title="item.title">
                  <transition name="fade">
                    <div>
                      <p v-if="!item.type" class="mt-4 dropdown-text">
                        {{ item.body }}
                      </p>
                      <ul v-if="item.type" class="list">
                        <li v-for="list in item.body">{{ list }}</li>
                      </ul>
                    </div>
                  </transition>
                </Accordion>
              </div>
            </li>
          </ul>
        </div>

        <div class="container pb-5 mb-5" id="device"></div>

        <div class="container mb-5">
          <div class="title d-flex">
            <img src="@/assets/device.svg" />
            <div>
              <h1>Device</h1>
              <p>Get to know about our devices</p>
            </div>
          </div>
          <ul class="mt-4">
            <li class="mb-3" v-for="item in device" :key="item.title">
              <div class="mx-auto py-lg-3 faq-inner">
                <Accordion :title="item.title">
                  <transition name="fade">
                    <div>
                      <p v-if="!item.type" class="mt-4 dropdown-text">
                        {{ item.body }}
                      </p>
                      <ul v-if="item.type" class="list">
                        <li v-for="list in item.body">{{ list }}</li>
                      </ul>
                    </div>
                  </transition>
                </Accordion>
              </div>
            </li>
          </ul>
        </div>

        <div class="container pb-5 mb-5" id="install"></div>

        <div class="container mb-5">
          <div class="title d-flex">
            <img src="@/assets/install.svg" />
            <div>
              <h1>Installation and Operation</h1>
              <p>installation and operation process</p>
            </div>
          </div>
          <ul class="mt-4">
            <li class="mb-3" v-for="item in install" :key="item.title">
              <div class="mx-auto py-lg-3 faq-inner">
                <Accordion :title="item.title">
                  <transition name="fade">
                    <div>
                      <p v-if="!item.type" class="mt-4 dropdown-text">
                        {{ item.body }}
                      </p>
                      <ul v-if="item.type" class="list">
                        <li v-for="list in item.body">{{ list }}</li>
                      </ul>
                    </div>
                  </transition>
                </Accordion>
              </div>
            </li>
          </ul>
        </div>

        <div class="container pb-5 mb-5" id="sub"></div>

        <div class="container mb-5">
          <div class="title d-flex">
            <img src="@/assets/sub.svg" />
            <div>
              <h1>Subcriptions</h1>
              <p>See information about our subscription</p>
            </div>
          </div>
          <ul class="mt-4">
            <li class="mb-3" v-for="item in sub" :key="item.title">
              <div class="mx-auto py-lg-3 faq-inner">
                <Accordion :title="item.title">
                  <transition name="fade">
                    <div>
                      <p v-if="!item.type" class="mt-4 dropdown-text">
                        {{ item.body }}
                      </p>
                      <ul v-if="item.type" class="list">
                        <li v-for="list in item.body">{{ list }}</li>
                      </ul>
                    </div>
                  </transition>
                </Accordion>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Signup />
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Accordion from "@/components/Accordion.vue";
import Footer from "@/components/Footer.vue";
import Signup from "@/components/Home/Signup.vue";
export default {
  name: "FAQ",
  data() {
    return {
      open: false,
      generalEnq: [
        {
          title: "What is Gensys ?",
          body: "Gensys powered by Epump is the most reliable way to keep track of your company's fueling system. It is a revolutionary new product that will help you keep track of your fuel consumption and know precisely how much you're paying for it. Gensys allows you to monitor performance metrics for each fueling event. This information is compiled into a detailed report that can be sent out to all relevant parties at regular intervals.",
        },
        {
          title: "How does Gensys work?",
          body: "It starts with the installation of a probe into your generator tank, which measures your tank's fuel level in real time. Our console which would be installed in your office would receive signals from the probe, so it can be seen live by you, your management team at the utility company, and your fuel supplier—basically anyone who needs access can see where things stand at any given moment. It's all about building trust by being transparent.",
        },
        {
          title: "What are the benefits of using Gensys?",
          type: true,
          body: [
            "Inventory control through its advanced software and technology",
            "Real-time monitoring of tank levels and fueling activity",
            "Remote access to all data",
            "Easy integration with existing systems",
            "With Gensys, management can keep track of fueling activity, including time of fill and fuel level in your generators and utility personnel can control the fueling process using our smart fuel control unit. This means that there is no question about when and where fuel is coming from, so everyone can focus on their own jobs with confidence in the process",
          ],
        },
        {
          title: "\tHow do I get started with Gensys?",
          body: "Reach out to us on any of our platforms. Our representative would then connect with you to get details of your equipment, a site inspection would be done if need be, and costs would be shared with you thereafter",
        },
        {
          title: "Where can Gensys be used?",
          body: "Corporate organizations, facilities and factories that make use of generator tanks. Gensys also caters to individual households who are interested in keeping tabs on their fuel consumption.",
        },
        {
          title: "What is the difference between Epump and Gensys?",
          body: "Epump provides a much-needed automation solution for fuel stations, giving fuel station owners access to remotely monitor their stations, monitor sales, and change prices, among other things. On the other hand, Gensys is a fuel management system built for corporations and businesses that use industrial generators. ",
        },
        {
          title: "How can I order fuel?",
          body: "You can order fuel from our list of partnering fuel suppliers. Log into your app and go to the “order fuel” session, you will see a list of fuel stations that has your desired product available with prices. Click on your station of preference and place your order.",
        },
        {
          title: "What other features are there on the Gensys platform?",
          body: "Asides from fuel tracking and monitoring, you can also order fuel from the comfort of your office, and we’ll have it delivered straight to you. We work with a pool of reputable suppliers who would not compromise on anything.",
        },
      ],

      device: [
        {
          title: "How many devices come with Gensys?",
          body: "When you order for the Gensys device, you get the Gensys console and ATG probe. Control and monitoring are accessed online from your mobile device or desktop.",
        },

        {
          title: "What does the Gensys console do?",
          body: "The Gensys console connects to the ATG probe through a wired network and connects to network power as well as generator power.The Console transmits data to our cloud server about inventory levels and generator and network power usage hours.Management receives all data given by the console instantly.  ",
        },

        {
          title: "What is an ATG probe?",
          body: "An ATG probe (Automatic Tank Gauge) is a magnetostrictive device that is installed in a generator tank to take stock of product level, water level, and temperature and detect anomalies, if any, in the fuel product.",
        },
      ],

      install: [
        {
          title: "Who installs the Gensys device after it is ordered?",
          body: "After ordering the Gensys fuel management system, your order will be fulfilled and our highly-trained field engineers will take care of the installation process for you.",
        },

        {
          title: "Where is the Gensys console installed?",
          body: "The Gensys console is installed in the utility office. This way facility managers and technicians can have easy access to it.",
        },

        {
          title: " Who gets access to the information from the device?",
          body: "Facility managers, Company Administrators and Decision makers",
        },

        {
          title: "Where is the ATG probe placed?",
          body: "The ATG probe is installed in tanks to take stock of products as well as the level of water in the tank if any and transmits the data the Gensys console.",
        },

        {
          title:
            "How does Gensys detect when companies use power grid and generator power?",
          body: "Gensys has developed a new way for business owners to monitor their generator usage. We provide an easy-to-use dashboard that shows you exactly when your generator is being used and when it isn’t. This way, you can tell which power supplier is being used at a particular time. Plus, we can help you understand the energy consumption of your various loads so that you know exactly how much power your business appliances consume and whether or not it makes sense for your business to keep using that load.",
        },

        {
          title: "What other features are there on the Gensys platform?",
          body: "Asides from fuel tracking and monitoring, you can also order fuel from the comfort of your office, and we’ll have it delivered straight to you. We work with a pool of reputable suppliers who would not compromise on anything.",
        },
      ],

      sub: [
        {
          title: "How much does Gensys cost?",
          body: "Our prices are affordable depending on the package you require. You can go for the full package which consists of the Probe and console or just the probe alone. We are happy to discuss costs further once you reach out on any of our platforms",
        },

        {
          title: "What are the subscription plans?",
          body: "Once the device has been bought, you will be required to pay a monthly subscription fee.",
        },
      ],

      faq: [],
    };
  },
  computed: {
    curRoute() {
      return this.$route.hash;
    },
  },
  components: { Navbar, Accordion, Footer, Signup },
};
</script>

<style scoped>
section {
  padding-top: 100px;
  background: #fafafa;
  position: relative;
}

a {
  color: #46266e;
}
.main {
  display: flex;
  justify-content: space-between;
}
.details {
  width: 65%;
  margin-left: 34%;
}
.menu {
  margin-top: 5%;
  height: 300px;
  width: 30%;
  position: fixed !important;
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
.title {
  align-items: center;
  margin-left: 30px;
  border-bottom: 0.3px solid #00000020;
  padding-bottom: 10px;
}

.title h1 {
  margin-top: 18px;
  font-weight: 400;
  font-size: 30px;
}

.title p {
  font-weight: 300;
  font-size: 20px;
  margin-top: -10px;
}

.title img {
  width: 54px;

  margin-right: 40px;
}

.faq {
  width: 95%;
}
.details {
  margin-top: 3%;
}

.details li {
  list-style: none;
  border-radius: 5px;
  font-size: 16px !important;
  background: #f2ecf8;
  color: #46266e !important;
}
.list li {
  border: none;
  list-style: disc !important;
  margin-top: 10px;
}

.faq-inner {
  width: 90%;
}
@media screen and (max-width: 800px) {
  section {
    width: 98% !important;
    margin: auto;
  }
  .title {
    font-size: 13px;
  }

  .title p {
    font-size: 13px;
    margin-top: 10px;
  }
  .title img {
    margin-right: 15px;
  }

  .details li {
    padding-top: 5px;
    font-size: 13px;
  }

  .faq {
    width: 98% !important;
  }

  li {
    border-radius: 10px;
    font-size: 13px !important;
  }

  .faq h1 {
    font-size: 20px;
  }

  .last-para {
    width: 85%;
    margin: auto;
  }
  li {
    margin-left: -30px;
  }
  .dropdown-text {
    padding-bottom: 20px;
    font-size: 13px;
  }
  .list {
    margin-left: 30px;
    padding-bottom: 20px;
  }
  .list li {
    font-size: 13px;
  }
}
</style>
