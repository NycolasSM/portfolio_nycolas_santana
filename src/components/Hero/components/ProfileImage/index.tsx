import "./style.css";

import { BrowserView, MobileView } from "react-device-detect";

const ProfileImage = () => {
  return (
    <>
      <BrowserView>
        <div className="profile__image">
          <img
            src="https://avatars.githubusercontent.com/u/78886462?v=4"
            alt="Profile Image"
          />
        </div>
      </BrowserView>
      <MobileView>
        <div className="profile__image mobile">
          <img
            src="https://avatars.githubusercontent.com/u/78886462?v=4"
            alt="Profile Image"
          />
        </div>
      </MobileView>
    </>
  );
};

export default ProfileImage;
