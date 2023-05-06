type BadgeModel = {
  label?: string,
  message?: string,
  color?: string,
  logo?: string,
  style: "plastic" | "flat" | "flat-square" | "for-the-badge" | "social",
  logoColor?: string,
  logoWidth?: number,
  link?: string,
  labelColor?: string,
  cacheSeconds?: number,
}
export default BadgeModel;