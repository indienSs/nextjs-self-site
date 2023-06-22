import {Metadata} from "next";
import "../globals.scss"

export const metadata: Metadata = {
  title: "Навыки",
  description: "Описание навыков Javascript",
};

export default function Skills() {
  return <div className="page">Мои навыки</div>;
}
