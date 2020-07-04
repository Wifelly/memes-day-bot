import React from "react";
import './load.css';

class Load extends React.Component{
    render() {
        return(
            <div className="loading-main">
                <div className="loading-main__loader">
                    <div className="loading-main__circle"></div>
                    <div className="loading-main__circle"></div>
                    <div className="loading-main__circle"></div>
                </div>
            </div>
        )
    }
}

export default Load;