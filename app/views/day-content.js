export default{
    props:['day','activities','referenceAchieved'],
    emits: ['achievment','removeachievment'],
	methods: {
        achievment:function(activity, value){
            this.$emit("achievment",activity, value);
        },
        removeachievment:function(activity, value){
            this.$emit("removeachievment",activity, value);
        },
	},
	template:
		`
        <div id="taskRemaining" class="tasksMain">
        <h2>REMAINING</h2>
        <activity-item v-for="activity in activities" :activity="activity" :reference-achieved="referenceAchieved.shift()" @achievment="achievment" @removeachievment='removeachievment'></activity-item>

        </div>
        <div id="taskDone" class="tasksMain">
            <h2>DONE</h2>
            
        </div>
		`
}