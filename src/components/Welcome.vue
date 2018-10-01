<template>
<!-- Main container -->
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <!-- chat forma -->
        <form @submit.prevent="enterChat">
          <label for="name">Enter Your name</label>
          <input type="text" name="name" v-model="name" >
          <!-- Feedback jei "name" tuscias -->
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter chat</button>
        </form>
      </div>
    </div>
  </div> <!--END Main container -->
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "You must enter a name";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
</style>
