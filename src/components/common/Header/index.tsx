import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import Loader from "@/components/common/Loader";
import { useLoader } from "@/context/LoaderContext";

const Header: React.FC = () => {
  const { isLoading, showLoader, hideLoader } = useLoader();
  const location = useLocation();

  useEffect(() => {
    showLoader();
    const timer = setTimeout(() => {
      hideLoader();
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        Podcaster
      </Link>
      <Loader isLoading={isLoading} />
    </header>
  );
};

export default Header;
