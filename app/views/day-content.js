export default{
    props:['day','activities'],
	// emits: ['event'],
	methods: {
        echo:function(){
            console.log("dayyyy",this.day)
            console.log("activities",this.activities)
        }
	},
	template:
		`
        <div id="taskRemaining" class="tasksMain">
        <h2 @click="echo">REMAINING</h2>
        <activity-item v-for="activity in activities" :activity="activity"></activity-item>

        </div>
        <div id="taskDone" class="tasksMain">
            <h2>DONE</h2>
            
        </div>
		`
}