<template>
  <div class="chat container">
    <h2 class="center teal-text">Real time chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <Message :name="name" />
      </div>
    </div>
  </div>
</template>


<script>
import Message from "@/components/Message";
import db from "@/firebase/init";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    Message
  },
  data() {
    return {};
  },
  created() {
    let ref = db.collection("messages");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges();
    });
  }
};
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}

.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 1.2em;
}
</style>
