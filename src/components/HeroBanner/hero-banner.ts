import PostInterface from "@/interfaces/post";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Headless extends Vue {
  protected data = [];

  protected get posts(): PostInterface[] | null {
    return this.$store.getters.posts;
  }
  protected get heroBanner(): PostInterface | undefined {
    if (!this.posts) {
      return undefined;
    }
    return this.posts.find(
      (post: PostInterface): boolean => post.post_name === "herobanner"
    );
  }
}
