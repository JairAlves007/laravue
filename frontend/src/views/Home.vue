<template>
  <div class="home">
    <Card :users="users" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      await this.$axios
        .get("/users")
        .then((response) => (this.users = response.data));
    },
  },
  created() {
    this.getUsers();
  },
};
</script>
