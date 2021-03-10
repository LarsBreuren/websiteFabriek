import { Component, Vue } from "vue-property-decorator";
import BuildWebsiteHeader from "@/components/BuildWebsiteHeader/BuildWebsiteHeader.vue";
import BigQuote from "@/components/BigQuote/BigQuote.vue";
import FullWidthImage from "@/components/FullWidthImage/FullWidthImage.vue";
import OurWork from "@/components/OurWork/OurWork.vue";
import Proces from "@/components/Proces/Proces.vue";

@Component({
  components: {
    BuildWebsiteHeader,
    BigQuote,
    FullWidthImage,
    OurWork,
    Proces,
  }
})
export default class WebsiteMaken extends Vue {
  public $pageTitle = 'Websitemaken';

  public imagelink1 = "website.jpg";
}




