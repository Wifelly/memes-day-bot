import React from "react";
import './popup.css';


class DayPopup extends React.Component{
    constructor() {
        super();
        this.state = {
            loadDone: false
        }
    }
    imageLoad(){
        this.setState({loadDone:true})
    }
    closePopup(bol){
        if (bol) this.props.setActiveImage(null);
    }

    render() {
        let classModifycate = this.state.loadDone ? '' : 'popup__image-wrapper_load';
        return(
            <div className="popup" onClick={(e)=>this.closePopup(e.currentTarget == e.target)}>
                <div className={`popup__image-wrapper ${classModifycate}`}>
                    <img className='popup__image'
                         onLoad={()=>this.imageLoad()}
                         src={`/images${this.props.dayData.imageLink}.jpg`} alt="dayPhoto"/>
                    <div className="popup__loader"> </div>
                    <div className="popup__image-description">
                        <p>{this.props.dayData.day}</p>
                        <p>{this.props.dayData.month}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayPopup;