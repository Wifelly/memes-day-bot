class Services {
    constructor() {
        this.server = '';
    }
    async getMonth (month){
        let body = JSON.stringify({month});
        let response = await fetch(`${this.server}/month-api`,
            {
                method: 'POST',
                mode: 'no-cors',
                body: body,
                headers:{
                    'Access-Control-Allow-Origin': 'no-cors',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        return await response.json();
    }
    async getAllUsers (){
        let res = await fetch(`${this.server}/api-gau`, {
            method: 'GET',
            mode: 'no-cors',
        });

        let data = await res.text();
        return data;
    }
    async getFull (day, month){
        let body = JSON.stringify({day,month});
        let response = await fetch(`${this.server}/days-full-api`,
            {
                method: 'POST',
                mode: 'no-cors',
                body: body,
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            );
        return await response.json();
    }
}
export default Services;