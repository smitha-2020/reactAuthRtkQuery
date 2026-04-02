import type { ProjectItemProps } from "../types/type";
import Project1Img from "../assets/react-native.jpeg";
import Project2Img from "../assets/project2-img.jpg";
import Project3Img from "../assets/expense-tracker.png";
import Project4Img from "../assets/homePage.png";
import Project5Img from "../assets/weather-app.png";

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
  {
    id: 5,
    projectImg: Project5Img,
    projectTitle: "Weather App",
    projectDescription:
      "Displays weather based on the users geolocation, Using node in the backend and react in the frontend",

    projectLink: "https://github.com/smitha-2020/weatherApp",
  },

  {
    id: 4,
    projectImg: Project4Img,
    projectTitle: "Photo Gallery",
    projectDescription:
      "Implemented Photo gallery with nestjs and mysql and react, react-bootstrap and Typescript on the frontend ",

    projectLink: "https://github.com/smitha-2020/Nestjs-React-TypeORM",
  },
  {
    id: 3,
    projectImg: Project3Img,
    projectTitle: "Expense Tracker",
    projectDescription:
      "Implemented tracker using react-bootstrap, react hook form, Redux, Zod to validate user input, SASS and vitest test cases",

    projectLink: "https://github.com/smitha-2020/gameLibraryApp",
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
