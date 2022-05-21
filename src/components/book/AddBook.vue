<template>
  <div class="mb-5">
    <v-btn color="primary" @click="openModal">ADD ITEM</v-btn>
    <v-dialog v-model="showDialog" width="500">
      <v-card width="450">
        <v-card-title class="headline">Add Activity</v-card-title>
        <v-card-text>
          <v-text-field label="Id" v-model="id"></v-text-field>
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-text-field
            label="Description"
            v-model="description"
          ></v-text-field>
          <v-text-field label="Excerpt" v-model="excerpt"></v-text-field>
          <v-text-field
            label="publishDate"
            v-model="publishDate"
          ></v-text-field>
          <v-text-field label="pageCount" v-model="pageCount"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="addBook">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["books"],
  data() {
    return {
      showDialog: false,
      id: 0,
      title: "",
      description: "",
      excerpt: "",
      publishDate: "2022-05-20T11:09:35.520Z",
      pageCount: 0,
    };
  },
  methods: {
    openModal() {
      this.showDialog = true;
    },
    addBook() {
      this.books.push({
        id: this.id,
        title: this.title,
        description: this.description,
        excerpt: this.excerpt,
        publishDate: this.publishDate,
        pageCount: this.pageCount,
      });
      this.title = null;
      this.description = null;
      this.excerpt = null;
    },
  },
};
</script>

<style>
</style>