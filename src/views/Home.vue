<template>
  <div class="container">
    <!-- <HelloWorld msg="This is the beginning" /> -->
    <HeroBanner></HeroBanner>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import HeroBanner from "@/components/HeroBanner/HeroBanner.vue";

@Component({
  components: {
    HelloWorld,
    HeroBanner,
  }
})
export default class Home extends Vue {}
</script>
