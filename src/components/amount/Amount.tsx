interface Props {
  title: string;
  amount: string;
}

import Title from "../title/Title";
import styles from "./Amount.module.css";

const Amount = ({ title, amount }: Props) => {
  return (
    <section className={styles.wrapper}>
      <Title>{title}</Title>
      <p>${amount}</p>
    </section>
  );
};

export default Amount;
