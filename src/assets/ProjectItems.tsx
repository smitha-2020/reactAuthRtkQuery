import type { ProjectItemProps } from "../types/type";
import Project1Img from "../assets/project1-img.jpg";
import Project2Img from "../assets/project2-img.jpg";
import Project3Img from "../assets/project3-img.jpg";
import Project4Img from "../assets/project4-img.jpg";

const ProjectsItems: ProjectItemProps[] = [
  {
    id: 1,
    projectImg: Project1Img,
    projectTitle: "Project 1",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem earum asperiores accusantium, possimus sequi at aperiam odit doloremque quasi eum quas assumenda magnam tempora?",
  },
  {
    id: 2,
    projectImg: Project2Img,
    projectTitle: "Project 2",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem earum asperiores accusantium, possimus sequi at aperiam odit doloremque quasi eum quas assumenda magnam tempora?",
  },
  {
    id: 3,
    projectImg: Project3Img,
    projectTitle: "Project 3",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem earum asperiores accusantium, possimus sequi at aperiam odit doloremque quasi eum quas assumenda magnam tempora?",
  },
  {
    id: 4,
    projectImg: Project4Img,
    projectTitle: "Project 4",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem earum asperiores accusantium, possimus sequi at aperiam odit doloremque quasi eum quas assumenda magnam tempora?",
  },
];

export default ProjectsItems;
