<template>
    <div class="w-3/4 p-16 sm:p-0 sm:w-full mx-auto flex justify-between items-center bg-white wrapper">
        <div class="w-1/3 lg:flex justify-center pill1">
            <div class=" bg-secondary-500 vertical-pill "></div>
        </div>
        <div class=" lg:w-1/3 flex flex-wrap justify-center flex-grow">
            <h1 class="text-center font-bold text-header text-4xl md:text-6xl">Simpel.<br>
                Effectief.<br>
                Voordelig.
            </h1>
           <div class="w-full text-center mt-16"> <p> Waarom zou je het anders willen? </p></div>
         <router-link to="/">
            <div class="ctaButton mt-16">Zo'n website wil ik!</div>
        </router-link>
        </div>
        <div class=" lg:w-1/3 flex justify-end lg:justify-center">
            <div class=" bg-secondary-500  pill2 vertical-pill"></div>
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