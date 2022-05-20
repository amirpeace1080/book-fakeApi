<template>
  <div>
    <v-btn color="primary" @click="openModal">ADD ITEM</v-btn>
    <v-dialog v-model="showDialog" width="500">
      <v-card width="450">
        <v-card-title class="headline">Add Activity</v-card-title>
        <v-card-text>
          <v-text-field label="Id" v-model="id"></v-text-field>
          <v-text-field label="userName" v-model="userName"></v-text-field>
          <v-text-field
            label="password"
            v-model="password"
          ></v-text-field>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="addUser">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["users"],
  data() {
    return {
      showDialog: false,
      id: 0,
      userName: "",
      password: "",
    };
  },
  methods: {
    openModal() {
      this.showDialog = true;
    },
    addUser() {
      this.users.push({
        id: this.id,
        userName: this.userName,
        password: this.password,
      });
      this.userName = null;
      this.password = null;
    },
  },
};
</script>

<style>
</style>