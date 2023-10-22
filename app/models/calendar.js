class Calendar{
    constructor(){
        let date = new Date();
        this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        this.day = date.getDate();
        this.mounth = date.getMonth()+1;
        this.year = date.getFullYear();
        this.dayOfWeek=this.days[date.getDay()]
        this.lastDateofMounth = new Date(this.year,this.mounth,0).getDate();
        this.currentDay = this.rightFormat(date);
    }

    rightFormat(date){
        let day = date.getDate();
        let mounth = date.getMonth()+1;
        let year = date.getFullYear();
        let dayOfWeek=this.days[date.getDay()]

        return new Day(dayOfWeek,day,mounth,year);
    }
    nextXDays(x){
        let tab=[]
        for (let i=0; i<Math.abs(x); i++){
            let currentDate = new Date();
            if (x<0) {
                currentDate.setDate(currentDate.getDate() - i);
            }else{
                currentDate.setDate(currentDate.getDate() + i);
            }
            let myDay = this.rightFormat(currentDate);
            tab.push(myDay);
        }
        return tab;
    }
    endOfWeek(){//create array with current day and next days until sunday 
        let tab=[];
        let date=new Date().getDay();
        let z=0;
        if(this.dayOfWeek==='Sunday'){
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + z);
            let myDay = this.rightFormat(currentDate);
            tab.push(myDay);
            return tab
        }
        for (let i=date; i<=7; i++){
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + z);
            let myDay = this.rightFormat(currentDate);
            tab.push(myDay);
            z++;
        }
        return tab;
    }   
    endOfMounth(){//create array with activities per day for the next days of the mounth
        let tab=[];
        let z=this.day+1;
        for (let i=this.day; i<this.lastDateofMounth; i++){
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
    /**
     * 
     * @param {*} myDate 
     * @returns boolean, if myDate strictly anterior than current date
     */
    anteriorDate(myDate){
        if (myDate.year<this.year){
            return true;
        }else if( myDate.year==this.year){
            if(myDate.mounth<this.mounth ){
                return true;
            }else if(myDate.mounth==this.mounth ){
                if(myDate.number<this.day) {
                    return true;
                }else return false;
            }else return false;
        }else return false;
    }
    currentWeek(){
        let date = new Date();
        let day=date.getDay()
        if (day===0) {
            return this.nextXDays(-7).reverse()
        }
        if(day>=1){
            return this.nextXDays(0-day+1).concat(this.endOfWeek())
        }
    }
}