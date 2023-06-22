import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Главная</Link>
      <Link href="/skills">Навыки</Link>
    </header>
  );
}
