<template>
  <div>
    <!-- <HelloWorld msg="This is the beginning" /> -->
    <HeroBanner></HeroBanner>
    <Usp></Usp>
    <OurWork></OurWork>
    <Success></Success>
    <Prices></Prices>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import HeroBanner from "@/components/HeroBanner/HeroBanner.vue";
import Usp from "@/components/Usp/Usp.vue";
import OurWork from "@/components/OurWork/OurWork.vue";
import Success from "@/components/Success/Success.vue";
import Prices from "@/components/Prices/Prices.vue";

@Component({
  components: {
    HelloWorld,
    HeroBanner,
    Usp,
    OurWork,
    Success,
    Prices
  }
})
export default class Home extends Vue {}
</script>
