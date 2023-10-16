let activities = [new Activity('Read','blabla'),new Activity('Hiking','blabla'),new Activity('Learning','blabla')]
let mapp= new Map();


mapp.set(activities[0],1)
mapp.set(activities[1],2)

let usr = new User('leBast','oueoue',mapp);
usr.addActivity(activities[2],4);
usr.removeActivity(activities[2]);
usr.addActivity(activities[1],4);
usr.activityDone("Monday 28/8/2023",activities[1],1);
usr.activityDone("Tuesday 29/8/2023",activities[0],0.5);
usr.activityDone("Tuesday 29/8/2023",activities[1],1);
//usr.reportActivity(true);
//console.log(usr.reportActivity(false));


let date = new Date();
let day = date.getDate();
let mounth = date.getMonth()+1;
let year = date.getFullYear();
let lastDateofMounth = new Date(year,mounth,0).getDate();

let calendar = new Calendar();
calendar.nextXDays(10);
calendar.endOfWeek(usr.activitiesReference);
console.log("cal, eofMounth",calendar.endOfMounth(usr.activitiesReference));

// console.log(activities[1]);
// console.log(`${day}/${mounth}/${year}`);
// console.log(`date : ${date}`);
// console.log(`lastDateofMounth : ${lastDateofMounth}`);

console.log("usr",usr)
let json = JSON.stringify(usr);
// console.log("usr json",json)
// console.log("usr Save",usr.save())
// console.log("usr Save",JSON.stringify(usr.save()))

usr.CreateReferenceAchievedPerDayForWeek();