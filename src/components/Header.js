import React from "react";
import { IconContext } from "react-icons";
import { BsList } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { CgLogOff } from "react-icons/cg";

const Header = () => {
  return (
    <IconContext.Provider
      value={{ style: { fontSize: "30px", color: "rgb(0, 0, 0)" } }}
    >
      <nav className="navbar navbar-light bg-light">
        <BsList />
        <h3>
          <strong>McMakler</strong>
        </h3>
        <MdHeadsetMic />
        {/*<h4>Contact Support</h4>*/}
        <RiNotificationBadgeLine />
        <VscAccount />
        <CgLogOff />
      </nav>
    </IconContext.Provider>
  );
};
export default Header;
