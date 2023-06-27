import {Metadata} from "next";
import "../globals.scss"
import ApiSkill from "@/components/ApiSkill";

export const metadata: Metadata = {
  title: "Навыки",
  description: "Описание навыков Javascript",
};

export default function Skills() {
  return <div className="page">
    <ApiSkill />
  </div>
}
