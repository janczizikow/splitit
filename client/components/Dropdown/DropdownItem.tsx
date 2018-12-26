import React from "react";
import DropdownContext from "./DropdownContext";
import { DropdownItemStyles } from "../../styles/Dropdown";

const DropdownItem = ({ ...rest }) => (
  <DropdownContext.Consumer>
    {({ onToggle }) => <DropdownItemStyles onClick={onToggle} {...rest} />}
  </DropdownContext.Consumer>
);

export default DropdownItem;
