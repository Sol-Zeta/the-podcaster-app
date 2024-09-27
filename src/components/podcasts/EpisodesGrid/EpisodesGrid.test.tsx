import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import EpisodesGrid from "./index";
import { mockEpisodes } from "@/utils/test";

const MockPodcastLayout = ({ episodes = mockEpisodes }) => (
  <MemoryRouter initialEntries={["/podcast/123"]}>
    <Routes>
      <Route
        path="/podcast/:podcastId"
        element={
          <>
            <Outlet context={{ podcastId: "123", episodes }} />
          </>
        }
      >
        <Route index element={<EpisodesGrid />} />
      </Route>
    </Routes>
  </MemoryRouter>
);

describe("EpisodesGrid", () => {
  it("renders the correct number of episodes", () => {
    render(<MockPodcastLayout />);
    expect(screen.getByText("Episodes: 2")).toBeInTheDocument();
  });

  it("renders the table headers correctly", () => {
    render(<MockPodcastLayout />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Duration")).toBeInTheDocument();
  });

  it("renders episode data correctly", () => {
    render(<MockPodcastLayout />);
    mockEpisodes.forEach((episode) => {
      expect(screen.getByText(episode.title)).toBeInTheDocument();
      expect(screen.getByText(episode.date)).toBeInTheDocument();
      expect(screen.getByText(episode.duration)).toBeInTheDocument();
    });
  });

  it("renders correct links for episodes", () => {
    render(<MockPodcastLayout />);
    mockEpisodes.forEach((episode) => {
      const link = screen.getByText(episode.title).closest("a");
      expect(link).toHaveAttribute(
        "href",
        `/podcast/123/episode/${episode.id}`
      );
    });
  });

  it("renders a message when no episodes are provided", () => {
    render(<MockPodcastLayout episodes={[]} />);
    expect(screen.getByText("No episodes found")).toBeInTheDocument();
  });
});
