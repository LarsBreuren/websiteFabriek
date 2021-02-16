<template>
  <div id="app">
    <Navigation></Navigation>
    <div
      v-if="isLoading"
      class="w-1/5 tw-h-screen tw-items-center tw-bg-primary-100"
    >
      AAN HET LADEN
      <!-- <img
        alt="WebsiteFabriek"
        class="tw-bg-white tw-p-32 tw-rounded-xl"
        :src="require('@/assets/images/features/maatwerk.jpg')"
      /> -->
    </div>
    <div v-if="!isLoading">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" src="@/App.ts"></script>
