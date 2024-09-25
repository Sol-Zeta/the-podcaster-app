import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./index";
import { mockPodcastList } from "@/utils/test";

describe("Card Component", () => {
  const mockProps = mockPodcastList[0];
  test("renders the card with the correct title, author, and image", () => {
    render(
      <Router>
        <Card {...mockProps} />
      </Router>
    );

    // Check if the title, author, and image are rendered correctly
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
        <Card {...mockProps} />
      </Router>
    );

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", mockProps.href);
  });
});
