export default{
    props: {
        day: Day
    },
	emits: ['selected-day'],
	methods: {
		clicked: function(){
			this.$emit('selected-day', this.day)// throw an event
			return
		}
	},
	template:
		`
            <div @click="clicked" class="dayChoice" style="cursor: pointer" v-on:click="selectedDay">
                <span class="dayChoiceNumber"> {{day.number}}</span>
                <span class="dayChoiceDay"> {{day.day}}</span>
            </div>
		`
}