<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message(enter to add):</label>
      <input type="text" name="new-message" v-model="message">
      <p class="red-text" v-if="feedback">{{feedback}}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Message",
  props: ["name"],
  data() {
    return {
      message: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.message) {
        db.collection("messages")
          .add({
            content: this.message,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.message = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a message in order to send it";
      }
    }
  }
};
</script>
