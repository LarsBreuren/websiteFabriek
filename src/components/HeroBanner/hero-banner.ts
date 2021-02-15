import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class HeroBanner extends Vue {    
  protected get fetchPosts() {
    return this.$store.state.post;
  }
}

