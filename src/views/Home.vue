<template>
  <div>
    <HeroBanner></HeroBanner>
    <Usp></Usp>
    <OurWork></OurWork>
    <Success></Success>
    <Prices></Prices>
    <Headless> </Headless>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroBanner from "@/components/HeroBanner/HeroBanner.vue";
import Usp from "@/components/Usp/Usp.vue";
import OurWork from "@/components/OurWork/OurWork.vue";
import Success from "@/components/Success/Success.vue";
import Prices from "@/components/Prices/Prices.vue";
import Headless from "@/components/Headless/Headless.vue";
@Component({
  components: {
    HeroBanner,
    Usp,
    OurWork,
    Success,
    Prices,
    Headless
  }
})
export default class Home extends Vue {}
</script>
