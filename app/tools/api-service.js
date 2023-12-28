class ApiService{
    constructor(){}
    async getUsr(){
        const baseUrl = APIROOT+'/user/1';
        const headers = {
            method: 'GET'
        };
        return fetch(baseUrl, headers).then(response => {
            if (!response.ok)
                throw new Error('Une erreur est survenue durant l\'appel HTTP.');
        
            return response.json();
        }).then(usr => {
            return new User(usr.id, usr.name, usr.password);
        });
    }
}