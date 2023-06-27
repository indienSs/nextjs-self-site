import styles from "../styles/SkillLayout.module.scss";

function SkillLayout({children}: {children: React.ReactNode}) {
  return <div className={styles.SkillLayout}>{children}</div>;
}

export default SkillLayout;
