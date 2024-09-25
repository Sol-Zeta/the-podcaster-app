import React from "react";
import CardList from "@/components/CardList";
import { usePodcasts } from "@/hooks/usePodcasts";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const { podcasts, isLoading, isError } = usePodcasts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading podcasts</p>;
  return (
    <div data-testid="Home" className={styles.homeContainer}>
      <CardList items={podcasts} />
    </div>
  );
};

export default Home;
