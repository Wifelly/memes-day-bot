
class Treatment {
    constructor(yearDays) {
        this.yearDays = yearDays;
    }

    getDaysInCurrentMonth(day, month){
        let data = {
            currentDay: this.yearDays[month][day-1],
            currentMonth: this.yearDays[month]
        };
        return data;
    }
    getMonth(month){
        return {currentMonth: this.yearDays[month]};
    }
}


module.exports =  Treatment;
