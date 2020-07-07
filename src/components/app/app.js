import React from "react";
import Load from "../load/load";
import DayList from "../dayList/dayList";
import Services from "../../service/services";
import DayPopup from "../dayPopup/dayPopup";
import Navigate from "../navigate/navigate";

class App extends React.Component{
    constructor() {
        super();
        this.services = new Services();
        this.setActiveImage = this.setActiveImage.bind(this);
        this.updateMonth = this.updateMonth.bind(this);
        this.state = {
            dateNavigation: new Date(),
            dayData: null,
            loading: true,
            data: {}
        }
    }
    setActiveImage(dayData){
        this.setState({...this.state, dayData})
    }
    updateMonth(n){
        let cd = this.state.dateNavigation;
        let monthNum = cd.getMonth() + n;
        let newDate = new Date(cd.setMonth(monthNum));
        this.services.getMonth(newDate.getMonth())
            .then(data => this.setState({...this.state, data: data, loading: false }))
        this.setState({...this.state, dateNavigation: newDate, loading: true});
    }

    componentDidMount() {
        const date = new Date();
        const month = date.getMonth();
        const day = date.getDate();
        Promise.all([
            this.services.getFull(day, month),
            new Promise((res)=> setTimeout(()=>res(), 1000))
        ]).then(([data]) => this.setState({loading: false, dayData: data.currentDay, data }));
        this.getAllUsers();
    }

    getAllUsers(){
        let gau = document.cookie.includes('gau')
        if (gau) return this.services.getAllUsers().then(data=>console.log(data));
    }

    render() {
        if (this.state.loading) return <Load />

        return(
            <main className={`main main_${this.state.loading ? 'load' : 'content'}`}>
                <DayList data={this.state.data} setActiveImage={this.setActiveImage} />
                { this.state.dayData ? <DayPopup dayData={this.state.dayData} setActiveImage={this.setActiveImage} /> : null }
                <Navigate updateMonth={this.updateMonth} date={this.state.dateNavigation} />
            </main>
        )
    }
}

export default App;