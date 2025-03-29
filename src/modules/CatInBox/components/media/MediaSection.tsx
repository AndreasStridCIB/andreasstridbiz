import React from "react";
import { MediaSectionPages } from "../../utils/types";
import SectionMenu from "../SectionMenu";
import MediaSectionContent from "./MediaSectionContent";
import { SectionDiv } from "../../style/SectionDiv";

const SECTIONS = Object.values(MediaSectionPages);

const MediaSection: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState(SECTIONS[0]);

  return (
    <SectionDiv id="design">
      <MediaSectionContent activeSection={activeSection} />
      <SectionMenu
        sections={SECTIONS}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </SectionDiv>
  );
};

export default MediaSection;
