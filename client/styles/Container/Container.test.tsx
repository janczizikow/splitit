import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Container from "./Container";

describe("<Container />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Container />);
  });

  it("matches snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("changes styles with fluid prop", () => {
    wrapper.setProps({ fluid: true });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
