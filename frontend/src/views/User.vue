<template>
  <div class="container mt-3 p-2">
    <CardPost :userPosts="userPosts" />
  </div>
</template>

<script>
import CardPost from "../components/CardPost.vue";

export default {
  name: "User",
  components: {
    CardPost,
  },
  data() {
    return {
      userPosts: [],
    };
  },
  computed: {
    userId() {
      const userId = this.$route.params.id;

      return userId;
    },
  },
  methods: {
    async getUserPosts() {
      await this.$axios
        .get(`/users/${this.userId}`)
        .then((response) => (this.userPosts = response.data));
    },
  },
  created() {
    this.getUserPosts();
  },
};
</script>