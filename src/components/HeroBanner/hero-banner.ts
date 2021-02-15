import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Headless extends Vue {

  protected data = [];

  public mounted() {
    this.data = this.$store.state.posts.HeroBanner.acf;
  }
  protected get fetchPosts() {
    return 
  }
}