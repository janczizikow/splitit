import React from "react";
import { DropdownTriggerStyles } from "../../styles/Dropdown";

interface Props {
  onToggle: () => void;
}

const DropdownTrigger: React.FunctionComponent<Props> = ({
  onToggle,
  ...rest
}) => <DropdownTriggerStyles type="button" onClick={onToggle} {...rest} />;

export default DropdownTrigger;
