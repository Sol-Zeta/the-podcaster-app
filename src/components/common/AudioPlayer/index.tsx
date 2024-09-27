import React from "react";
import styles from "./AudioPlayer.module.scss";

interface AudioPlayerProps {
  track: string;
  fileExtension: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ track, fileExtension }) => {
  return (
    <audio controls className={styles.audioPlayer} data-testid="audioPlayer">
      <source src={track} type={`audio/${fileExtension}`} />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
