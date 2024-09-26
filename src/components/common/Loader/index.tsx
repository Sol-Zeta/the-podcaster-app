import React from "react";
import styles from "./Loader.module.scss";
import { Puff } from "react-loader-spinner";

interface LoaderProps {
  isLoading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading = false }) => {
  return (
    <div className={styles.loaderContainer}>
      <Puff
        data-testid="Loader"
        visible={isLoading}
        ariaLabel="puff-loading"
        wrapperClass={styles.loader}
      />
    </div>
  );
};

export default Loader;
