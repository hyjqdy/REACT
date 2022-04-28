import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Customer application', () => {
  render(<App />); // <html><body><input ... 
  const h1 = screen.getByText(/Customer/i);
  expect(h1).toBeInTheDocument();
});

it("renders customers", () => {
  // render(<App />);
  // // screen.debug();
  // let btns = screen.queryAllByRole('button');
  // expect(btns.length).toBe(6);

  let {container} = render(<App/>);
  let btns = container.querySelectorAll('button');
  expect(btns.length).toBe(6);
});

it("delete a customer", () => {
  render(<App />);
  let btns = screen.queryAllByRole('button');
  fireEvent.click(btns[3]);
  btns = screen.queryAllByRole('button');
  expect(btns.length).toBe(5);
});


it("filter customers", () => {
  render(<App />);
  let txt = screen.getByPlaceholderText('search by name');
  fireEvent.change(txt, {"target": {"value": "Geller"}});
 let btns = screen.queryAllByRole('button');
  expect(btns.length).toBe(2);
});
