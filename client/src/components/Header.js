import React from "react";
import MainPic from "../images/scvngr_main-header-05.png";
import ModalComp from "./Modal";

const Header = (props) => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <img src={MainPic} className="logoHeader" alt="SCVNGR Flat Logo" />
          <br />
          <ModalComp getJobInfo={props.getJobInfo} />

        </div>
      </div>
     
    </div>
  );
};

export default Header;
