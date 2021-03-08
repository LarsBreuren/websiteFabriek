import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Usp extends Vue {

  protected hamburger = false; 

  protected toggle() {
    this.hamburger = !this.hamburger
  }
  }
