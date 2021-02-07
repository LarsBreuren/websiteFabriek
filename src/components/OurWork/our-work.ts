import { Component, Vue } from "vue-property-decorator";

@Component<PriceList>({})
export default class PriceList extends Vue {

  protected projects = ["benb", "praktijk", "torbay", "arjan"];

  protected getImgUrl(project: string) {
    return require("../../assets/images/portfolio/" + project + "-desktop.png");
  }
  protected getImgUrlMobile(project: string) {
    return require("../../assets/images/portfolio/" + project + "-mobile.png");
  }
}

