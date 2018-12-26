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

const gridGutters = 16;
const gridColumns = 12;
const gridBreakpoints = [0, 576, 768, 992, 1200];

export interface Theme {
  colors: typeof colors;
  borderRadius: number;
  gridGutters: number | string;
  gridColumns: number;
  gridBreakpoints: number[];
}

export default {
  colors,
  borderRadius,
  gridGutters,
  gridColumns,
  gridBreakpoints
};
