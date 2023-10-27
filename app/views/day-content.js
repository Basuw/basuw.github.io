export default{
    props:['day','activities','referenceAchieved'],
	// emits: ['event'],
	methods: {
        echo:function(){
            console.log("day",this.day)
            console.log("activities",this.activities)
            console.log("referenceAchieved",this.referenceAchieved)
        }
	},
	template:
		`
        <div id="taskRemaining" class="tasksMain">
        <h2 @click="echo">REMAINING</h2>
        <activity-item v-for="activity in activities" :activity="activity" :reference-achieved="referenceAchieved.shift()"></activity-item>

        </div>
        <div id="taskDone" class="tasksMain">
            <h2>DONE</h2>
            
        </div>
		`
}