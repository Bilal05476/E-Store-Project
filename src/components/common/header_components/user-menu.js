import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { User, LogOut, Image } from "react-feather";

const UserMenu = ({ setUser, userData }) => {
  const history = useHistory();
  const signOut = (e) => {
    e.preventDefault();
    localStorage.setItem("user", null);
    setUser(null);
    history.push("/");
  };
  return (
    <Fragment>
      <li className="onhover-dropdown">
        <div className="media align-items-center">
          {userData.userImage ? (
            <img
              className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
              src={userData.userImage}
              alt="header-user"
            />
          ) : (
            <Image className="loading-icon" />
          )}

          <div className="dotted-animation">
            <span className="animate-circle"></span>
            <span className="main-circle"></span>
          </div>
        </div>
        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/settings/profile`}>
              <User /> Profile
            </Link>
          </li>

          <li>
            <a onClick={signOut}>
              <LogOut />
              Logout
            </a>
          </li>
        </ul>
      </li>
    </Fragment>
  );
};

export default UserMenu;
