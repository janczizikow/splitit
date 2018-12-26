import React from "react";

const DropdownContext = React.createContext({
  open: false,
  onToggle: () => {}
});

export default DropdownContext;
