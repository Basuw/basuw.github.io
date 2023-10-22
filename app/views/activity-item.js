export default{
    props: {
        activity
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
		`
}