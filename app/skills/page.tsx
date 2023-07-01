import {Metadata} from "next";
import "../globals.scss";
import ApiSkill from "@/components/ApiSkill";
import PopupSkill from "@/components/PopupSkill";
import DraggableSkill from "@/components/DraggableSkill";
import MapSkill from "@/components/MapSkill";
import VideoSkill from "@/components/VideoSkill";
import FormSkill from "@/components/FormSkill";

export const metadata: Metadata = {
  title: "Навыки",
  description: "Описание навыков работы с Javascript",
};

export default function Skills() {
  return (
    <div className="page">
      <ApiSkill />
      <FormSkill />
      <DraggableSkill />
      <PopupSkill />
      <MapSkill />
      <VideoSkill />
    </div>
  );
}
