<template>
  <div class="container">
    <div
      class="flex flex-wrap justify-center md:justify-between wrapper my-32 md:my-128"
    >
    <router-link to="/website-maken" class="bg-white usp card">
        <v-icon
          size="75"
          class="
            text-main
            cursor-pointer
            w-full
          "
          >mdi-lightning-bolt</v-icon
        >
        <h2>  {{ getPostAcfValue(post, "usp1header") }}</h2>
        <p    v-html="getPostAcfValue(post, 'usp1text')">
        </p>
    </router-link>
       <router-link to="/website-maken" class="bg-white usp card">
        <v-icon
          size="75"
          class="
            text-main
            cursor-pointer
            w-full
          "
          >mdi-vuejs</v-icon
        >
        <h2>  {{ getPostAcfValue(post, "usp2header") }}</h2>
        <p v-html="getPostAcfValue(post, 'usp2text')"> </p>
        </router-link>
       <router-link to="/website-maken" class="bg-white usp card">
        <v-icon
          size="75"
          class="
            text-main
            cursor-pointer
            w-full
          "
          >mdi-draw</v-icon
        >
        <h2>  {{ getPostAcfValue(post, "usp3header") }}</h2>
        <p v-html="getPostAcfValue(post, 'usp3text')"> </p>
        </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Usp/usp.scss"></style>
<script src="@/components/Usp/usp.ts"></script>
