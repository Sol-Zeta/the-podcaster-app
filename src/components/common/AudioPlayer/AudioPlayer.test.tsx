import { render, screen } from "@testing-library/react";
import AudioPlayer from "./index";

describe("AudioPlayer", () => {
  const mockProps = {
    track: "https://example.com/audio.mp3",
    fileExtension: "mp3",
  };

  it("renders the audio element", () => {
    render(<AudioPlayer {...mockProps} />);
    const audioElement = screen.getByTestId("audioPlayer");
    expect(audioElement).toBeInTheDocument();
  });

  it("has correct source and type", () => {
    render(<AudioPlayer {...mockProps} />);
    const sourceElement = screen
      .getByTestId("audioPlayer")
      .querySelector("source");
    expect(sourceElement).toHaveAttribute("src", mockProps.track);
    expect(sourceElement).toHaveAttribute(
      "type",
      `audio/${mockProps.fileExtension}`
    );
  });

  it("displays fallback text for unsupported browsers", () => {
    render(<AudioPlayer {...mockProps} />);
    expect(
      screen.getByText("Your browser does not support the audio element.")
    ).toBeInTheDocument();
  });
});
