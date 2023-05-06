type BannerModel = {
  text1: string,
  text2?: string,
  type: "origin" | "textBox" | "glitch" | "luminance" | "typeWriter" | "rainbow",
  width: number,
  height: number,
}

export default BannerModel;