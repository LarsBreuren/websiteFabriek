<template>
  <div class="container">
    <!-- <HelloWorld msg="This is the beginning" /> -->
    <HeroBanner></HeroBanner>
    <Usp></Usp>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import HeroBanner from "@/components/HeroBanner/HeroBanner.vue";
import Usp from "@/components/Usp/Usp.vue";

@Component({
  components: {
    HelloWorld,
    HeroBanner,
    Usp
  }
})
export default class Home extends Vue {}
</script>
