import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./ModalText";
import { Provider, useDispatch } from "react-redux";
import { setIsShow } from "../../redux/slices/modalSlices";
import store from '../../redux/store';

const Component = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Modal  />
      <button
        onClick={() => {
          dispatch(setIsShow(true));
        }}
      >
        Open
      </button>
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

    const btn = screen.getByText("Open");
    fireEvent.click(btn);

    const wrapper = screen.getByTestId("wrapper");

    expect(wrapper).toBeInTheDocument();
  });
});

describe("Close Modal", () => {
  test("should render modal", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Component />
      </Provider>
    );

    const wrapper = screen.queryByTestId("wrapper");
    fireEvent.click(wrapper);

    expect(wrapper).not.toBeInTheDocument();
  });
});
