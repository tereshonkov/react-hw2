import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button render', () => {
    test('should render button on page', () => {
        render(<Button type={'button'}>Hello</Button>);

        const btn = screen.getByText('Hello');

        expect(btn).toBeInTheDocument();
    })
    test('should Button onClick works', () => {
        const handleClick = jest.fn();

        render(<Button type={'button'} onClick={handleClick}>Hello</Button>);

        const button = screen.getByText('Hello');
        fireEvent.click(button);

        expect(handleClick).toBeCalled();
    })
})