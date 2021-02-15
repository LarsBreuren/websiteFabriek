<template>
  <div class="hello">
    <h1>{{ fetchPosts[0].acf.Header }}</h1>
    <div v-for="post in fetchPosts" :key="post.id">
      <h3>Post Body:</h3>
      <img :src="fetchPosts[0].acf.left_image.url" />
    </div>
  </div>
</template>

<script src="@/components/Headless/head-less.ts"></script>
