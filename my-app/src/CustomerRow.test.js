import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';

describe("testing customer row", () => {
    let callback = jest.fn(); //mock function
    let c = {
        "id" : 10,
        "firstName" : "Amy",
        "lastName" : "Bach"
    };

    it("render customer row in isolation", () => {
        render(<CustomerRow customer={c} key={c.id} delEvent={(id) => callback(id)}/ >);
        let elem = screen.getByText(/Amy/i);
        screen.debug();
        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(10);
    })
});
