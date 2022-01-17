<template>
  <div class="card">
    <div
      class="card-header border border-dark mb-3"
      v-for="user in users"
      :key="user.id"
    >
      <router-link :to="{ name: 'user-show', params: { id: user.id } }">
        {{ user.name }}
      </router-link>
      <div class="card-body" v-if="user.posts">
        <p>posts</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    users: Array,
  },
};
</script>