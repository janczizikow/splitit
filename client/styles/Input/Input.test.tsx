import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Input from "./Input";
import theme from "../../utils/theme";

describe("<Input />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Input theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
