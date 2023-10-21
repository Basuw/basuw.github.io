class SaveAct{
    constructor(){}
    save(){
        var fs = require('fs');
        const filePath = '/data/activities.json';
        fs.writeFile(filePath, jsonData, (err) => {
            if (err) {
                console.error('Error writing JSON to file', err);
            } else {
                console.log('JSON data has been saved to', filePath);
            }
        });
    }
}