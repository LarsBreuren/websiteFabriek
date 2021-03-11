import PostInterface from "@/interfaces/post";
import { Component, Vue } from "vue-property-decorator";
import getPostByPostName from "../support/getPostByPostName";

@Component({})
export default class Headless extends Vue {
  protected steps = [
    { number: "1", title: "Vormgevingsgesprek", text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor.",
    icon: "notebook-edit-outline", show: false },
    { number: "2", title: "1e opzet", text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor.",
    icon: "notebook-edit-outline", show: false },
    { number: "3", title: "Aanpassen", text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    icon: "notebook-edit-outline", show: false },
  ];
  protected steps2 = [
    { number: "4", title: "Vormgevingsgesprek", text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor.",
    icon: "notebook-edit-outline", show: false },
    { number: "5", title: "1e opzet", text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor.",
    icon: "notebook-edit-outline", show: false },
    { number: "6", title: "Aanpassen", text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    icon: "notebook-edit-outline", show: false },
  ];

  protected initLoad(){
    this.steps.forEach((step, idx) => {
      this.delayLoad(step, idx)
    })
    this.initLoad2();
  }

  protected initLoad2(){
    // this.steps2.forEach((step, idx) => {
    //   this.delayLoad(step, idx)
    // })
    console.log('done!')
  }

  protected delayLoad(step: any, idx: any){
      const delay = 1000 * idx
      setTimeout(() => {
        step.show = true
      }, delay)
  }
}