class ReferenceAchieved{
    constructor(reference,achieved){
        this.reference=reference;
        this.achieved=achieved;
    }
    equals(other) {
        if (other === this) return true; // If the two objects are the same, return true
        if (!(other instanceof ReferenceAchieved)) return false; // If the other object is not an instance of ReferenceAchieved, return false

        return (
            this.reference === other.reference &&
            this.achieved === other.achieved
        ); // Return true if the 'reference' and 'achieved' properties are the same, otherwise return false
    }
}