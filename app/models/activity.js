class Activity{
    constructor(name,description,value,unit){
        this.name=name;
        this.description=description;
        this.value=value;
        this.unit=unit;
        this.progress=0;
    }
    equals(other) {
        if (other === this) return true; // If the two objects are the same, return true
        if (!(other instanceof Activity)) return false; // If the other object is not an instance of Activity, return false

        return (
            other.name === this.name &&
            other.description === this.description &&
            other.value === this.value &&
            other.unit === this.unity&&
            other.progress === this.progress
        ); // Return true if all the properties are the same, otherwise return false
    }
}