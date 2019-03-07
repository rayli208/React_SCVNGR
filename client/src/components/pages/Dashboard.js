import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Card from "../pages/Card"


const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Header />
     <div className="row">
          <div className="col-4 bg-dpurp white"><h2>Applied</h2>
            <Card />
          </div>
          <div className="col-4 bg-purp white"><h2>Heard Back</h2></div>
          <div className="col-4 bg-lpurp white"><h2>Offer</h2></div>
        </div>

        <div className="row">
          <div id="applied" className="col-4 bg-dpurp jobList"></div>
          <div id="heardBack" className="col-4 bg-purp jobList">
          
          </div>
          <div id="offer" className="col-4 bg-lpurp jobList">
          </div>
        </div>
      </div>
       );
};

export default Dashboard;
