import PostInterface from "@/interfaces/post";
import { Component, Vue } from "vue-property-decorator";
import getPostByPostName from "../support/getPostByPostName";

@Component({})
export default class Headless extends Vue {
  protected data = [];

  protected get post(): PostInterface | undefined {
    return getPostByPostName(this.$store.getters.posts, "herobanner");
  }
  protected getPostAcfValue(post: PostInterface | undefined, key: string): any {
    return post && post.acf && (post.acf as Record<string, any>)[key]
      ? (post.acf as Record<string, any>)[key]
      : "Oeps";
  }
  protected get usp(): PostInterface | undefined {
    return getPostByPostName(this.$store.getters.posts, "usp");
  }
}