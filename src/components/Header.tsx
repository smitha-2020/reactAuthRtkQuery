import ViewMyProjects from "./ViewMyProjects";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";
import profilePhoto from "../assets/smitha-kamath.png";

const Header = () => {
  const appContext = useContext(ThemeContext);

  const toggleTheme = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    appContext?.theme === "dark"
      ? appContext.setTheme("light")
      : appContext?.setTheme("dark");

    document.documentElement.dataset.bsTheme = appContext?.theme;
  };

  return (
    <header id="header" className="hero">
      <div className="container">
        <div className="row pt-3">
          <div className="col-12 d-flex justify-content-end align-items-center gap-2">
            <span className="font-display text-secondary small text-uppercase letter-spacing-wide d-none d-sm-inline">
              Theme
            </span>
            <div className="form-check form-switch mb-0">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={toggleTheme}
                aria-label="Toggle light or dark theme"
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center py-5 gy-4 gx-lg-5">
          <div className="col-12 col-lg-6 text-secondary">
            <div className="hero__inner">
              <p
                className="hero__name text-secondary mb-0"
                data-testid="name"
              >
                Smitha Kamath
              </p>
              <h1 className="hero__role text-primary">
                Fullstack developer
              </h1>
              <p className="font-body-prose text-secondary mb-0 hero__lead">
                Helsinki · I design and ship end-to-end product features — from
                APIs and data to web and mobile UIs — with clarity and care.
              </p>
              <div className="hero__cta">
                <ViewMyProjects />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-center">
            <figure className="hero__photo-frame mb-0">
              <img
                src={profilePhoto}
                alt="Smitha Kamath"
                className="hero__photo"
                width={320}
                height={400}
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
