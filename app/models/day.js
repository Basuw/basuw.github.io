class Day{
    constructor(day, number,mounth,year){
        this.day=day;
        this.number=number;
        this.mounth=mounth;
        this.year=year;
    }
    equals(other) {
        if (other === this) return true; // If the two objects are the same, return true
        if (!(other instanceof Day)) return false; // If the other object is not an instance of Day, return false

        return (
            other.day === this.day &&
            other.number === this.number &&
            other.mounth === this.mounth &&
            other.year === this.year
        ); // Return true if all the properties are the same, otherwise return false
    }
}