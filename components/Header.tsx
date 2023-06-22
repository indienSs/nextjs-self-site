import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.navigation}>
        <Link href="/">Главная</Link>
        <Link href="/skills">Навыки</Link>
      </div>
      <div  className={styles.selectors}>
        <p>
          RU
        </p>
        <p>
          EN
        </p>
        <p>
          theme
        </p>
      </div>
    </header>
  );
}
