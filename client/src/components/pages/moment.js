import React  from 'react';
import Moment from 'react-moment';
 
export default class Date extends React.Component {
    render() {
        const date = new Date();
        console.log(date);
        return (
            <div>
                <Moment> {date} </Moment>
            </div>
        );
    }
}