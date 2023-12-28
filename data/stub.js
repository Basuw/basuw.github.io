class Stub{
    constructor(){
        let activities = [new Activity('Read','blabla',30,"page"),new Activity('Hiking','blabla',5,"km"),new Activity('Learning','blabla',30,"min")]
        let map= new Map();
        map.set(new Activity('Read','blabla',30,"page"),new ReferenceAchieved(1,0))
        map.set(new Activity('Hiking','blabla',5,"km"),new ReferenceAchieved(2,0))
        this.user=new User(1,'leBast','oueoue',map);
    }
}