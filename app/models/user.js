class User{
    constructor(name,password,activitiesReference){
        this.name=name;
        this.password=password;
        this.activitiesReference=activitiesReference;// <activity/int>  int=frequence/time for the act ---- never change except when you modify the activities you want to do
        this.report= new Map(); //%tage of achievment
        this.activitiesPerDay;//array of dayActivities for eof
        this.ReferenceAchievedPerDay= new Map(); //<DayActivity/ReferenceAchieved> for the week
        this.statusOfReferenceAchievedPerDay();
    }
    addActivity(activity,frequence){
        let referenceAchieved=new ReferenceAchieved(frequence,0)
        this.activitiesReference.set(activity,referenceAchieved);
        let calendar = new Calendar()
        calendar.endOfWeek().forEach(e=>{
            this.ReferenceAchievedPerDay.set(new DayActivities(e,activity),referenceAchieved);
        })
    }    
    removeActivity(activity){
        this.activitiesReference.delete(activity);
        this.ReferenceAchievedPerDay.forEach((v,k)=>{
            if (k.activity==activity) {
                this.ReferenceAchievedPerDay.delete(k)
            }
            // this.ReferenceAchievedPerDay.set(new DayActivities(e,activity),new ReferenceAchieved(frequence,0));
        })    
    }
    editActivity(day,activity,NewFrequence){
        this.activities.set(activity,NewFrequence);
        // update this.activitiesPerDay remove 1 frequence
    }
    activityDone(day,activity,achievment,){
        let dayAct = new DayActivities(day,activity)
        this.ReferenceAchievedPerDay.forEach((v,k)=>{
            if(k.equals(dayAct)){
                k.activity.progress=achievment;
                if (achievment==activity.value) {
                    v.achieved++;
                }
            }
        })
    }
    CreateReferenceAchievedPerDayForWeek(calendar){
        calendar.endOfWeek().forEach(day => {
            this.activitiesReference.forEach((value,activity) => {
                this.ReferenceAchievedPerDay.set(new DayActivities(day,new Activity(activity.name,activity.description,activity.value,activity.unit)),value);
            });
        });
    }

    statusOfReferenceAchievedPerDay(){
        let saveAct = new SaveAct();
        let date = new Date();
        let calendar=new Calendar();
        if (this.ReferenceAchievedPerDay.size === 0) {
            this.CreateReferenceAchievedPerDayForWeek(calendar);
            return;
        }
        //console.log('th',this.ReferenceAchievedPerDay.size);
        let myArray = Array.from(this.ReferenceAchievedPerDay);
        let lastElement = myArray[myArray.length - 1];
        if (calendar.anteriorDate(lastElement[0].day)) {//
            saveAct.save();
            this.CreateReferenceAchievedPerDayForWeek(calendar);
            return;
        }
    }
    activitiesOfDay(day){
        let activities = [];
        this.ReferenceAchievedPerDay.forEach((v,k)=>{
            if (k.day.equals(day)) {
                activities.push(k.activity)
            }
            // this.ReferenceAchievedPerDay.set(new DayActivities(e,activity),new ReferenceAchieved(frequence,0));
        })
        return activities
    }
    ArrayOfReferenceAchievedForActOfADay(day){
        let array=[];
        this.ReferenceAchievedPerDay.forEach((v,k) => {
            if (k.day.equals(day)) {
                array.push(v);
            }
        });
        return array;
    }
    // reportActivity(week){//report at the end of week
    //     let map = new Map();
    //     let allActivities;
    //     if(!week){
    //         let calendar=new Calendar()
    //         allActivities=this.loadActivities(calendar.day).concat(calendar.endOfMounth())
    //     }
    //     else{
    //         allActivities=this.activitiesPerDay
    //         for(let i=0 ;i<new Date().getDay();i++){//for the previous & current days
    //                 allActivities[i].activity.forEach((v,k) => {
    //                 if(map.get(k.name)!=null){
    //                     map.set(k.name,k.progress+map.get(k.name))
    //                 }
    //                 else{
    //                     map.set(k.name,k.progress)
    //                 }
    //             });
    //         }
    //         this.activitiesReference.forEach((v,k)=>{
    //             this.report.set(k.name,map.get(k.name)/v)
    //         })
    //     }
    //     return this.report;
    // }
    // formatAllActivities(){//activities of the week
    //     let calendar=new Calendar();
    //     this.activitiesPerDay=this.loadActivities(new Date().getDay()).concat(calendar.endOfWeek(this.activitiesReference));
    //     return this.activitiesPerDay;
    // }
    // save(){//create json of  usr
    //     let tabActivitiesReference = [];
    //     usr.activitiesReference.forEach((value, key)=>{
    //         tabActivitiesReference.push({key, value});
    //     });
    //     return new SaveUser(this.name,this.password,tabActivitiesReference);
    // }
    // loadActivities(xDays){//load json activities
    //     let array=[];
    //     const previousDayActivities='[{"day":"Thursday 31/8/2023","tabInter":[{"key":{"name":"Read","description":"blabla","progress":1},"value":1}]},{"day":"Wednesday 30/8/2023","tabInter":[{"key":{"name":"Read","description":"blabla","progress":1},"value":1},{"key":{"name":"Hiking","description":"blabla","progress":0.8},"value":1}]},{"day":"Tuesday 29/8/2023","tabInter":[{"key":{"name":"Read","description":"blabla","progress":1},"value":1},{"key":{"name":"Hiking","description":"blabla","progress":0.8},"value":1}]},{"day":"Monday 28/8/2023","tabInter":[{"key":{"name":"Read","description":"blabla","progress":0.3},"value":1},{"key":{"name":"Hiking","description":"blabla","progress":0.5},"value":1}]}]';
    //     //recup JSON
    //     let objects=JSON.parse(previousDayActivities);
    //     for (let i=0; i <xDays; i++) {
    //         let map= new Map();
    //         let currentObj=objects.pop()
    //         if(currentObj==null)break;
    //         currentObj.tabInter.forEach(e=>{
    //             map.set(new Activity(e.key.name,e.key.description,e.key.pages,e.key.kilometers),e.value);
    //         });
    //         array.push(new DayActivities(currentObj.day,map))
    //     }
    //     return array
    // }
}