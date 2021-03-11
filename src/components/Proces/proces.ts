import { Component, Vue } from "vue-property-decorator";
import checkView from 'vue-check-view';

Vue.use(checkView)

@Component({})
export default class Headless extends Vue {
  protected steps = [
    { number: "1", title: "Vormgevingsgesprek", text: "Bespreek je wensen met de developers/ontwerpers.",
    icon: "notebook-edit-outline", show: false},
    { number: "2", title: "1e opzet", text: "Op basis van je eisen & wensen is er een 1e opzet gemaakt door de ontwerpers.",
    icon: "notebook-edit-outline", show: false },
    { number: "3", title: "Aanpassen", text: "Indien nodig sturen we het design bij",
    icon: "notebook-edit-outline", show: false },
    { number: "4", title: "Content", text: "We plaatsen de geleverde content",
    icon: "notebook-edit-outline", show: false },
    { number: "5", title: "Feedbackgesprek", text: "Nabespreking of alles naar wens is",
    icon: "notebook-edit-outline", show: false },
    { number: "6", title: "Live!", text: "Website gaat live!",
    icon: "notebook-edit-outline", show: false },
  ];

  protected loadSteps(){
    this.steps.forEach((step, idx) => {
      this.delayLoad(step, idx)
    })
  }

  protected delayLoad(step: any, idx: any){
      const delay = 500 * idx
      setTimeout(() => {
        step.show = true
      }, delay)
  }
}