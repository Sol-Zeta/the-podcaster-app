import React, { memo } from "react";
import styles from "./CardList.module.scss";
import { CardProps } from "@/types";
import Card from "@/components/Card";

interface CardListProps {
  items: CardProps[]
}

const CardList: React.FC<CardListProps> = ({items}) => {
  return (
    <ul className={styles.cardList}>
      {items?.map((podcast: CardProps) => (
        <li key={podcast.id}>
          <Card
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

export default memo(CardList);
