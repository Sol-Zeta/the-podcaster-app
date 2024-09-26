import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PodcastList from "./index";
import { mockPodcastList } from "@/utils/test";

describe("PodcastList Component", () => {
  test("renders a list of cards", () => {
    render(
      <Router>
        <PodcastList items={mockPodcastList} />
      </Router>
    );

    expect(screen.getByText(mockPodcastList[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockPodcastList[1].title)).toBeInTheDocument();

    const cardElements = screen.getAllByRole("link");
    expect(cardElements).toHaveLength(mockPodcastList.length);
  });

  test("renders an empty list when no items are provided", () => {
    render(
      <Router>
        <PodcastList items={[]} />
      </Router>
    );

    const listElement = screen.getByRole('list');
    expect(listElement).toBeEmptyDOMElement();
  });
});
