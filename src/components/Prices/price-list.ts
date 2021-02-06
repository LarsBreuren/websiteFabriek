
import { Component, Vue, } from 'vue-property-decorator';

@Component<PriceList>({})
export default class PriceList extends Vue {


    protected toggleClass(){
      console.log('heya');
    }

  // protected mounted(): void {
  
  // }

  protected websiteComplete = {
    "Website design": "Een complete website + ontwerp. De website wordt op maat gemaakt aansluitend aan jouw wensen.",
    "Website Pagina's": "Tot 10 pagina's inbegrepen.",
    "Website livezetservice": "Wij helpen je graag je website online te zetten op jouw gekozen domeinnaam.",
    "Snel": "jouw website is slim ontwikkeld en draait razendsnel.",
    "Persoonlijk": "Graag gaan we met je in gesprek over je wensen, eventueel kunnen we bij je langskomen.",
};

  protected websiteLuxe = {
    "Website design op maat": "Het beste design voor jouw website, ontwikkeld door ervaren UX designers en vormgevers. Ontwikkeld door de beste developers",
    "Logo, huisstijl, video": "Indien nodig kunnen wij u helpen met fotografie/video, logo's en een huisstijl",
    "Headless CMS": "Het razendsnelle Vue.JS framework wordt gekoppeld aan een wordpress headless CMS. Hierdoor kan jij eenvoudig je teksten aanpassen terwijl de website zo snel mogelijk is.",
    "Website Pagina's": "Tot 15 pagina's inbegrepen.",
    "Website livezetservice": "Wij helpen je graag je website online te zetten op jouw gekozen domeinnaam.",
    "Snel": "jouw website is slim ontwikkeld en draait razendsnel.",
    "Persoonlijk": "Graag gaan we met je in gesprek over je wensen, eventueel kunnen we bij je langskomen.",
};


}

