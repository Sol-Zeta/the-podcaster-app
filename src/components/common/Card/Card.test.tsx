import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./index";
import styles from "./Card.module.scss";

describe("Card Component", () => {
  test("renders children correctly", () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  test("renders as a link when href is provided", () => {
    render(
      <Router>
        <Card href="/test">
          <p>Test link</p>
        </Card>
      </Router>
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/test");
  });

  test("applies animated class when animated prop is true", () => {
    render(
      <Router>
        <Card href="/test" animated>
          <p>Animated card</p>
        </Card>
      </Router>
    );
    const cardElement = screen.getByRole("link");
    expect(cardElement).toHaveClass(styles.animated);
  });

  test("applies correct dimensions when width and height are provided", () => {
    render(
      <Card width={200} height={100}>
        <p>Sized card</p>
      </Card>
    );
    const cardElement = screen.getByText("Sized card").parentElement;
    expect(cardElement).toHaveStyle("width: 200px");
    expect(cardElement).toHaveStyle("height: 100px");
  });

  test("renders as a div when no href is provided", () => {
    render(
      <Card>
        <p>Test div</p>
      </Card>
    );
    const divElement = screen.getByText("Test div").parentElement;
    expect(divElement?.tagName).toBe("DIV");
  });
});
