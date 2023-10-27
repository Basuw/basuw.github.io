export default{
    props: {
        activity:Activity,
        referenceAchieved:ReferenceAchieved
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
                <span class="taskName"> {{activity.name}} </span>
                <span class="frequence"> twice a week</span>
                <span class="frequence"> {{referenceAchieved.achieved}}/{{referenceAchieved.reference}}</span>
            </div>
            <div class="vertical">
                <span class="value">20</span>
                <span class="unit">minutes</span>
            </div>
        </div>
        
		`
}