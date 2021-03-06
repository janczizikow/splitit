import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Col from "./Col";
import theme from "../../utils/theme";

describe("<Col />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Col />);
    expect(wrapper).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const wrapper = mount(<Col theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
