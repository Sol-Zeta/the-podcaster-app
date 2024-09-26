import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

interface CardProps {
  href?: string;
  children: ReactNode;
  animated?: boolean;
  height?: number;
  width?: number;
}

const Card: React.FC<CardProps> = ({
  href,
  children,
  animated = false,
  width,
  height,
}) => {
  const cardDimensions = {
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
  };
  if (href) {
    return (
      <Link
        to={href}
        className={`${styles.card} ${animated && styles.animated}`}
        style={cardDimensions}
      >
        {children}
      </Link>
    );
  }
  return (
    <div className={styles.card} style={cardDimensions}>
      {children}
    </div>
  );
};

export default Card;
