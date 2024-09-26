import { render, screen } from "@testing-library/react";
import App from "../App.tsx";

test("renders react heading", () => {
  render(<App />);
  const headerElement = screen.getByText('Podcaster');
  expect(headerElement).toBeInTheDocument();
});
