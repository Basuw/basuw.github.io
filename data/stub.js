class Stub{
    constructor(){
        let activities = [new Activity('Read','blabla',30,"page"),new Activity('Hiking','blabla',5,"km"),new Activity('Learning','blabla',30,"min")]
        let map= new Map();
        map.set(activities[0],1)
        map.set(activities[1],2)
        this.user=new User('leBast','oueoue',map);
    }
}