import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppRoutes from "./index";
import { LoaderProvider } from "@/context/LoaderContext";
import { waitMS } from "@/utils/test";

describe("App routing", () => {
  test("renders Home component on default route", async () => {
    render(
      <LoaderProvider>
        <MemoryRouter initialEntries={["/"]}>
          <AppRoutes />
        </MemoryRouter>
      </LoaderProvider>
    );
    await waitMS(2000);
    expect(screen.getByTestId("Home")).toBeInTheDocument();
  });

  test("renders PodcastDetails component on /podcast/:podcastId route", async () => {
    render(
      <LoaderProvider>
        <MemoryRouter initialEntries={["/podcast/1635211340"]}>
          <AppRoutes />
        </MemoryRouter>
      </LoaderProvider>
    );

    await waitMS(2000);
    expect(screen.getByTestId("PodcastDetails")).toBeInTheDocument();
  });

  test("renders EpisodeDetails component on /podcast/:podcastId/episode/:episodeId route", async () => {
    render(
      <LoaderProvider>
        <MemoryRouter
          initialEntries={["/podcast/1607694785/episode/1000663830948"]}
        >
          <AppRoutes />
        </MemoryRouter>
      </LoaderProvider>
    );
    await waitMS(2000);
    expect(screen.getByTestId("EpisodeDetails")).toBeInTheDocument();
  });

  test("renders NotFound component on unknown route", () => {
    render(
      <LoaderProvider>
        <MemoryRouter initialEntries={["/unknown"]}>
          <AppRoutes />
        </MemoryRouter>
      </LoaderProvider>
    );

    expect(screen.getByText(/NotFound/i)).toBeInTheDocument();
  });
});
