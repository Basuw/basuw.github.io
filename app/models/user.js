class User{
    constructor(name,password,activitiesReference){
        this.name=name;
        this.password=password;
        this.activitiesReference=activitiesReference;//never change except when you modify the activities you want to do
        this.report= new Map(); //%tage of achievment
        this.activitiesPerDay;//array of dayActivities for eof
    }
    addActivity(activity,frequence){
        this.activitiesReference.set(activity,frequence);
        this.formatAllActivities()
    }    
    removeActivity(activity){
        this.activitiesReference.delete(activity);
        this.formatAllActivities()
    }
    editActivity(activity,NewFrequence){
        this.activities.set(activity,NewFrequence);
        // update this.activitiesPerDay remove 1 frequence
    }
    activityDone(day,activity,progress){ //TO DO
        this.activitiesPerDay.forEach((e)=>{
            if(e.day==day){
                e.activity.forEach((v,k)=>{
                    if(k.name==activity.name){
                        k.progress=progress;
                    }
                })
            }
        });
    }
    reportActivity(week){//report at the end of week
        let map = new Map();
        for(let i=0 ;i<new Date().getDay();i++){//for the previous & current days
            this.activitiesPerDay[i].activity.forEach((v,k) => {
                if(map.get(k.name)!=null){
                    map.set(k.name,k.progress+map.get(k.name))
                }
                else{
                    map.set(k.name,k.progress)
                }
            });
        }
        this.activitiesReference.forEach((v,k)=>{
            this.report.set(k.name,map.get(k.name)/v)
        })
        return this.report;
    }
    formatAllActivities(){//activities of the week
        let calendar=new Calendar();
        this.activitiesPerDay=this.loadActivities(new Date().getDay()).concat(calendar.endOfWeek(this.activitiesReference));
        return this.activitiesPerDay;
    }
    save(){//create json of  usr
        let tabActivitiesReference = [];
        usr.activitiesReference.forEach((value, key)=>{
            tabActivitiesReference.push({key, value});
        });
        return new SaveUser(this.name,this.password,tabActivitiesReference);
    }
    loadActivities(xDays){//load json activities
        xDays--;//TO DELETE merge current day
        let array=[];
        const previousDayActivities='[{"day":"Tuesday 29/8/2023","tabInter":[{"key":{"name":"Read","description":"blabla","progress":1},"value":1},{"key":{"name":"Hiking","description":"blabla","progress":0.8},"value":1}]},{"day":"Monday 28/8/2023","tabInter":[{"key":{"name":"Read","description":"blabla","progress":0.3},"value":1},{"key":{"name":"Hiking","description":"blabla","progress":0.5},"value":1}]}]';
        //recup JSON
        let objects=JSON.parse(previousDayActivities);
        for (let i=0; i <xDays; i++) {
            let map= new Map();
            let currentObj=objects.pop()
            currentObj.tabInter.forEach(e=>{
                map.set(new Activity(e.key.name,e.key.description,e.key.pages,e.key.kilometers),e.value);
            });
            array.push(new DayActivities(currentObj.day,map))
        }
        return array
    }
}