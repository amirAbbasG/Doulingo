declare module "@/assets/images/*" {
  import type { ImageSource } from "expo-image";

  const source: ImageSource;
  export default source;
}

declare module "@/assets/fonts/*" {
  const font: number;
  export default font;
}
