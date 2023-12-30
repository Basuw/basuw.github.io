class Activity{
    constructor(id,name,description,value,unit,icon){
        this.id=id
        this.name=name;
        this.description=description;
        this.value=value;
        this.unit=unit;
        this.icon=icon
        this.progress=0;//nb per week effectuated
    }
    equals(other) {
        if (other === this) return true; // If the two objects are the same, return true
        if (!(other instanceof Activity)) return false; // If the other object is not an instance of Activity, return false
        return (
            other.id === this.id &&
            other.name === this.name &&
            other.description === this.description &&
            other.value === this.value &&
            other.unit === this.unit&&
            other.progress === this.progress
        ); // Return true if all the properties are the same, otherwise return false
    }
}