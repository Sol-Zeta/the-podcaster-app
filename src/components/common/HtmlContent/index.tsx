import React from "react";
import styles from "./HtmlContent.module.scss";

interface HtmlContentProps {
  htmlContent: string;
}

const HtmlContent: React.FC<HtmlContentProps> = ({ htmlContent }) => {
  return htmlContent
    .split("\n")
    .map((line: string) => (
      <p
        className={styles.textLine}
        dangerouslySetInnerHTML={{ __html: line }}
      />
    ));
};

export default HtmlContent;
