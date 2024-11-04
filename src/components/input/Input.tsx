import { ComponentProps, FormEvent } from "react";
import styles from "./Input.module.css";

interface Props extends ComponentProps<"input"> {
  handleInput: (e: FormEvent<HTMLInputElement>) => void;
}

const Input = ({ handleInput, ...delegated }: Props) => {
  return (
    <input {...delegated} className={styles.input} onChange={handleInput} />
  );
};

export default Input;
