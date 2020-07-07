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
    async getAllUsers (){
        let res = await fetch('/api-gau');
        let data = await res.text();
        return data;
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