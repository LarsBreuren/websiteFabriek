
import { Component, Vue, } from 'vue-property-decorator';

@Component<PriceList>({})
export default class PriceList extends Vue {

  protected projects = [
    { name: "benb" },
    { name: "praktijk" },
    { name: "torbay" },
    { name: "arjan" },
  ];
}

