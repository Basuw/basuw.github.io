class Calendar{
    constructor(){
        let date = new Date();
        const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        this.day = date.getDate();
        this.mounth = date.getMonth()+1;
        this.year = date.getFullYear();
        this.dayOfWeek=days[date.getDay()-1]
        this.lastDateofMounth = new Date(year,mounth,0).getDate();
    }

    rightFormat(date){
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        let day = date.getDate();
        let mounth = date.getMonth()+1;
        let year = date.getFullYear();
        let dayOfWeek=days[date.getDay()]
        return `${dayOfWeek} ${day}/${mounth}/${year}`
    }
    nextSevenDays(){
        for (let i=0; i<7; i++){
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + i);
            let myDay = this.rightFormat(currentDate);
            console.log(myDay);
        }
    }
}