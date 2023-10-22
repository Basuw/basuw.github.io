export default{
    props: {
        day: Day,
        activities:[]
    },
	// emits: ['event'],
	methods: {
		// myFunction: function(){
		// 	this.$emit(event, param)// throw an event
		// 	return
		// }
	},
	template:
		`
        <div id="taskRemaining" class="tasksMain">
        <h2>REMAINING</h2>

        </div>
        <div id="taskDone" class="tasksMain">
            <h2>DONE</h2>
            
        </div>
		`
}