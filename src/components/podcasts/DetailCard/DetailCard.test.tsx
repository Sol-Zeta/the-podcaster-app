import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DetailCard from "./index";
import { mockPodcastDetail } from "@/utils/test";

describe("Card Component", () => {
  test("renders the card with the correct title, author, and image", () => {
    render(
      <Router>
        <DetailCard {...mockPodcastDetail} />
      </Router>
    );

    expect(screen.getByText(mockPodcastDetail.title)).toBeInTheDocument();
    expect(screen.getByText(mockPodcastDetail.author)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockPodcastDetail.image
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", mockPodcastDetail.title);
  });
});
