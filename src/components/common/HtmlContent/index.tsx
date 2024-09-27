import React from "react";
import styles from "./HtmlContent.module.scss";

interface HtmlContentProps {
  htmlContent: string;
}

const HtmlContent: React.FC<HtmlContentProps> = ({ htmlContent }) => {
  if (!htmlContent) {
    return htmlContent;
  }

  return htmlContent
    .split("\n")
    .map((line: string, index: number) => (
      <p
        key={line.slice(0, 5) + index}
        data-testid="textLine"
        className={styles.textLine}
        dangerouslySetInnerHTML={{ __html: line }}
      />
    ));
};

export default HtmlContent;
