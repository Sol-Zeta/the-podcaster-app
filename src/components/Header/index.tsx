import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import Loader from "../Loader";

const Header: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        Podcaster
      </Link>
      <Loader isLoading={isLoading}/>
    </header>
  );
};

export default Header;
