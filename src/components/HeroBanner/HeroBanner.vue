<template>
    <div class="flex justify-around items-center bg-white wrapper">
        <div class="w-1/3 flex justify-center">
            <div class="w-2/3 bg-secondary-500 vertical-pill"></div>
        </div>
        <div class="w-1/3 flex flex-wrap justify-center">
            <h1 class="text-center font-bold text-6xl">Simpel.<br>
                Effectief.<br>
                Voordelig.
            </h1>
           <div class="w-full text-center mt-16"> <p> Waarom zou je het anders willen?? </p></div>
        </div>
        <div class="w-1/3 flex justify-center ">
            <div class="w-2/3 bg-secondary-500 darth vertical-pill"></div>
        </div>


    </div>
  </template>
  
  <script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class HeroBanner extends Vue {
  }
  </script>


  <style scoped lang="scss" src="@/components/HeroBanner/hero-banner.scss"></style>