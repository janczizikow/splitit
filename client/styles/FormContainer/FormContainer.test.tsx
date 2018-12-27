import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import FormContainer from "./FormContainer";

describe("<FormContainer />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<FormContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
