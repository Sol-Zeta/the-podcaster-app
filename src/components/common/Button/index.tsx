import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
