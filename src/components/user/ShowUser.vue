<template>
  <div>
    <!-- start loading -->
    <div class="loading" v-if="loading">
      <div class="spinner-wrapper">
        <span class="spinner-text">LOADING</span>
        <span class="spinner"></span>
      </div>
    </div>
    <!-- end loading -->

    <!-- search title -->
    <v-card>
      <v-container>
        <v-row align="center">
          <v-col cols="12">
            <v-text-field
            v-model="message"
            append-icon="mdi-send"
            :prepend-icon="icon"
            filled
            label="Search in ID"
            type="text"
            @click:append="sendMessage"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- end search title -->
    <v-container v-show="showSearch">
      <v-row>
        <v-col
          lg="4"
          sm="6"
          cols="12"
        >
          <div class="container">
            <div
              class="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInUp;
              "
            >
              <!-- Team Thumb-->
              <div class="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                />
              </div>
              <!-- Team Details-->
              <div class="single_advisor_details_info">
                <h6>{{ resultSearch&&resultSearch.data.userName }}</h6>
                <p class="designation">{{ resultSearch&&resultSearch.data.password }}</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-show="showSearch === false">
      <AddUser :users="users" />
      <v-row>
        <v-col
          lg="4"
          sm="6"
          cols="12"
          v-for="(user, index) in users"
          :key="index"
        >
          <div class="container">
            <div
              class="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInUp;
              "
            >
              <!-- Team Thumb-->
              <div class="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                />
                <!-- Social Info-->
                <div class="social-info">
                  <a href="#"><i class="fa fa-facebook"></i></a
                  ><a href="#"><i class="fa fa-twitter"></i></a
                  ><a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
              <!-- Team Details-->
              <div class="single_advisor_details_info">
                <h6>{{ user.userName }}</h6>
                <p class="designation">{{ user.password }}</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import AddUser from './AddUser.vue'

export default {
  components: {
    AddUser
  },
  data() {
    return {
      loading: false,
      showSearch: false,
      message: null,
      resultSearch: null,
    };
  },
  methods: {
    async sendMessage () {
        this.showSearch = true
        await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Users/${this.message}`)
        .then((res)=>{
          this.resultSearch = res
        })
      },
  },
  computed: {
    users() {
      return this.$store.state.users.data;
    },
  },
  created() {
    this.loading = true
    this.$store.dispatch("loadUsers").then((res)=>{
      this.loading = false
      res.data
    });
  },
};
</script>

<style>
body {
  margin-top: 20px;
  background: #eee;
}
.single_advisor_profile {
  position: relative;
  margin-bottom: 50px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  z-index: 1;
  border-radius: 15px;
  -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
  box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
}
.single_advisor_profile .advisor_thumb {
  position: relative;
  z-index: 1;
  border-radius: 15px 15px 0 0;
  margin: 0 auto;
  padding: 30px 30px 0 30px;
  background-color: #3f43fd;
  overflow: hidden;
}
.single_advisor_profile .advisor_thumb::after {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  position: absolute;
  width: 150%;
  height: 80px;
  bottom: -45px;
  left: -25%;
  content: "";
  background-color: #ffffff;
  -webkit-transform: rotate(-15deg);
  transform: rotate(-15deg);
}
@media only screen and (max-width: 575px) {
  .single_advisor_profile .advisor_thumb::after {
    height: 160px;
    bottom: -90px;
  }
}
.single_advisor_profile .advisor_thumb .social-info {
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: 0;
  right: 30px;
  text-align: right;
}
.single_advisor_profile .advisor_thumb .social-info a {
  font-size: 14px;
  color: #020710;
  padding: 0 5px;
}
.single_advisor_profile .advisor_thumb .social-info a:hover,
.single_advisor_profile .advisor_thumb .social-info a:focus {
  color: #3f43fd;
}
.single_advisor_profile .advisor_thumb .social-info a:last-child {
  padding-right: 0;
}
.single_advisor_profile .single_advisor_details_info {
  position: relative;
  z-index: 1;
  padding: 30px;
  text-align: right;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  border-radius: 0 0 15px 15px;
  background-color: #ffffff;
}
.single_advisor_profile .single_advisor_details_info::after {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 3px;
  background-color: #3f43fd;
  content: "";
  top: 12px;
  right: 30px;
}
.single_advisor_profile .single_advisor_details_info h6 {
  margin-bottom: 0.25rem;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_advisor_profile .single_advisor_details_info h6 {
    font-size: 14px;
  }
}
.single_advisor_profile .single_advisor_details_info p {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  margin-bottom: 0;
  font-size: 14px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_advisor_profile .single_advisor_details_info p {
    font-size: 12px;
  }
}
.single_advisor_profile:hover .advisor_thumb::after,
.single_advisor_profile:focus .advisor_thumb::after {
  background-color: #070a57;
}
.single_advisor_profile:hover .advisor_thumb .social-info a,
.single_advisor_profile:focus .advisor_thumb .social-info a {
  color: #ffffff;
}
.single_advisor_profile:hover .advisor_thumb .social-info a:hover,
.single_advisor_profile:hover .advisor_thumb .social-info a:focus,
.single_advisor_profile:focus .advisor_thumb .social-info a:hover,
.single_advisor_profile:focus .advisor_thumb .social-info a:focus {
  color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info,
.single_advisor_profile:focus .single_advisor_details_info {
  background-color: #070a57;
}
.single_advisor_profile:hover .single_advisor_details_info::after,
.single_advisor_profile:focus .single_advisor_details_info::after {
  background-color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info h6,
.single_advisor_profile:focus .single_advisor_details_info h6 {
  color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info p,
.single_advisor_profile:focus .single_advisor_details_info p {
  color: #ffffff;
}


.loading {
  -webkit-animation: fadein 2s;
  -moz-animation: fadein 2s;
  -o-animation: fadein 2s;
  animation: fadein 2s;
}
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.spinner-wrapper {
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.93);
  position: absolute;
  z-index: 300;
}

.spinner-text {
  position: absolute;
  top: 41.5%;
  left: 47%;
  margin: 16px 0 0 35px;
  font-size: 16px;
  font-family: Arial;
  color: #212121;
  letter-spacing: 1px;
  font-weight: 700;
}
.spinner {
  margin: 0;
  display: block;
  position: absolute;
  left: 45%;
  top: 40%;
  border: 25px solid rgba(100, 100, 100, 0.2);
  width: 1px;
  height: 1px;
  border-left-color: transparent;
  border-right-color: transparent;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  -webkit-animation: spin 1.5s infinite;
  -moz-animation: spin 1.5s infinite;
  animation: spin 1.5s infinite;
}

@-webkit-keyframes spin {
  0%,
  100% {
    -webkit-transform: rotate(0deg) scale(1);
  }
  50% {
    -webkit-transform: rotate(720deg) scale(0.6);
  }
}

@-moz-keyframes spin {
  0%,
  100% {
    -moz-transform: rotate(0deg) scale(1);
  }
  50% {
    -moz-transform: rotate(720deg) scale(0.6);
  }
}
@-o-keyframes spin {
  0%,
  100% {
    -o-transform: rotate(0deg) scale(1);
  }
  50% {
    -o-transform: rotate(720deg) scale(0.6);
  }
}
@keyframes spin {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(720deg) scale(0.6);
  }
}
</style>