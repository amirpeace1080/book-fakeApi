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
        <v-col lg="3" sm="4" cols="12">
          <v-card
            class="mx-auto"
            max-width="322"
            :color="
              resultSearch && resultSearch.data.completed
                ? '#4FC3F7'
                : '#FF8A65'
            "
            hover
            link
          >
            <v-img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dmBKm68YURPgmQbeKam2BFk1UVpF1sQikA&usqp=CAU"
              height="200px"
            ></v-img>

            <v-card-title>
              {{ resultSearch && resultSearch.data.title }}
            </v-card-title>

            <!-- <v-card-subtitle> Army Knowledge Online </v-card-subtitle> -->

            <v-card-actions>
              <v-btn text>
                <ShareNetwork
                  network="telegram"
                  url="http://mohammad-sharifi.ir"
                  title="CV online."
                  description="I'm mohammad sharifi programmer front-end."
                  hashtags="vuejs,javascript"
                >
                  Share
                </ShareNetwork>
              </v-btn>

              <v-btn color="#000" text @click="deleteActivity(index)">
                Delete
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ resultSearch && resultSearch.data.dueDate }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-show="showSearch === false">
      <AddActivity :activities="activities" />
      <v-row>
        <v-col
          lg="3"
          sm="4"
          cols="12"
          v-for="(active, index) in activities"
          :key="index"
        >
          <v-card
            class="mx-auto"
            max-width="322"
            :color="active.completed ? '#4FC3F7' : '#FF8A65'"
            hover
            link
          >
            <v-img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dmBKm68YURPgmQbeKam2BFk1UVpF1sQikA&usqp=CAU"
              height="200px"
            ></v-img>

            <v-card-title> {{ active.title }} </v-card-title>

            <!-- <v-card-subtitle> Army Knowledge Online </v-card-subtitle> -->

            <v-card-actions>
              <v-btn text>
                <ShareNetwork
                  network="telegram"
                  url="http://mohammad-sharifi.ir"
                  title="CV online."
                  description="I'm mohammad sharifi programmer front-end."
                  hashtags="vuejs,javascript"
                >
                  Share
                </ShareNetwork>
              </v-btn>

              <v-btn color="#000" text @click="deleteActivity(index)">
                Delete
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ active.dueDate }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddActivity from "./AddActivity.vue";
import axios from "axios";

export default {
  components: {
    AddActivity,
  },
  data() {
    return {
      loading: false,
      show: false,
      showSearch: false,
      message: null,
      resultSearch: null,
    };
  },
  methods: {
    deleteActivity(index) {
      this.activities.splice(index, 1);
    },
    async sendMessage() {
      this.showSearch = true;
      await axios
        .get(
          `https://fakerestapi.azurewebsites.net/api/v1/Activities/${this.message}`
        )
        .then((res) => {
          this.resultSearch = res;
        });
    },
  },
  computed: {
    activities() {
      return this.$store.state.activities.data;
    },
  },
  created() {
    this.loading= true
    this.$store.dispatch("loadActivities").then((res)=>{
      this.loading= false
      res.data
    });
  },
};
</script>

<style>
.mx-auto {
  margin: 20px;
  box-shadow: 9px 9px 9px rgba(128, 128, 128, 0.6);
}
.mx-auto:hover {
  box-shadow: 9px 9px 9px rgba(20, 20, 20, 0.6);
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