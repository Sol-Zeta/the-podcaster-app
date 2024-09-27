import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Button onClick={() => {}}>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const mockOnClick = vi.fn();
    const { getByRole } = render(
      <Button onClick={mockOnClick}>Click me</Button>
    );

    fireEvent.click(getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
