import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import Navigation from '../Navigation'
import Axios from 'axios';

class BarChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state ={
        data: {data: null}
       }
  }


  componentDidMount() {
    Axios.get('http://localhost:3000/api/jobinfo/findjobs')
    .then(res => {
      const jobs = res.data;
      console.log(jobs);
      let jobtitle = [];
      let job = [];
      jobs.forEach(element => {
        jobtitle.push(element.company);
        job.push(element.date_created)
      });
      this.setState({
        Data: {
          labels: jobtitle,
          datasets:[{
            label: 'Jobs applied to',
            data: jobs,
            backgroundColor: [
              'rgba(255,105,145,0.6)',
                       'rgba(155,100,210,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(240,134,67,0.6)',
                       'rgba(120,120,120,0.6)',
                       'rgba(250,55,197,0.6)'
            ]
          }]
        }
      });

    })
  }


   render()
   {
      return(
         <div>
           <Navigation/>
            <Bar/>
         </div>
      )
   }
}

export default BarChartComponent



