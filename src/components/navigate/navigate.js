import React from "react";
import './navigate.css'

class Navigate extends React.Component{
    constructor() {
        super();
        this.state = {
            loadDone: false
        }
    }
    addNum(num){
        if (String(num).length === 1) return `0${num}`;
        return num;
    }

    render() {
        let { updateMonth } = this.props;
        let { date } = this.props;
        return(
            <div className="navigate">
                <p className="navigate__but" onClick={()=>updateMonth(-1)}>&#8701;</p>
                <p className="navigate__view">{`${this.addNum(date.getDate())}.${this.addNum(date.getMonth())}.${date.getFullYear()}`}</p>
                <p className="navigate__but" onClick={()=>updateMonth(1)}>&#8702;</p>
            </div>
        )
    }
}

export default Navigate;