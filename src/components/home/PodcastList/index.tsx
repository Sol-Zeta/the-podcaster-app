import React, { memo } from "react";
import styles from "./PodcastList.module.scss";
import PodcastCard, { PodcastCardProps } from "@/components/home/PodcastCard";

interface PodcastListProps {
  items: PodcastCardProps[]
}

const PodcastList: React.FC<PodcastListProps> = ({items}) => {
  return (
    <ul className={styles.cardList}>
      {items?.map((podcast: PodcastCardProps) => (
        <li key={podcast.id}>
          <PodcastCard
            key={podcast.id}
            id={podcast.id}
            images={podcast.images}
            title={podcast.title}
            author={podcast.author}
            href={podcast.href}
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(PodcastList);
