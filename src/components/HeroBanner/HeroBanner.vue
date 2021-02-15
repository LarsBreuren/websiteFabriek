<template>
  <div class="container">
    <div
      class=" p-16 sm:p-0 w-full mx-auto flex justify-between items-center bg-white wrapper"
    >
      <div class="overlay"></div>
      <div class="w-1/3 lg:flex justify-center pill1">
        <div class=" bg-main vertical-pill "></div>
      </div>
      <div class=" lg:w-1/3 flex flex-wrap justify-center flex-grow">
        <h1
          class="text-center uppercase font-bold text-white sm:text-header text-4xl md:text-6xl"
        >
           <h1 v-html="data.Header"></h1>
        </h1>

        <div class="w-full text-center mt-16">
          <p class="subtitle font-normal">{{ data.subtitle }}</p>
        </div>
        <router-link to="/">
          <div class="ctaButton mt-16">{{ data.button_text }}</div>
        </router-link>
      </div>
      <div class=" lg:w-1/3 flex justify-end lg:justify-center">
        <div class=" bg-main pill2 vertical-pill"></div>
      </div>
    </div>
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@/components/HeroBanner/hero-banner.scss"
></style>
<script src="@/components/HeroBanner/hero-banner.ts"></script>