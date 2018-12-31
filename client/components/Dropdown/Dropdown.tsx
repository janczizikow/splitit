import React from "react";
import onClickOutside from "react-onclickoutside";
import DropdownTrigger from "./DropdownTrigger";
import DropdownMenu from "./DropdownMenu";
import DropdownContext from "./DropdownContext";
import { DropdownStyles } from "../../styles/Dropdown";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  open: boolean;
}
class Dropdown extends React.PureComponent<Props, State> {
  state = {
    open: false
  };

  handleClickOutside = (_: React.SyntheticEvent) => {
    this.setState({
      open: false
    });
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 27) {
      this.setState({
        open: false
      });
    }
  };

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { title, children, ...props } = this.props;
    const { open } = this.state;

    return (
      <DropdownContext.Provider value={{ open, onToggle: this.toggle }}>
        <DropdownStyles {...props} onKeyDown={this.handleKeyDown}>
          <DropdownTrigger onToggle={this.toggle}>{title}</DropdownTrigger>
          <DropdownMenu show={open}>{children}</DropdownMenu>
        </DropdownStyles>
      </DropdownContext.Provider>
    );
  }
}

export default onClickOutside(Dropdown);
