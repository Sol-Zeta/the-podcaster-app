import React from "react";
import styles from "./DetailCard.module.scss";
import Card from "@/components/common/Card";

export interface DetailCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
}

const DetailCard: React.FC<DetailCardProps> = ({
  id,
  image,
  title,
  author,
  description,
}) => {
  return (
    <Card href={`/podcast/${id}`}>
      <div data-testid="DetailCard" className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.author}>{`by ${author}`}</p>
          <p className={styles.descriptionTitle}>Description:</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default DetailCard;
