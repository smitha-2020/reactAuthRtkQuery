import ViewMyProjects from "./ViewMyProjects";
import Image from "react-bootstrap/Image";
import UIColumnCenter from "./ui/UIColumnCenter";
import AuthorImg from "../assets/smitha_kamath.jpg";

const Header = () => {
  return (
    <header id="header" className={"pt-5"}>
      <div className="container">
        <div className="row">
          <UIColumnCenter style="flex-column align-items-start text-secondary py-5">
            <h3 className={"text-secondary fw-bold lh-1"}>SMITHA KAMATH</h3>
            <h1 className={"text-capitalize lh-1 text-primary mb-5"}>
              FrontEnd/React Native Developer
            </h1>

            <div className={"mt-10"}>
              <ViewMyProjects />
            </div>
          </UIColumnCenter>
          <UIColumnCenter>
            <Image
              className="img-fluid img-thumbnail w-75 shadow my-5"
              roundedCircle
              src={AuthorImg}
              alt="header img"
            />
          </UIColumnCenter>
        </div>
      </div>
    </header>
  );
};

export default Header;
