const Header = () => {
  return (
    <header id="header" className={"mt-5"}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-start text-secondary py-5 justify-content-center">
            <h3 className={"text-secondary"}>SMITHA KAMATH</h3>
            <h1>FrontEnd /React Native Developer</h1>
          </div>
          <div className="col-md-6 py-5 d-flex flex-row justify-content-center">
            <div className={"pic rounded-circle bg-secondary "}></div>
          </div>
        </div>
      </div>
    </header>
  );
  {
    /**<header className="pt-5 bg-secondary" id="header">
      <div className="container py-md-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
            <h3 className="text-secondary fw-bold lh-1">John Smith</h3>
            <h1 className="text-capitalize text-start text-primary lh-1 mb-5">
              Front end <br /> web developer
            </h1>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end"></div>
        </div>
      </div>
    </header> */
  }
};

export default Header;
