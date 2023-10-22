let activities = [new Activity('Read','blabla'),new Activity('Hiking','blabla'),new Activity('Learning','blabla')]
let mapp= new Map();


mapp.set(activities[0],1)
mapp.set(activities[1],2)

// console.log('mapp',mapp)
// console.log('mapp',mapp.get(activities[0]))


let usr = new User('leBast','oueoue',mapp);

usr.addActivity(activities[2],4);
usr.removeActivity(activities[2]);
usr.addActivity(activities[1],4);


// usr.activityDone("Tuesday 29/8/2023",activities[0],0.5);
// usr.activityDone("Tuesday 29/8/2023",activities[1],1);
//usr.reportActivity(true);
//console.log(usr.reportActivity(false));
let calendar = new Calendar();
let date = new Date();
let bidule =  new DayActivities(calendar.rightFormat(date),activities[0]);


let currentDate = new Date();
currentDate.setDate(currentDate.getDate()-4);
let myDayAnterior = calendar.rightFormat(currentDate);
currentDate.setDate(currentDate.getDate()+4);
let myDayUlterior = calendar.rightFormat(currentDate);

console.log('myDayAnterior',myDayAnterior);
console.log('myDayUlterior',myDayUlterior);
console.log('TRUE',calendar.anteriorDate(myDayAnterior));
console.log('FALSE',calendar.anteriorDate(myDayUlterior));





usr.activityDone(calendar.rightFormat(date),activities[1],1);


calendar.nextXDays(10);
calendar.endOfWeek(usr.activitiesReference);
// console.log("cal, eofMounth",calendar.endOfMounth(usr.activitiesReference));

// console.log(activities[1]);
// console.log(`${day}/${mounth}/${year}`);
// console.log(`date : ${date}`);
// console.log(`lastDateofMounth : ${lastDateofMounth}`);

console.log("usr",usr)
let json = JSON.stringify(usr);
// console.log("usr json",json)
// console.log("usr Save",usr.save())
// console.log("usr Save",JSON.stringify(usr.save()))
