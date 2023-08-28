class User{
    constructor(name,password,activitiesReference){
        this.name=name;
        this.password=password;
        this.activitiesReference=activitiesReference;
        this.activities= new Map(activitiesReference);
        this.report= new Map();
    }
    addActivity(activity,frequence){
        this.activitiesReference.set(activity,frequence);
        this.activities.set(activity,frequence);
    }    
    removeActivity(activity){
        this.activitiesReference.delete(activity);
        this.activities.delete(activity);
    }
    editActivity(activity,NewFrequence){
        this.activities.set(activity,NewFrequence);
    }
    activityDone(activity){
        let currentFrequence=this.activities.get(activity)
        if(currentFrequence>0){
            this.activities.set(activity,currentFrequence-1);
        }
    }
    reportActivity(){
        this.activitiesReference.forEach((v,k)=> {
            this.report.set(k,Math.abs(this.activities.get(k)-v)/v);//%tage
        });
    }
}