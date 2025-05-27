import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkPara = screen.getByText(/Hello World/i)
  expect(linkPara).toBeInTheDocument();
});


test('renders input field', () => {
  render(<App />);
  const inputElement = screen.getByRole("textbox");
  const placeholderText = screen.getByPlaceholderText("Type here...");
  expect(inputElement).toBeInTheDocument();
  expect(placeholderText).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", "username");
});


// grouping test case 
describe("grouping test case" , ()=> {
  test("first test case", ()=> {
    render(<App />);
    const linkPara = screen.getByText(/Hello World/i);
    expect(linkPara).toBeInTheDocument();
  })

   test("2 test case", ()=> {
    render(<App />);
    const linkPara = screen.getByRole("textbox");
    expect(linkPara).toHaveAttribute("name", "username");
  })

})