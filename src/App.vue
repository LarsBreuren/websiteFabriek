<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";
import Navigation from "@/components/Navigation/Navigation.vue";
@Component({
  components: {
    Footer,
    Navigation
  }
})
export default class Home extends Vue {
  mounted() {
    this.initData();
  }
  protected initData() {
    this.$store.dispatch("getPosts");
  }
}
</script>

<!-- on created -> getter die data verkijgt 
     this.allData.post
-->
