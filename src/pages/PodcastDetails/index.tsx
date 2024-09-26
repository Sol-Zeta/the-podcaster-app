import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PodcastDetails.module.scss";
import { usePodcastsDetails } from "@/hooks/usePodcastDetails";
import DetailCard from "@/components/podcasts/DetailCard";
import { PodcastEpisodes } from "@/types";

const PodcastDetailsView: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { data, isLoading, isError } = usePodcastsDetails(podcastId || "1");
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading podcast episodes</p>;
  const { id, title, author, image_url, description } = data;

  return (
    <div data-testid="PodcastDetails" className={styles.homeContainer}>
      <div>{"details =>" + podcastId}</div>
      <DetailCard
        id={id}
        title={title}
        author={author}
        image={image_url}
        description={description}
      />
      {data.episodes.map((episode: PodcastEpisodes) => (
        <li>
          <p>{episode.id}</p>
          <p>{episode.title}</p>
          <p>{episode.date}</p>
          <p>{episode.duration}</p>
          <p>{episode.href}</p>
        </li>
      ))}
    </div>
  );
};

export default PodcastDetailsView;
