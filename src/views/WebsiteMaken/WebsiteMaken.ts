import { Component, Vue } from "vue-property-decorator";
import BuildWebsiteHeader from "@/components/BuildWebsiteHeader/BuildWebsiteHeader.vue";
import BigQuote from "@/components/BigQuote/BigQuote.vue";
@Component({
  components: {
    BuildWebsiteHeader,
    BigQuote,
  }
})
export default class WebsiteMaken extends Vue {
  public $pageTitle = 'Websitemaken';
}




