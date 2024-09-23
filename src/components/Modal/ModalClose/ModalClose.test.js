import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./ModalClose";
import { Provider, useDispatch } from "react-redux";
import { setIsShow } from "../../../redux/slices/modalSlices";
import store from "../../../redux/store";

const Component = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Modal />
    </>
  );
};

describe("Open Modal", () => {
  test("should render modal", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Component />
      </Provider>
    );

    const div = screen.getByTestId('close')
    fireEvent.click(div);

    expect(asFragment()).toMatchSnapshot();
  });
});
