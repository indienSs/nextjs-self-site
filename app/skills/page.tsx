import {Metadata} from "next";
import "../globals.scss"
import ApiSkill from "@/components/ApiSkill";
import PopupSkill from "@/components/PopupSkill";
import DraggableSkill from "@/components/DraggableSkill";

export const metadata: Metadata = {
  title: "Навыки",
  description: "Описание навыков Javascript",
};

export default function Skills() {
  return <div className="page">
    <ApiSkill />
    <PopupSkill />
    <DraggableSkill />
  </div>
}
