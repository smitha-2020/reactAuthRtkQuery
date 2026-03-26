import type { ProjectItemProps } from "../types/type";
import Project1Img from "../assets/react-native.jpeg";
import Project2Img from "../assets/project2-img.jpg";

const ProjectsItems: ProjectItemProps[] = [
  {
    id: 1,
    projectImg: Project1Img,
    projectTitle: "Recipe Listing",
    projectDescription:
      "Development of a cross-platform mobile app using React Native, creating intuitive interface for iOS and Android using component library to develop Theme and customise components.",
    projectLink: "https://github.com/smitha-2020/reactNative_examples",
  },
  {
    id: 2,
    projectImg: Project2Img,
    projectTitle: "Recipe Listing Backend",
    projectDescription:
      "Developing a backend for Recipe Listing project using Nodejs, Express, Joi for validation, Typescipt, No-Sql mongodb and docker ",

    projectLink: "https://github.com/smitha-2020/recipeBook",
  },
  /**{
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
  },**/
];

export default ProjectsItems;
