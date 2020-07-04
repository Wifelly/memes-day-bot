class Services {
    async getMonth (month){
        let body = JSON.stringify({month});
        let response = await fetch('/month-api',
            {
                method: 'POST',
                body: body,
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
        );
        return await response.json();
    }
    async getDay (){

    }
    async getFull (day, month){
        let body = JSON.stringify({day,month});
        let response = await fetch('/days-full-api',
            {
                method: 'POST',
                body: body,
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
            );
        return await response.json();
    }
}
export default Services;