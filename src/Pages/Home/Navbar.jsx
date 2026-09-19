import {
  useState,
  useEffect,
} from "react";
import { Link } from "react-scroll";
import logoImg from "../../img/Logo-1.png";

function Navbar() {
  const [
    navActive,
    setNavActive,
  ] =
    useState(
      false,
    );

  const toggleNav =
    () => {
      setNavActive(
        !navActive,
      );
    };

  const closeMenu =
    () => {
      setNavActive(
        false,
      );
    };

  useEffect(() => {
    const handleResize =
      () => {
        if (
          window.innerWidth <=
          500
        ) {
          closeMenu();
        }
      };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  useEffect(() => {
    if (
      window.innerWidth <=
      1200
    ) {
      closeMenu();
    }
  }, []);

  return (
    <nav
      className={`navbar ${navActive ? "active" : ""}`}
    >
      {/* 1. Left Counterweight: Logo */}
      <div className="navbar--logo-container">
        <div className="navbar--logo">
          <img
            src={
              logoImg
            }
            alt="Logo"
          />
        </div>
      </div>

      {/* 2. Center: Collapsible Navigation Links */}
      <div
        className={`navbar--items ${navActive ? "active" : ""}`}
      >
        <ul>
          <li>
            <Link
              onClick={
                closeMenu
              }
              activeClass="navbar--active-content"
              spy={
                true
              }
              smooth={
                true
              }
              offset={
                -70
              }
              duration={
                500
              }
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={
                closeMenu
              }
              activeClass="navbar--active-content"
              spy={
                true
              }
              smooth={
                true
              }
              offset={
                -70
              }
              duration={
                500
              }
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={
                closeMenu
              }
              activeClass="navbar--active-content"
              spy={
                true
              }
              smooth={
                true
              }
              offset={
                -70
              }
              duration={
                500
              }
              to="AboutMe"
              className="navbar--content"
            >
              About
              Me
            </Link>
          </li>
          <li>
            <Link
              onClick={
                closeMenu
              }
              activeClass="navbar--active-content"
              spy={
                true
              }
              smooth={
                true
              }
              offset={
                -70
              }
              duration={
                500
              }
              to="mySkills"
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>

      {/* 3. Right Counterweight: Button & Hamburger (Button stays out of menu) */}
      <div className="navbar--right-container">
        <Link
          onClick={
            closeMenu
          }
          activeClass="navbar--active-content"
          spy={
            true
          }
          smooth={
            true
          }
          offset={
            -70
          }
          duration={
            500
          }
          to="Contact"
          className="btn btn-outline-primary"
        >
          Contact
          Me
        </Link>

        <a
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={
            toggleNav
          }
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
