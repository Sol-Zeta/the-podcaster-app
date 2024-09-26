import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DetailCard from "./index";
import { mockPodcastDetail } from "@/utils/test";

describe("DetailCard Component", () => {
  test("renders the card with the correct title, author, image and description", () => {
    render(
      <Router>
        <DetailCard {...mockPodcastDetail} />
      </Router>
    );

    expect(screen.getByText(mockPodcastDetail.title)).toBeInTheDocument();
    expect(screen.getByText(`by ${mockPodcastDetail.author}`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockPodcastDetail.image
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", mockPodcastDetail.title);
    expect(screen.getByText(mockPodcastDetail.description)).toBeInTheDocument();
  });
});
