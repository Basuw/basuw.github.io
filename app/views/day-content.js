export default{
    props:['day','activities'],
	// emits: ['event'],
	methods: {
        echo(){
            console.log("day",day)
            console.log("activities",activities)
        }
	},
	template:
		`
        <div id="taskRemaining" class="tasksMain">
        <h2 @click="echo">REMAINING</h2>
        <activity-item></activity-item>

        </div>
        <div id="taskDone" class="tasksMain">
            <h2>DONE</h2>
            
        </div>
		`
}