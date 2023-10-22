class DayActivities{
    constructor(day,activity){
        this.day=day;
        this.activity=activity;
    }
    equals(other) {
        if (other === this) return true; // If the two objects are the same, return true
        if (!(other instanceof DayActivities)) return false; // If the other object is not an instance of DayActivities, return false

        return (
            this.day.equals(other.day) &&
            this.activity.equals(other.activity)
            // other.day === this.day && other.activity === this.activity
        ); // Return true if the 'day' and 'activity' properties are the same, otherwise return false
    }
}