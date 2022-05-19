<template>
  <div>
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
    this.$store.dispatch("loadAuthors");
  },
};
</script>

<style>
</style>