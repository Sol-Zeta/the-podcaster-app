import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "@/pages/Home";
import { mockPodcastList } from "@/utils/test";
import { usePodcasts } from "@/hooks/usePodcasts";

vi.mock("@/hooks/usePodcasts");

describe("Home Component", () => {
  it("should display Loader component when podcasts are loading", () => {
    (usePodcasts as any).mockReturnValue({
      data: [],
      isLoading: true,
      isError: false,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("should display error state when there is an error", () => {
    (usePodcasts as any).mockReturnValue({
      data: [],
      isLoading: false,
      isError: true,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/error loading podcasts/i)).toBeInTheDocument();
  });

  it("should render the PodcastList component when podcasts are loaded", () => {
    (usePodcasts as any).mockReturnValue({
      data: mockPodcastList,
      isLoading: false,
      isError: false,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByTestId("Home")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    mockPodcastList.forEach((podcast) => {
      expect(screen.getByText(podcast.title)).toBeInTheDocument();
    });
  });
});
