import ImageInterface from "./image";

export default interface AcfInterface {
  Header?: string;
  left_image?: ImageInterface;
  right_image?: ImageInterface;
  subtitle?: string;
  button_text?: string;
  header2?: string;
}
