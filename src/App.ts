import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";
import Navigation from "@/components/Navigation/Navigation.vue";
import axios from "axios";

@Component({
  components: {
    Footer,
    Navigation
  }
})
export default class App extends Vue {

  protected isLoading = true;
  protected testie = '';

  async mounted() {
    this.initData(); 
  }

  protected async initData() {
    try{
        const result = await axios.get('https://website-fabriek.online/wp-json/markers/v1/post');
        this.$store.dispatch('getPosts', result.data);
    }
    catch (err) {
        console.log(err);
    }
    this.isLoading = false;
  }
}