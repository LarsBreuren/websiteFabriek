


  <template>
    <div id="app">
     <h1>Welkom, onderstaande namen worden via Wordpress opgehaald:</h1> 
      <div v-if="!isLoading">
        <ul v-for="(person, index) in data" :key="index">
          <li>
            {{ person.post_name }}
           <img style="max-width:200px" v-bind:src="person.acf.image.url" /> 
          </li>
        </ul>
        {{ data.id }}
      </div>
    </div>
  </template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// eslint-disable-next-line no-unused-vars
import axios, { AxiosResponse } from "axios";

@Component({
  components: {}
})
export default class App extends Vue {
  protected data = [];
  protected isLoading = true;

  mounted() {
    this.initialize();
  }

  protected async initialize() {
    await this.getData();
    this.isLoading = false;
  }

  protected async getData() {
    axios
      .get("https://website-fabriek.online/index.php/wp-json/markers/v1/post")
      .then((response: AxiosResponse) => {
        this.data = response.data;
        console.log("regf", this.data);
      });
  }
}
</script>

<style
  scoped
  lang="scss"
  src="@/components/HeroBanner/hero-banner.scss"
></style>
