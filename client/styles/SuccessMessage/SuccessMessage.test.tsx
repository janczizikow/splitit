import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import SuccessMessage from "./SuccessMessage";
import theme from "../../utils/theme";

describe("<SuccessMessage/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SuccessMessage />);
    expect(wrapper).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const wrapper = mount(<SuccessMessage theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
