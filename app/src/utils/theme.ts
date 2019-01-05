const colors = {
  primary: "#00ccbb",
  error: "#ff483b",
  errorBg: "#ffebe4",
  success: "#006d68",
  successBg: "#edfad0",
  border: "#bac3c3",
  greyBg: "#f9fafa",
  lightGreyBg: "#f5f5f5",
  headingColor: "#2e3333"
};

const borderRadius = 2;

export interface Theme {
  colors: typeof colors;
  borderRadius: number;
}
export default {
  colors,
  borderRadius
};
