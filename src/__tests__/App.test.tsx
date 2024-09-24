import { render, screen } from "@testing-library/react";
import App from "../App.tsx";

test("renders react heading", () => {
  render(<App />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toHaveTextContent(/react/i);
});
