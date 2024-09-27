import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import PodcastList from "@/components/home/PodcastList";
import FilterInput from "@/components/common/FilterInput";
import { usePodcasts } from "@/hooks/usePodcasts";
import { filterPodcasts } from "@/utils/filters";

const Home: React.FC = () => {
  const { data, isLoading, isError } = usePodcasts();
  const [podcastsToShow, setPodcastsToShow] = useState(data);

  const handleOnFilter = (term?: string) => {
    if (!term) {
      setPodcastsToShow(data);
      return;
    }
    const filteredData = filterPodcasts(term, data);
    setPodcastsToShow(filteredData);
  };

  useEffect(() => {
    setPodcastsToShow(data);
  }, [data]);

  if (isLoading) return null;
  if (isError) return <p>Error loading podcasts</p>;
  return (
    <div data-testid="Home" className={styles.homeContainer}>
      <div className={styles.inputContainer}>
        <FilterInput
          resultsCount={podcastsToShow?.length || 0}
          onChange={handleOnFilter}
          placeholder="Filter podcasts..."
        />
      </div>
      <PodcastList items={podcastsToShow} />
    </div>
  );
};

export default Home;
