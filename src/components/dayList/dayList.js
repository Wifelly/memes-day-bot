import React from "react";
import DayItem from "../dayItem/dayItem";

class DayList extends React.Component{
    render() {

        let daysMap = this.props.data.currentMonth.map((item, idx)=>{
            return <DayItem key={idx} setActiveImage={this.props.setActiveImage} data={{...item, day:idx+1}} />
        })


        return(
            <React.Fragment>
                { daysMap }
            </React.Fragment>
        )
    }
}

export default DayList;