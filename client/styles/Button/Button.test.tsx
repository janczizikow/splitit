import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./Button";

describe("<Button />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Button />);
  });

  it("matches snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("changes styles with block prop", () => {
    wrapper.setProps({ block: true });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
