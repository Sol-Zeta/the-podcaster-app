import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import styles from "./EpisodeDetails.module.scss";
import Card from "@/components/common/Card";
import { EpisodesGridContextType } from "@/types";
import HtmlContent from "@/components/common/HtmlContent";

const EpisodeDetails: React.FC = () => {
  const { episodeId } = useParams();
  const { episodes } = useOutletContext<EpisodesGridContextType>();

  const episode = episodes.find((item) => item.id === episodeId) || undefined;

  if (!episode) {
    return <p>This Episode is not available</p>;
  }

  return (
    <Card>
      <div
        className={styles.episodeDetailContainer}
        data-testid="EpisodeDetails"
      >
        <h3>{episode?.title}</h3>
        <HtmlContent htmlContent={episode.description}/>
        {episode?.track ? (
          <audio
            controls
            className={styles.audioPlayer}
            data-testid="audioPlayer"
          >
            <source src={episode.track} type={`audio/${episode.trackFileExtension}`} />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p>This track is not available</p>
        )}
      </div>
    </Card>
  );
};

export default EpisodeDetails;
