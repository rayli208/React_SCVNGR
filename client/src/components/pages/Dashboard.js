import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";


const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Header />
     <div class="row">
          <div class="col-4 bg-dpurp white"><h2>Applied</h2></div>
          <div class="col-4 bg-purp white"><h2>Heard Back</h2></div>
          <div class="col-4 bg-lpurp white"><h2>Offer</h2></div>
        </div>

        <div class="row">
          <div id="applied" class="col-4 bg-dpurp jobList"></div>
          <div id="heardBack" class="col-4 bg-purp jobList">
          </div>
          <div id="offer" class="col-4 bg-lpurp jobList">
          </div>
        </div>
      </div>
       );
};

export default Dashboard;
