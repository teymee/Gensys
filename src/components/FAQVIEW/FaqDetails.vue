<template>
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
  
</template>

<script>
import Accordion from "../Accordion.vue";
import Signup from "../Home/Signup.vue";
export default {
  name: "FaqDetails",
  components: { Accordion, Signup },
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
};
</script>

<style scoped>
.details {
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
</style>