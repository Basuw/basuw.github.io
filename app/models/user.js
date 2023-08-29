class User{
    constructor(name,password,activitiesReference){
        this.name=name;
        this.password=password;
        this.activitiesReference=activitiesReference;//never change except
        this.activities= new Map(activitiesReference);//change when activity is done
        this.report= new Map();
        this.activitiesPerDay;//array of dayActivities
    }
    addActivity(activity,frequence){
        this.activitiesReference.set(activity,frequence);
        this.activities.set(activity,frequence);
        let calendar=new Calendar();
        this.activitiesPerDay=calendar.endOfWeek(this.activities)
    }    
    removeActivity(activity){
        this.activitiesReference.delete(activity);
        this.activities.delete(activity);
        let calendar=new Calendar();
        this.activitiesPerDay=calendar.endOfWeek(this.activities)
    }
    editActivity(activity,NewFrequence){
        this.activities.set(activity,NewFrequence);
        // update this.activitiesPerDay remove 1 frequence
    }
    activityDone(activity){
        let currentFrequence=this.activities.get(activity)
        let calendar = new Calendar()
        if(currentFrequence>0){
            this.activities.set(activity,currentFrequence-1);
            this.activitiesPerDay.splice(0,this.activitiesPerDay.length)//empty array
            this.activitiesPerDay=calendar.endOfWeek(this.activities);//new value for the current date
        }
    }
    reportActivity(){//report at the end of week
        this.activitiesReference.forEach((v,k)=> {
            this.report.set(k,Math.abs(this.activities.get(k)-v)/v);//%tage
        });
    }
}