
import { Component, Vue, } from 'vue-property-decorator';

@Component<PriceList>({})
export default class PriceList extends Vue {

  // protected mounted(): void {
  
  // }

  protected websiteComplete = {
    "Website design": "Een complete website aansluitend op jouw wensen",
    "Website Pagina's": "Tot 10 pagina's inbegrepen.",
    "Website livezetservice": "Wij helpen je graag je website online te zetten op jouw gekozen domeinnaam.",
    "Snel": "jouw website is slim ontwikkeld en draait razendsnel.",
    "Persoonlijk": "Graag gaan we met je in gesprek over je wensen, digitaal of op locatie.",
};

  protected websiteLuxe = {
    "Website design op maat": "Het beste design voor jouw website, ontwikkeld door ervaren UX designers en vormgevers. Ontwikkeld door de beste developers.",
    "Huisstijl": "Een op maat gemaakte huisstijl voor de website wordt ontwikkeld.",
    "SEO": "Er wordt extra aandacht besteed jouw website te optimaliseren voor google. Belangrijk als je goed gevonden wilt worden.",
    "Foto/video": "Visuele content kan een enorme impact hebben op jouw online succes. Wij kunnen deze content voor je verzorgen.",
    "Headless CMS": "Het razendsnelle Vue.JS framework wordt gekoppeld aan wordpress. Hierdoor kan je eenvoudig teksten aanpassen, zelf op je mobiel. En je website blijft lekker snel. ",
    "Website Pagina's": "Aansluitend op de wensen.",
    "Website livezetservice": "Wij helpen je graag je website online te zetten op jouw gekozen domeinnaam.",
    "Persoonlijk": "Wij lopen dit traject persoonlijk met je door. Van de eerste schetsen tot de puntjes op de i.",
};


}

