<template>
  <div>
    <BuildWebsiteHeader> </BuildWebsiteHeader>
    <!-- <BuildWebsiteIntro> </BuildWebsiteIntro> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BuildWebsiteHeader from "@/components/BuildWebsiteHeader/BuildWebsiteHeader.vue";
// import BuildWebsiteIntro from "@/components/BuildWebsiteIntro/BuildWebsiteIntro.vue";
@Component({
  components: {
    BuildWebsiteHeader,
    // BuildWebsiteIntro,
  }
})
export default class About extends Vue {}
</script>
