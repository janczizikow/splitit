const Z_INDEX = {
  base: 1,
  header: 2,
  dropdown: 3
};

const getZIndex = (name: "base" | "header" | "dropdown") => {
  return Z_INDEX[name] || Z_INDEX.base;
};

export default getZIndex;
