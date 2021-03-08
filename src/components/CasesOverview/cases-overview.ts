import PostInterface from "@/interfaces/post";
import { Component, Vue } from "vue-property-decorator";
import getPostByCategory from "../support/getPostByCategory";

@Component({})
export default class PortfolioOverview extends Vue {
  protected get post(): PostInterface[] | undefined {
    return getPostByCategory(this.$store.getters.posts, "Case thumbnail");
  }


  protected getPostAcfValue(post: PostInterface | undefined, key: string): any {
    return post && post.acf && (post.acf as Record<string, any>)[key]
      ? (post.acf as Record<string, any>)[key]
      : "Probleem met content laden";
  }
}