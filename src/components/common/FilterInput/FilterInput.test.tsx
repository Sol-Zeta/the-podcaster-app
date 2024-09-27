import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FilterInput from "./index";

vi.mock("@/hooks/useDebouce", () => ({
  useDebounce: vi.fn((value) => value),
}));

describe("FilterInput", () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders with default placeholder", () => {
    render(<FilterInput onChange={mockOnChange} />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("renders with custom placeholder", () => {
    render(
      <FilterInput onChange={mockOnChange} placeholder="Custom placeholder" />
    );
    expect(
      screen.getByPlaceholderText("Custom placeholder")
    ).toBeInTheDocument();
  });

  it("displays results count when provided", () => {
    render(<FilterInput onChange={mockOnChange} resultsCount={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls onChange when input changes", async () => {
    render(<FilterInput onChange={mockOnChange} />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "test" } });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith("test");
    });
  });

  it("clears input when clear button is clicked", () => {
    render(<FilterInput onChange={mockOnChange} />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");

    const clearButton = screen.getByRole("button");
    fireEvent.click(clearButton);

    expect(input).toHaveValue("");
  });

  it("does not show clear button when input is empty", () => {
    render(<FilterInput onChange={mockOnChange} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
