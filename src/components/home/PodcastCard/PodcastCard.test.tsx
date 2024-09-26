import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PodcastCard from "./index";
import { mockPodcastList } from "@/utils/test";

describe("PodcastCard Component", () => {
  const mockProps = mockPodcastList[0];
  test("renders the PodcastCard with the correct title, author, and image", () => {
    render(
      <Router>
        <PodcastCard {...mockProps} />
      </Router>
    );

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.author)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockProps.images[1].image_url
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", mockProps.title);
  });

  test("links to the correct URL", () => {
    render(
      <Router>
        <PodcastCard {...mockProps} />
      </Router>
    );

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", mockProps.href);
  });
});
