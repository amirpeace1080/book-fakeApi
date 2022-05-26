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
    <router-view />
    <v-container v-show="showSearch">
      <v-row>
        <v-col
          lg="3"
          sm="4"
          cols="12"
        >
          <div class="container">
            <div class="card">
              <div class="box">
                <div class="content">
                  <h2>{{resultSearch&&resultSearch.data.id}}</h2>
                  <h3>{{resultSearch&&resultSearch.data.title}}</h3>
                  <p class="description">
                    {{resultSearch&&resultSearch.data.description}}
                  </p>
                  <!-- <router-link :to="{name: 'book.id', params: {id: book.id}}">Read More</router-link> -->
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div>
      <div>
    <v-container v-show="showSearch === false">
      <AddBook :books="books" />
      <v-row>
        <v-col
          lg="3"
          sm="4"
          cols="12"
          v-for="(book, index) in visiblePages"
          :key="index"
        >
          <div class="container">
            <div class="card">
              <div class="box">
                <div class="content">
                  <h2>{{book.id}}</h2>
                  <h3>{{book.title}}</h3>
                  <p class="description">
                    {{book.description}}
                  </p>
                  <router-link :to="{name: 'book.id', params: {id: book.id}}">Read More</router-link>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

        <v-pagination
          v-model="page"
          :length="Math.ceil(pages.length / perPage)"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AddBook from "./AddBook.vue";

export default {
  components: {
    AddBook,
  },
  data() {
    return {
      loading: false,
      showSearch: false,
      message: null,
      resultSearch: null,
      page: 1,
      perPage: 12,
      pages: [],
    };
  },
  methods: {
    async sendMessage() {
      this.showSearch = true;
      await axios
        .get(
          `https://fakerestapi.azurewebsites.net/api/v1/Books/${this.message}`
        )
        .then((res) => {
          this.resultSearch = res;
        });
    },
  },
  computed: {
    books() {
      return this.$store.state.books.data;
    },
    visiblePages() {
      return this.pages.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("loadBooks").then((res) => {
      this.loading = false;
      this.pages = res.data;
    });
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
}

.container .card {
  position: relative;
  min-width: 285px;
  height: 350px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;
}

.container .card:nth-child(1) .box .content a {
  background: #2196f3;
}

.container .card:nth-child(2) .box .content a {
  background: #e91e63;
}

.container .card:nth-child(3) .box .content a {
  background: #23c186;
}

.container .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}

.container .card .box:hover {
  transform: translateY(-50px);
}

.container .card .box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}

.container .card .box .content {
  padding: 20px;
  text-align: center;
}

.container .card .box .content h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.1);
}

.container .card .box .content h3 {
  font-size: 1.8rem;
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
}

.container .card .box .content p {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
}

.container .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.container .card .box .content a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #000;
}
.description {
  height: 70px;
  overflow: hidden;
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