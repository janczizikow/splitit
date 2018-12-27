import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import FormGroup from "./FormGroup";

describe("<FormGroup/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<FormGroup />);
    expect(wrapper).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const wrapper = mount(<FormGroup />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
