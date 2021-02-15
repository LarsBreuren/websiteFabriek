import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Headless extends Vue {
  protected get fetchPosts() {
    return this.$store.state.posts;
  }
}
