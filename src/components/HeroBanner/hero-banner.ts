import PostInterface from "@/interfaces/post";
import { Component, Vue } from "vue-property-decorator";
import getPostByPostName from "../support/getPostByPostName";

@Component({})
export default class Headless extends Vue {
  protected data = [];

  protected get post(): PostInterface | undefined {
    return getPostByPostName(this.$store.getters.posts, "herobanner");
  }
  // protected get usp(): PostInterface | undefined { als je een andere group moet benaderen
  //   return getPostByPostName(this.$store.getters.posts, "usp");
  // }
}
