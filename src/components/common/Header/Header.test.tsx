import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./index";
import { waitMS } from "@/utils/test";

describe("Header component", () => {
  test("renders the title and link to the home page", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const titleElement = screen.getByText(/Podcaster/i);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute("href", "/");
  });

  test("shows and hides Loader component when navigating", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    const loaderElement = screen.getByTestId("puff-loading");
    expect(loaderElement).toBeVisible();

    await waitMS(2000);
    expect(loaderElement).not.toBeVisible();
  });
});
