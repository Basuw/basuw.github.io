class ApiService{
    constructor(){}
    async get(link){
        const baseUrl = `${link}`;//edit
        const headers = {
            method: 'GET'
        };
        let response = await fetch(baseUrl, headers);
        let responseJson = await response.json()
        return responseJson
    }
    async post(link,value){
        const baseUrl = `${link}`;//edit
        const headers = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        };
        fetch(baseUrl, headers).then( (response) => { 
            if (response.ok)
                console.log("Posted")
            else 
	            throw new Error('Une erreur est survenue durant l\'appel HTTP.');
        })
    }
}