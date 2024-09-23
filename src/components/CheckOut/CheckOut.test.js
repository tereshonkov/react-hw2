import { Provider } from "react-redux";
import CheckOut from "./index";
import { render } from "@testing-library/react";
import store from "../../redux/store";

describe("Footer text render", () => {
  test("should render the copyright text", () => {
    const { asFragment } = render(
      <Provider store={store}>
        {" "}
        <CheckOut />{" "}
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
