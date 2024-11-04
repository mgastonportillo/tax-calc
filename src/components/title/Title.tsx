import { ReactNode } from "react";
import styles from "./Title.module.css";

interface Props {
  children: ReactNode;
}

const Title = ({ children }: Props) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
