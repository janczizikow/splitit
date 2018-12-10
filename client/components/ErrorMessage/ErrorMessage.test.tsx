import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import ErrorMessage from "./ErrorMessage";
import theme from "../../utils/theme";

describe("<ErrorMessage/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const wrapper = mount(<ErrorMessage theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
