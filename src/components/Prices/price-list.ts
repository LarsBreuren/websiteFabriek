
import { Component, Vue, } from 'vue-property-decorator';

@Component<PriceList>({})
export default class PriceList extends Vue {

  protected urlPath = '';
  protected show = false;

    protected toggleClass(){
      console.log('heya');
    }

  // protected mounted(): void {
  
  // }

 
protected toggle(){
  console.log('yehaw')
  this.show = !this.show;
}
  // protected Tester(){
  //   const question = document.getElementsByClassName("question");
  // for (let i = 0; i < question.length; i++) {
  //   question[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     this.classList.toggle("text-green-700");
  //     const answer = this.nextElementSibling;
  //     if (answer.classList.contains("hidden")) {
  //       answer.classList.toggle("hidden");
  //     } else {
  //       answer.classList.toggle("hidden");
  //     }
  //   });
  //   }
  // }
}

