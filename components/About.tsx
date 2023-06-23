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
          <p>Ключевые навыки</p>
          <div className={styles.links}>
            <Image src={"/html.png"} width={20} height={20} alt="html" title="HTML" />
            <Image src={"/css.png"} width={20} height={20} alt="css" title="CSS" />
            <Image src={"/js.png"} width={20} height={20} alt="JavaScript" title="JavaScript"/>
            <Image src={"/ts.png"} width={20} height={20} alt="TypeScript" title="TypeScript"/>
            <Image src={"/react.png"} width={20} height={20} alt="React" title="React"/>
          </div>
          <p>Дополнительные навыки</p>
          <div className={styles.links}>
            <Image src={"/git.png"} width={20} height={20} alt="git" title="git" />
            <Image src={"/next.png"} width={20} height={20} alt="next" title="next" />
          </div>
      </div>
      <div className={styles.about_me}>
        <h3>Обо мне</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam molestiae! Possimus facilis sit in
          accusamus ad porro unde exercitationem! Ut temporibus inventore dignissimos dolorum ducimus iusto hic
          exercitationem tempore quas aspernatur facere autem tempora, commodi maxime nobis ipsam ab dolores sunt
          laborum, laboriosam quidem sapiente. Culpa eos aliquid sit eius aspernatur commodi in labore repudiandae ad!
          Unde assumenda accusamus aperiam rem? Error maxime blanditiis quod alias mollitia. In esse totam sint odit
          delectus sed excepturi neque enim quaerat numquam!
        </p>
      </div>
    </div>
  );
}

export default About;
