export default{
    props: {
        day: Day
    },
	emits: ['selectedDay'],
	methods: {
		clicked: function(){
			this.$emit('selectedDay', this.day)// throw an event
			return
		}
	},
	template:
		`
            <div @click="clicked" class="dayChoice" style="cursor: pointer">
                <span class="dayChoiceNumber"> {{day.number}}</span>
                <span class="dayChoiceDay"> {{day.day}}</span>
            </div>
		`
}