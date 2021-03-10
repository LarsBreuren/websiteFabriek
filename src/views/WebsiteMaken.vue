<template>
  <div>
    <BuildWebsiteHeader> </BuildWebsiteHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BuildWebsiteHeader from "@/components/BuildWebsiteHeader/BuildWebsiteHeader.vue";
@Component({
  components: {
    BuildWebsiteHeader,
  }
})
export default class About extends Vue {}
</script>
