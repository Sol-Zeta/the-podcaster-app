import React from "react";
import styles from "./DetailCard.module.scss";
import { DetailCardProps } from "@/types";
import Card from "@/components/common/Card";

const DetailCard: React.FC<DetailCardProps> = ({
  image,
  title,
  author,
  description,
}) => {
  return (
    <Card>
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
