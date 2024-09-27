import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import useDebounce from "./useDebouce";
import { waitMS } from "@/utils/test";

const DebounceTestComponent = ({
  value,
  delay,
}: {
  value: string;
  delay: number;
}) => {
  const debouncedValue = useDebounce(value, delay);
  return <div data-testid="debounced-value">{debouncedValue}</div>;
};

describe("useDebounce hook", () => {
  it("should update the value after the delay", async () => {
    const view = render(<DebounceTestComponent value="initial" delay={500} />);
    expect(screen.getByTestId("debounced-value")).toHaveTextContent("initial");

    view.rerender(<DebounceTestComponent value="updated" delay={1000} />);
    expect(screen.getByTestId("debounced-value")).toHaveTextContent("initial");

    await waitMS(1100);

    expect(screen.getByTestId("debounced-value")).toHaveTextContent("updated");
  });
});
