<template>
  <div>
    <v-btn color="primary" @click="openModal">ADD ITEM</v-btn>
    <v-dialog v-model="showDialog" width="500">
      <v-card width="450">
        <v-card-title class="headline">Add Activity</v-card-title>
        <v-card-text>
          <v-text-field label="Id" v-model="id"></v-text-field>
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-text-field label="DueDate" v-model="dueDate"></v-text-field>
          <v-checkbox v-model="completed" :label="`Checkbox is : ${completed.toString()}`"></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="addActivity">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: [
    'activities'
  ],
  data: () => ({
    showDialog: false,
      id: 0,
    title: "",
    dueDate: "2022-05-19T10:09:51.312Z",
    completed: false,
  }),
  methods: {
    openModal() {
      this.showDialog = true;
    },
    addActivity() {
      this.activities.push({id: this.id, title: this.title, dueDate: this.dueDate, completed: this.completed})
      this.title = null
      this.completed = false
    },
  },
};
</script>