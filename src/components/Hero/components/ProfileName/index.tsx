import "./style.css";

import { BrowserView, MobileView } from "react-device-detect";

const ProfileName = () => {
  return (
    <>
      <BrowserView>
        <div className="profile__name">
          <h2>
            <span>Nycolas </span>
            <span>Santana</span>
          </h2>
        </div>
      </BrowserView>
      <MobileView>
        <h2>
          <span>Nycolas </span>
          <span>Santana</span>
        </h2>
      </MobileView>
    </>
  );
};

export default ProfileName;
