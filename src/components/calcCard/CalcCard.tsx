import { ReactNode } from "react";
import styles from "./CalcCard.module.css";

interface Props {
  children: ReactNode;
}

const CalcCard = ({ children }: Props) => {
  return (
    <div className={styles.card}>
      <form onSubmit={(e) => e.preventDefault()}>{children}</form>
    </div>
  );
};

export default CalcCard;
