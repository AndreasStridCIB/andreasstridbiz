import React from "react";
import SectionItem from "./SectionItem";
import { MediaSectionPages } from "../utils/types";
import { SectionMenuContainer } from "../style/SectionMenuContainer";

interface SectionMenuProps {
  setActiveSection: (section: MediaSectionPages) => void;
  activeSection: MediaSectionPages;
  sections: MediaSectionPages[];
}

const SectionMenu: React.FC<SectionMenuProps> = ({
  sections,
  activeSection,
  setActiveSection,
}) => {
  const findActiveSection = () => {
    return sections.find((section) => section === activeSection);
  };

  return (
    <SectionMenuContainer sectionCount={sections.length}>
      {sections.map((section) => (
        <SectionItem
          key={section}
          title={section}
          isActive={section === findActiveSection()}
          handleClick={() => setActiveSection(section)}
        />
      ))}
    </SectionMenuContainer>
  );
};

export default SectionMenu;
