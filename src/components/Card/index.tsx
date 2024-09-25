import React from "react";
import styles from "./Card.module.scss";
import { CardProps } from "@/types";
import { Link } from "react-router-dom";

const Card: React.FC<CardProps> = ({ images, title, author, href }) => {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={images[1].image_url} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
      </div>
    </Link>
  );
};

export default Card;
