import React from "react";

class DayItem extends React.Component{
    render() {
        let {day, month, name, imageLink} = this.props.data;
        let dayData = {name: "День солёного пловчика", day, month, imageLink};
        return(
            <div className="day-item" onClick={()=>this.props.setActiveImage(dayData)}>
                <p className="day-item__day">{day}</p>
                <p className="day-item__month">{month}</p>
                <p className="day-item__name">{name}</p>
            </div>
        )
    }
}

export default DayItem;