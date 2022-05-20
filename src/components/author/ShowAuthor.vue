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
          lg="3"
          sm="4"
          cols="6"
        >
          <v-card class="rounded-shaped elevation-6" max-width="280" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">ID BOOK: {{ resultSearch&&resultSearch.data.idBook }}</div>
                <v-list-item-title class="headline mb-1"
                  >{{resultSearch&&resultSearch.data.firstName}}</v-list-item-title
                >
                <v-list-item-subtitle
                  >Last Name: {{resultSearch&&resultSearch.data.lastName}}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

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
              <v-spacer></v-spacer>
              <v-btn text @click="delAuthor(index)">DELETE</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-show="showSearch === false">
      <AddAuthor :authors="authors" />
      <v-row>
        <v-col
          lg="3"
          sm="4"
          cols="6"
          v-for="(author, index) in authors"
          :key="index"
        >
          <v-card class="rounded-shaped elevation-6" max-width="280" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">ID BOOK: {{ author.idBook }}</div>
                <v-list-item-title class="headline mb-1"
                  >{{author.firstName}}</v-list-item-title
                >
                <v-list-item-subtitle
                  >Last Name: {{author.lastName}}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

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
              <v-spacer></v-spacer>
              <v-btn text @click="delAuthor(index)">DELETE</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddAuthor from './AddAuthor.vue'
import axios from 'axios'

export default {
  components: {
    AddAuthor
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
    delAuthor(index) {
      this.authors.splice(index, 1)
    },
    async sendMessage () {
        this.showSearch = true
        await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${this.message}`)
        .then((res)=>{
          this.resultSearch = res
        })
      },
  },
  computed: {
    authors() {
      return this.$store.state.authors.data;
    },
  },
  created() {
    this.loading = true
    this.$store.dispatch("loadAuthors").then((res)=>{
      this.loading = false
      res.data
    });
  },
};
</script>

<style>

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