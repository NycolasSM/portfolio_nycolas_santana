import "./style.css";

import { BrowserView, MobileView } from "react-device-detect";

const ProfileTitle = () => {
  return (
    <>
      <BrowserView>
        <div className="profile__Title">
          <h3>Desenvolvedor Web</h3>
        </div>
      </BrowserView>
      <MobileView>
        <div className="profile__Title mobile">
          <h3>Desenvolvedor Web</h3>
        </div>
      </MobileView>
    </>
  );
};

export default ProfileTitle;
