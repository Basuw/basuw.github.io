export default{
    props: {
        day: Day
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
            <div class="dayChoice" style="cursor: pointer" v-on:click="selectedDay">
                <span class="dayChoiceNumber"> {{day.number}}</span>
                <span class="dayChoiceDay"> {{day.day}}</span>
            </div>
		`
}