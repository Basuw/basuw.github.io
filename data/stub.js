class Stub{
    constructor(){
        let activities = [new Activity('Read','blabla'),new Activity('Hiking','blabla'),new Activity('Learning','blabla')]
        let map= new Map();
        map.set(activities[0],1)
        map.set(activities[1],2)
        this.user=new User('leBast','oueoue',map);
    }
}