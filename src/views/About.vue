<template>
  <div>
    <PortfolioHeader> </PortfolioHeader>
    <PortfolioOverview> </PortfolioOverview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PortfolioOverview from "@/components/PortfolioOverview/PortfolioOverview.vue";
import PortfolioHeader from "@/components/PortfolioHeader/PortfolioHeader.vue";
@Component({
  components: {
    PortfolioOverview,
    PortfolioHeader
  }
})
export default class About extends Vue {}
</script>
