<template>
  <div>
    <CasesHeader> </CasesHeader>
    <CasesOverview> </CasesOverview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CasesOverview from "@/components/CasesOverview/CasesOverview.vue";
import CasesHeader from "@/components/CasesHeader/CasesHeader.vue";
@Component({
  components: {
    CasesOverview,
    CasesHeader
  }
})
export default class About extends Vue {}
</script>
