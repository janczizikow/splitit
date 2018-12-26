import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import { DropdownMenuStyles } from "../../styles/Dropdown";

interface Props {
  show: boolean;
}

const DropdownMenu: React.FunctionComponent<Props> = ({ show, ...props }) => (
  <CSSTransition in={show} unmountOnExit timeout={300} classNames="dropdown">
    <DropdownMenuStyles role="menu" {...props} />
  </CSSTransition>
);

export default DropdownMenu;
