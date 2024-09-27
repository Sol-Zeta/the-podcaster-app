import { render, screen } from "@testing-library/react";
import HtmlContent from "./index";

describe("HtmlContent", () => {
  it("renders nothing when htmlContent is empty", () => {
    const { container } = render(<HtmlContent htmlContent="" />);
    expect(container.firstChild).toBeNull();
  });

  it("renders a single line of HTML content", () => {
    render(<HtmlContent htmlContent="Hello World" />);
    const element = screen.getByText("Hello World");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("P");
    expect(element.innerHTML).toBe("Hello World");
  });

  it("renders multiple lines of HTML content", () => {
    render(<HtmlContent htmlContent={"Line 1\nLine 2"} />);
    const lines = screen.getAllByTestId("textLine");
    expect(lines).toHaveLength(2);
    expect(lines[0].innerHTML).toBe("Line 1");
    expect(lines[1].innerHTML).toBe("Line 2");
  });

  it("renders the correct html tags inside the string", () => {
    render(<HtmlContent htmlContent={"Visit: <a href='http://test.com'>Link</a>"} />);
    const element = screen.getByRole('link');
    expect(element).toBeInTheDocument();
  });
});
