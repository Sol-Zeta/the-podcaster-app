import React from "react";
import styles from "./PodcastCard.module.scss";
import Card from "@/components/common/Card";

interface CardImage {
  image_url: string;
  height: string;
}

export interface PodcastCardProps {
  id: string;
  title: string;
  author: string;
  images: CardImage[];
  href: string;
  description?: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  images,
  title,
  author,
  href,
}) => {
  return (
    <Card href={href} width={230} height={280}>
      <div className={styles.imageContainer}>
        <img src={images[1].image_url} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
      </div>
    </Card>
  );
};

export default PodcastCard;
