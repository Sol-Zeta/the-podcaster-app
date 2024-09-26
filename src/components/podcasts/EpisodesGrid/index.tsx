import React from "react";
import { Link } from "react-router-dom";
import styles from "./EpisodesGrid.module.scss";
import Card from "@/components/common/Card";

interface Episode {
  id: string;
  title: string;
  date: string;
  duration: string;
}

interface EpisodesGridProps {
  podcastId?: string;
  episodes: Episode[];
}

const EpisodesGrid: React.FC<EpisodesGridProps> = ({ podcastId, episodes }) => {
  if (episodes.length === 0) {
    return (
      <div data-testid="EpisodesGrid" className={styles.episodesGridContainer}>
        No episodes found
      </div>
    );
  }
  return (
    <div data-testid="EpisodesGrid" className={styles.episodesGridContainer}>
      <Card>
        <h3 className={styles.episodeCount}>Episodes: {episodes.length}</h3>
      </Card>
      <Card>
        <table className={styles.episodeTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody className={styles.scrollableBody}>
            {episodes.map((episode, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/podcast/${podcastId}/episode/${episode.id}`}>
                    {episode.title}
                  </Link>
                </td>
                <td>{episode.date}</td>
                <td>{episode.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default EpisodesGrid;
