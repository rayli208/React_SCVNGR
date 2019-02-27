import React from "react";
import MainPic from "../images/scvngr_main-header-05.png";
import ModalComp from "./Modal";

const Header = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <button
            type="“button”"
            className="btn btn-outline-light"
            id="btn-signout"
          >
            Log out
          </button>
          <img src={MainPic} className="logoHeader" alt="SCVNGR Flat Logo" />
          <br />
          <ModalComp/>

        </div>
      </div>
     
    </div>
  );
};

export default Header;
