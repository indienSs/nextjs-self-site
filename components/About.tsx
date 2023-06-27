import styles from "../styles/About.module.scss";
import Image from "next/image";

function About() {
  return (
    <div className={styles.About}>
      <div className={styles.main_info}>
        <Image src={"/photo.jpg"} width={150} height={150} alt="photo" className={styles.photo} />
        <h3>Олег Андрианов</h3>
        <div className={styles.links}>
          <a href="https://github.com/indienSs" target="_blank">
            <Image src={"/github.png"} width={20} height={20} alt="github" />
          </a>
          <a
            href="https://irkutsk.hh.ru/applicant/resumes/view?resume=a6e8fc6cff0bbbf4f40039ed1f687a38626858"
            target="_blank">
            <Image src={"/hh.png"} width={20} height={20} alt="hh" />
          </a>
        </div>
        <p className={styles.profession}>Frontend developer</p>
        <div className={styles.skills}>
          <p>Основные навыки</p>
          <div className={styles.links}>
            <Image src={"/html.png"} width={20} height={20} alt="html" title="HTML" />
            <Image src={"/css.png"} width={20} height={20} alt="css" title="CSS" />
            <Image src={"/js.png"} width={20} height={20} alt="JavaScript" title="JavaScript" />
            <Image src={"/ts.png"} width={20} height={20} alt="TypeScript" title="TypeScript" />
            <Image src={"/react.png"} width={20} height={20} alt="React" title="React" />
          </div>
        </div>
        <div className={styles.skills}>
          <p>Дополнительные навыки</p>
          <div className={styles.links}>
            <Image src={"/next.png"} width={20} height={20} alt="next" title="Next.js" />
            <Image src={"/node.png"} width={34} height={20} alt="next" title="Node.js" />
            <Image src={"/git.png"} width={20} height={20} alt="git" title="git" />
            <Image src={"/redux.png"} width={20} height={20} alt="redux" title="Redux" />
            <Image src={"/sass.png"} width={20} height={20} alt="sass" title="Sass" />
          </div>
        </div>
      </div>
      <div className={styles.about_me}>
        <h3>О себе</h3>
        <p>
          Хорошее знание и понимание принципов ООП, HTML, CSS, Javascript, Node.js, Typescript, React, Next.js, Redux,
          Sass, Rest API, Docker, Git, Figma, принципов работы серверной и клиентской частей веб-приложений. <br /><br />
        </p>
        <p>
          Опыт работы в создании api на базе Express.js, а так же опыт разработки мобильных приложений на React native +
          expo.<br /><br />
        </p>
        <p>Опыт работы в команде над созданием web и мобильных приложений. <br /><br /> </p>
        <p>Отсутствие вредных привычек.</p>
      </div>
    </div>
  );
}

export default About;
