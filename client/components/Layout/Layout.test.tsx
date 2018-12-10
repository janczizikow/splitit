import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Layout from "./Layout";

describe("<Layout />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Layout children={<span>Child</span>} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
