import { usePodcasts } from "@/hooks/usePodcasts";
import React from "react";

const Home: React.FC = () => {
  const { podcasts, isLoading, isError } = usePodcasts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading podcasts</p>;
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {podcasts?.map((podcast: { id: string; title: string }) => (
          <li key={podcast.id}>{podcast.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
