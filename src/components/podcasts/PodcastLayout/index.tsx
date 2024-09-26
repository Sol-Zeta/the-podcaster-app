import React from "react";
import { useParams, Outlet } from "react-router-dom";
import styles from "./PodcastLayout.module.scss";
import DetailCard from "@/components/podcasts/DetailCard";
import { usePodcastsDetails } from "@/hooks/usePodcastDetails";

const PodcastDetailsView: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { data, isLoading, isError } = usePodcastsDetails(podcastId || "1");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading podcast data</p>;
  const { id, title, author, image_url, description, episodes } = data;

  return (
    <div data-testid="PodcastDetails" className={styles.container}>
      <div className={styles.podcastDetailsContainer}>
        <div className={styles.detailCardContainer}>
          <DetailCard
            id={id}
            title={title}
            author={author}
            image={image_url}
            description={description}
          />
        </div>
        <div className={styles.outletContainer}>
          <Outlet context={{ podcastId, episodes }} />
        </div>
      </div>
    </div>
  );
};

export default PodcastDetailsView;
