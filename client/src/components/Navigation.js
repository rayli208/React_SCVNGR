import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="row text-center row-black">
        <div className="col-2">
        </div>
        <div className="col-2">
        <Link to="/dashboard" className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
            <i className="fas fa-home"></i>
        </Link>
        </div>
        <div className="col-2">
        <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
          <i className="fas fa-user-alt"></i>
        </Link>
        </div>
        <div className="col-2">
        <Link to="/chart" className={window.location.pathname === "/chart" ? "nav-link active" : "nav-link"}>
           <i className="fas fa-chart-bar"></i>
        </Link>
        </div>
        <div className="col-2">
        <Link to="/" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
            <i className="fas fa-sign-out-alt"></i>
        </Link>
        </div>
        <div className="col-2">
        </div>
      </div>
    </div>
  );
};


export default Navigation;
