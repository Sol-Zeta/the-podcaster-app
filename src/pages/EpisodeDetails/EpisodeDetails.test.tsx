import { render, screen } from "@testing-library/react";
import {
  MemoryRouter,
  Route,
  Routes,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { vi } from "vitest";
import EpisodeDetails from "./index";
import { mockEpisodes } from "@/utils/test";
import { EpisodesGridContextType } from "@/types";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: vi.fn(),
    useOutletContext: vi.fn(),
  };
});

const renderComponent = (episodeId: string) => {
  vi.mocked(useOutletContext).mockReturnValue({
    episodes: mockEpisodes,
  } as EpisodesGridContextType);
  vi.mocked(useParams).mockReturnValue({ episodeId });

  render(
    <MemoryRouter initialEntries={[`/episode/${episodeId}`]}>
      <Routes>
        <Route path="/episode/:episodeId" element={<EpisodeDetails />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("EpisodeDetails", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("renders episode details when episode is found", () => {
    renderComponent("1");

    expect(screen.getByText("Episode 1")).toBeInTheDocument();
    expect(screen.getByText("Description for Episode 1")).toBeInTheDocument();
    expect(screen.getByTestId("audioPlayer")).toBeInTheDocument();
  });

  test('renders "track not available" message when episode has no track', () => {
    renderComponent("2");

    expect(screen.getByText("Episode 2")).toBeInTheDocument();
    expect(screen.getByText("Description for Episode 2")).toBeInTheDocument();
    expect(screen.getByText("This track is not available")).toBeInTheDocument();
  });

  test('renders "episode not available" message when episode is not found', () => {
    renderComponent("3");

    expect(
      screen.getByText("This Episode is not available")
    ).toBeInTheDocument();
  });
});
