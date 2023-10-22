export default{
    props: {
        day: Day,
        Activities:[]
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
        <div class="task">
            <img src="/activities/icon/tasks/magic-book.png" alt="imgTask" class="imgTask"/>
            <span class="taskName"> Lire </span>
        </div>
    </div>
    <div id="taskDone" class="tasksMain">
        <h2>DONE</h2>
        <div class="task">
            <img src="/activities/icon/tasks/hiking.png" alt="imgTask" class="imgTask"/>
            <div class="vertical">
                <span class="taskName"> Randonnée </span>
                <span class="frequence"> twice a week</span>
            </div>
            <div class="vertical">
                <span class="value">20</span>
                <span class="unit">minutes</span>
            </div>
        </div>
    </div>
		`
}