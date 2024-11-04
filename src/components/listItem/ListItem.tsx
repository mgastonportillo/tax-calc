import styles from "./ListItem.module.css";

interface Props {
  href: string;
  title: string;
  value: number;
}

const ListItem = ({ href, title, value }: Props) => {
  return (
    <li className={styles.li}>
      <span>
        <a href={href}>{title}</a>
      </span>
      <span>{value}</span>
    </li>
  );
};

export default ListItem;
