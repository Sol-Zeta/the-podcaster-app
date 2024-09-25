import { render, screen } from "@testing-library/react";
import Loader from "./index";

describe("Loader component", () => {
  test("should render without crashing", () => {
    render(<Loader />);
    const loaderElement = screen.getByLabelText("puff-loading");
    expect(loaderElement).toBeInTheDocument();
  });

  test("should be visible when isLoading is true", () => {
    render(<Loader isLoading={true} />);
    const loaderElement = screen.getByLabelText("puff-loading");
    expect(loaderElement).toBeVisible();
  });

  test("should not be visible when isLoading is false", () => {
    render(<Loader isLoading={false} />);
    const loaderElement = screen.getByLabelText("puff-loading");
    expect(loaderElement).not.toBeVisible();
  });
});
