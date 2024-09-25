import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppRoutes from "./index";

describe("App routing", () => {
  test("renders Home component on default route", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(screen.getByTestId("Home")).toBeInTheDocument();
  });

  test("renders PodcastDetail component on /podcast/:podcastId route", () => {
    render(
      <MemoryRouter initialEntries={["/podcast/1"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText(/PodcastDetails/i)).toBeInTheDocument();
  });

  test("renders EpisodeDetails component on /podcast/:podcastId/episode/:episodeId route", () => {
    render(
      <MemoryRouter initialEntries={["/podcast/1/episode/1"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText(/EpisodeDetails/i)).toBeInTheDocument();
  });

  test("renders NotFound component on unknown route", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText(/NotFound/i)).toBeInTheDocument();
  });
});
