import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "@/pages/Home";
import { mockPodcastList } from "@/utils/test";
import { usePodcasts } from "@/hooks/usePodcasts";

vi.mock("@/hooks/usePodcasts");

describe("Home Component", () => {
  it("should display loading state when podcasts are loading", () => {
    (usePodcasts as any).mockReturnValue({
      podcasts: [],
      isLoading: true,
      isError: false,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("should display error state when there is an error", () => {
    (usePodcasts as any).mockReturnValue({
      podcasts: [],
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

  it("should render the CardList component when podcasts are loaded", () => {

    (usePodcasts as any).mockReturnValue({
      podcasts: mockPodcastList,
      isLoading: false,
      isError: false,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByTestId("Home")).toBeInTheDocument();
    expect(screen.getByText("Test Podcast 1")).toBeInTheDocument();
    expect(screen.getByText("Test Podcast 2")).toBeInTheDocument();
  });
});
