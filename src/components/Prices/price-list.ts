
import { Component, Vue, } from 'vue-property-decorator';

@Component<PriceList>({})
export default class PriceList extends Vue {

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
    "Huisstijl": "Onze designer gaat aan de slag om voor u een perfect design neer te zetten",
    "Foto/video": "Indien gewenst kunnen wij u helpen met fotografie/video",
    "Headless CMS": "Het razendsnelle Vue.JS framework wordt gekoppeld aan een wordpress headless CMS. Hierdoor kan jij eenvoudig je teksten aanpassen terwijl de website zo snel mogelijk is.",
    "Website Pagina's": "Op maat",
    "Website livezetservice": "Wij helpen je graag je website online te zetten op jouw gekozen domeinnaam.",
    "Snel": "jouw website is slim ontwikkeld en draait razendsnel.",
    "Persoonlijk": "Graag gaan we met je in gesprek over je wensen, eventueel kunnen we bij je langskomen.",
};


}

