class Activity{
    constructor(name,description,time,pages,kilometers){
        this.name=name;
        this.description=description;
        this.time=time;
        this.pages=pages;
        this.kilometers=kilometers;
        this.progress=0;
    }
    equals(other) {
        if (other === this) return true; // If the two objects are the same, return true
        if (!(other instanceof Activity)) return false; // If the other object is not an instance of Activity, return false

        return (
            other.name === this.name &&
            other.description === this.description &&
            other.time === this.time &&
            other.pages === this.pages &&
            other.kilometers === this.kilometers &&
            other.progress === this.progress
        ); // Return true if all the properties are the same, otherwise return false
    }
}