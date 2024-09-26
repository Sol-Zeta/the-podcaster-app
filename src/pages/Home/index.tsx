import React from "react";
import PodcastList from "@/components/home/PodcastList";
import { usePodcasts } from "@/hooks/usePodcasts";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const { data, isLoading, isError } = usePodcasts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading podcasts</p>;
  return (
    <div data-testid="Home" className={styles.homeContainer}>
      <PodcastList items={data} />
    </div>
  );
};

export default Home;
