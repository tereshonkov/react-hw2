import ModalWrapper from "./ModalWrapper";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe('ModalWrapper render', () => {
    test('should render ModalWrapper on page', () => {
        render( <Provider store={store}><ModalWrapper>Hello</ModalWrapper></Provider>);

        const wrapper = screen.getByText('Hello');
        fireEvent.click(wrapper);

        expect(wrapper).toBeInTheDocument();
    })
})