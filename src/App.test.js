
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// beforeAll(()  => {
//   console.log("Running before all tests");
// }
// )

// beforeEach(()  => {
//   console.log("Running before each test");
// }
// )

test('renders hello world text', () => {
  console.log("first test");
  render(<App />);
  const helloText = screen.getByText(/hello world/i);
  expect(helloText).toBeInTheDocument();
});

// Input field 
test('renders input field and placeholder', () => {
  console.log("second test");
  render(<App />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("placeholder", "Type here...");
});

// Input change 
test("input updates on change", () => {
  console.log("third test");
  render(<App />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: "aa" } });
  expect(input.value).toBe("aa");
});

// Button click 
test("button click updates heading", () => {
  console.log("fourth test");
  render(<App />);
  const button = screen.getByText("Click Me");
  fireEvent.click(button);
  const result = screen.getByText("update data");
  expect(result).toBeInTheDocument();
});

// Grouped 
describe("Grouped tests", () => {
  console.log("Grouped tests");
  test("textbox is rendered", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("button is rendered", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
  });
});

// async form submission
test("form submission shows loading and success message", async () => {
  console.log("fifth test");
  render(<App />);
  const submitBtn = screen.getByText("Submit");
  fireEvent.click(submitBtn);

  const loadingText = screen.getByRole("status");
  expect(loadingText).toHaveTextContent("Loading...");

  const successMessage = await screen.findByText("Form submitted!", {}, { timeout: 2000 });
  expect(successMessage).toBeInTheDocument();
});

test("snapshot for app component", () => {
  console.log("sixth test");
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});

// afterAll(() => {  
//   console.log("Running after all tests");
// }
// );

// afterEach(() => {
//   console.log("Running after each test");
// }
// );