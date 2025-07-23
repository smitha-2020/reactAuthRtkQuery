import ViewMyProjects from "./ViewMyProjects";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <header id="header" className={"pt-5"}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-start text-secondary py-5 justify-content-center">
            <h3 className={"text-secondary fw-bold lh-1"}>SMITHA KAMATH</h3>
            <h1 className={"text-capitalize lh-1 text-primary mb-5"}>
              FrontEnd/React Native Developer
            </h1>

            <div className={"mt-10"}>
              <ViewMyProjects />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <Image
              className="img-fluid img-thumbnail w-75 shadow my-5"
              roundedCircle
              src="src/assets/smitha_kamath.JPEG"
              alt="header img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
