import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Website/Footer/Footer.vue";
import Navigation from "@/components/Website/Navigation/Navigation.vue";
import axios from "axios";

@Component({
  components: {
    Footer,
    Navigation
  }
})
export default class App extends Vue {
  protected isLoading = true;

  async mounted() {
    this.initData();
  }

  protected async initData() {
    try {
      await axios
        .get("https://website-fabriek.online/wp-json/markers/v1/post")
        .then(response => {
          this.$store.dispatch("setPosts", response.data);
        });
    } catch (err) {
      console.log(err);
    }
    this.isLoading = false;
  }
}
