import PostInterface from "@/interfaces/post";
import { Component, Vue } from "vue-property-decorator";
import getPostByPostName from "../support/getPostByPostName";

@Component({})
export default class CasesOverview extends Vue {
  protected get post(): PostInterface | undefined {
    return getPostByPostName(this.$store.getters.posts, "cases");
  }
  protected getPostAcfValue(post: PostInterface | undefined, key: string): any {
    return post && post.acf && (post.acf as Record<string, any>)[key]
      ? (post.acf as Record<string, any>)[key]
      : "Probleem met content laden";
  }

}