<template>
  <div class="card">
    <div class="card-header border border-dark mb-3" :key="userPosts.id">
      <h1>
        {{ userPosts.name }}
      </h1>
    </div>
    <div class="card-body" v-for="post in userPosts.posts" :key="post.id">
      <p>
        {{ post.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPost",
  props: {
    userPosts: Object,
  },
};
</script>