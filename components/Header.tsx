import Link from "next/link";
import styles from "../styles/Header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.flex_section}>
        <div className={styles.navigation}>
          <Link href="/">Главная</Link>
          <Link href="/skills">Навыки</Link>
        </div>
        <div className={styles.selectors}>
          <Image src={"/russian.png"} width={30} height={20} alt="russian" title="russian" />
          <Image src={"/english.png"} width={30} height={20} alt="english" title="english" />
          <p>theme</p>
        </div>
      </div>
    </header>
  );
}
