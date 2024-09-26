import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PodcastDetails.module.scss";
import DetailCard from "@/components/podcasts/DetailCard";
import EpisodesGrid from "@/components/podcasts/EpisodesGrid";
import { usePodcastsDetails } from "@/hooks/usePodcastDetails";

const PodcastDetailsView: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { data, isLoading, isError } = usePodcastsDetails(podcastId || "1");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading podcast episodes</p>;
  const { id, title, author, image_url, description, episodes } = data;

  return (
    <div
      data-testid="PodcastDetails"
      className={styles.container}
    >
      <div
        className={styles.podcastDetailsContainer}
      >
        <DetailCard
          id={id}
          title={title}
          author={author}
          image={image_url}
          description={description}
        />
        <EpisodesGrid podcastId={podcastId} episodes={episodes} />
      </div>
    </div>
  );
};

export default PodcastDetailsView;
