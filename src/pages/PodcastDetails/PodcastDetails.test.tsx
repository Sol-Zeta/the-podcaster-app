import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PodcastDetailsView from "./index";
import { usePodcastsDetails } from "@/hooks/usePodcastDetails";

vi.mock("@/hooks/usePodcastDetails");

describe("PodcastDetailsView", () => {
  const mockPodcastData = {
    id: "1",
    title: "Test Podcast",
    author: "Test Author",
    image_url: "test-image.jpg",
    description: "Test description",
    episodes: [],
  };

  it("renders loading state", () => {
    (usePodcastsDetails as any).mockReturnValue({ isLoading: true });

    render(
      <MemoryRouter initialEntries={["/podcast/1"]}>
        <Routes>
          <Route path="/podcast/:podcastId" element={<PodcastDetailsView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (usePodcastsDetails as any).mockReturnValue({ isError: true });

    render(
      <MemoryRouter initialEntries={["/podcast/1"]}>
        <Routes>
          <Route path="/podcast/:podcastId" element={<PodcastDetailsView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Error loading podcast episodes")
    ).toBeInTheDocument();
  });

  it("renders DetailCard and EpisodesGrid when data is loaded", async () => {
    (usePodcastsDetails as any).mockReturnValue({
      data: mockPodcastData,
      isLoading: false,
      isError: false,
    });

    render(
      <MemoryRouter initialEntries={["/podcast/1"]}>
        <Routes>
          <Route path="/podcast/:podcastId" element={<PodcastDetailsView />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("PodcastDetails")).toBeInTheDocument();
      expect(screen.getByTestId("DetailCard")).toBeInTheDocument();
      expect(screen.getByTestId("EpisodesGrid")).toBeInTheDocument();
    });
  });
});
