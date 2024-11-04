import { ComponentProps, ReactNode } from "react";
import styles from "./CalcSection.module.css";

interface Props extends ComponentProps<"section"> {
  children: ReactNode;
}

const CalcSection = ({ children, ...delegated }: Props) => {
  return (
    <section className={styles.section} {...delegated}>
      {children}
    </section>
  );
};

export default CalcSection;
