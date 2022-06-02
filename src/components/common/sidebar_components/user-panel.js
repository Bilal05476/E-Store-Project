import React from "react";
import { Image } from "react-feather";

const UserPanel = ({ userData }) => {
  return (
    <div>
      <div className="sidebar-user text-center">
        <div>
          {userData.userImage ? (
            <img
              className="img-60 rounded-circle lazyloaded blur-up"
              src={userData.userImage}
              alt="user"
            />
          ) : (
            <Image className="loading-icon" />
          )}
        </div>
        <h6 className="mt-3 f-14">{userData.userName}</h6>
        <p>Store Manager</p>
      </div>
    </div>
  );
};

export default UserPanel;
