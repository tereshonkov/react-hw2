import Footer from "./index";
import { render, screen } from "@testing-library/react";

describe("Footer text render", () => {
  test("should render the copyright text", () => {
    const { asFragment } = render(<Footer />);

    const paragraph = screen.getByText(
      "Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved."
    );
    expect(paragraph).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
