export default{
    props:['day','activities','referenceAchieved'],
    emits: ['achievment'],
	methods: {
        achievment:function(activity, value){
            this.$emit("achievment",activity, value);
        },
	},
	template:
		`
        <div id="taskRemaining" class="tasksMain">
        <h2>REMAINING</h2>
        <activity-item v-for="activity in activities" :activity="activity" :reference-achieved="referenceAchieved.shift()" @achievment="achievment"></activity-item>

        </div>
        <div id="taskDone" class="tasksMain">
            <h2>DONE</h2>
            
        </div>
		`
}