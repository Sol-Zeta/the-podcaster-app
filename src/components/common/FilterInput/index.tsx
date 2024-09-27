import React, { useState, useEffect } from "react";
import styles from "./FilterInput.module.scss";
import { useDebounce } from "@/hooks/useDebouce";
import Button from "@/components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface FilterInputProps {
  resultsCount?: number;
  placeholder?: string;
  onChange: (term: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({
  resultsCount,
  placeholder = "Search...",
  onChange,
}) => {
  const [filterTerm, setFilterTerm] = useState<string>("");
  const debouncedValue = useDebounce(filterTerm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    setFilterTerm(newTerm);
  };

  const handleClear = () => {
    setFilterTerm("");
  };

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className={styles.container}>
      {resultsCount !== undefined && (
        <div className={styles.resultsCount}>
          <p>{resultsCount}</p>
        </div>
      )}
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          value={filterTerm}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {filterTerm && (
          <Button onClick={handleClear}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterInput;
