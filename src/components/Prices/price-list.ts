
import { Component, Vue, } from 'vue-property-decorator';

@Component<PriceList>({})
export default class PriceList extends Vue {


    protected toggleClass(){
      console.log('heya');
    }

  // protected mounted(): void {
  
  // }

  protected websiteComplete = {
    "Website design": "Kies je Website Design, ontwikkeld door onze eigen vormgevers. Binnen jouw gekozen Design wordt de Website op maat gemaakt door onze vormgever. We maken eerst een Ontwerpvoorstel zodat we zeker weten dat de Website aan jouw wensen voldoet! ",
    "Website Pagina's": "Wij ontwikkelen max. 10 pagina’s voor jouw Website. ",
};


}

