<template>
  <div>
    <v-btn color="primary" @click="openModal">ADD ITEM</v-btn>
    <v-dialog v-model="showDialog" width="500">
      <v-card width="450">
        <v-card-title class="headline">Add Activity</v-card-title>
        <v-card-text>
          <v-text-field label="Id" v-model="id"></v-text-field>
          <v-text-field label="idBook" v-model="idBook"></v-text-field>
          <v-text-field label="firstName" v-model="firstName"></v-text-field>
          <v-text-field label="lastName" v-model="lastName"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="addAuthor">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["authors"],
  data() {
    return {
      showDialog: false,
      id: 0,
      idBook: 0,
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    openModal() {
      this.showDialog = true;
    },
    addAuthor() {
      this.authors.push({id: this.id, idBook: this.idBook, firstName: this.firstName, completed: this.lastName})
      this.firstName = null
      this.lastName = null
    },
  },
};
</script>

<style>
</style>