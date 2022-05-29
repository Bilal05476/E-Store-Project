import React, { Fragment, useState } from "react";
import UserMenu from "./user-menu";
import { AlignLeft, Maximize2 } from "react-feather";

const Header = () => {
  const [sidebar, setSidebar] = useState(true);
  // const [rightSidebar, setRightSidebar] = useState(true);
  const [navMenus, setNavMenus] = useState(false);

  const toggle = () => {
    setNavMenus((prevState) => ({
      navMenus: !prevState.navMenus,
    }));
  };
  const goFull = () => {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };
  const openCloseSidebar = () => {
    if (sidebar) {
      setSidebar(false);
      document.querySelector(".page-main-header").classList.add("open");
      document.querySelector(".page-sidebar").classList.add("open");
    } else {
      setSidebar(true);
      document.querySelector(".page-main-header").classList.remove("open");
      document.querySelector(".page-sidebar").classList.remove("open");
    }
  };

  return (
    <Fragment>
      {/* open */}
      <div className="page-main-header ">
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none">
            <div className="logo-wrapper">
              <a href="index.html"></a>
            </div>
          </div>
          <div className="mobile-sidebar">
            <div className="media-body text-right switch-sm">
              <label className="switch">
                <a href="#javaScript" onClick={openCloseSidebar}>
                  <AlignLeft />
                </a>
              </label>
            </div>
          </div>
          <div className="nav-right col">
            <ul className={"nav-menus " + (navMenus ? "open" : "")}>
              <li>
                <a onClick={goFull} className="text-dark" href="#javaScript">
                  <Maximize2 />
                </a>
              </li>

              <UserMenu />
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
