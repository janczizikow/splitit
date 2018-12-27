import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Row from "./Row";

describe("<Row />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const wrapper = mount(<Row />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
