class Calendar{
    constructor(){
        let date = new Date();
        const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        this.day = date.getDate();
        this.mounth = date.getMonth()+1;
        this.year = date.getFullYear();
        this.dayOfWeek=days[date.getDay()-1]
        this.lastDateofMounth = new Date(this.year,this.mounth,0).getDate();
    }

    rightFormat(date){
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        let day = date.getDate();
        let mounth = date.getMonth()+1;
        let year = date.getFullYear();
        let dayOfWeek=days[date.getDay()]
        return `${dayOfWeek} ${day}/${mounth}/${year}`
    }
    nextXDays(x){
        let tab=[]
        for (let i=0; i<x; i++){
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + i);
            let myDay = this.rightFormat(currentDate);
            tab.push(myDay);
        }
        console.log("7d",tab);
        return tab;
    }
    endOfWeek(activities){//create array with activities per day
        let tab=[];
        let date=new Date().getDay();
        let z=0;
        for (let i=date; i<=7; i++){
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + z);
            let myDay = this.rightFormat(currentDate);
            let map=new Map();
            activities.forEach((v,k) => {
                if(v>0){
                    map.set(k,v);
                }
            });
            tab.push(new DayActivities(myDay,map));
            z++;
        }
        return tab;
    }
    
}