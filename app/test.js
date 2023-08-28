let activities = [new Activity('Read','blabla'),new Activity('Hiking','blabla'),new Activity('Learning','blabla')]
let mapp= new Map();


mapp.set(activities[0],1)
mapp.set(activities[1],2)

let usr = new User('leBast','oueoue',mapp);
usr.addActivity(activities[2],4);
usr.removeActivity(activities[2]);
usr.addActivity(activities[1],4);
usr.activityDone(activities[1]);
usr.activityDone(activities[0]);
usr.reportActivity();


let date = new Date();
let day = date.getDate();
let mounth = date.getMonth()+1;
let year = date.getFullYear();
let lastDateofMounth = new Date(year,mounth,0).getDate();

let calendar = new Calendar();
calendar.nextSevenDays();

console.log(activities[1]);
console.log("usr",usr);
console.log(`${day}/${mounth}/${year}`);
console.log(`date : ${date}`);
console.log(`lastDateofMounth : ${lastDateofMounth}`);

