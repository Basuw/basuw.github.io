export default{
	emits: [''],
	data : function(){
		return {
            aboutComponentStatus : {
                'timeline': true,
            },
		}
	},
	methods: {
        setValueToFalse(componentStatus){
            for (const key in componentStatus) {
                componentStatus[key] = false;
            }
        },
        timelineFunc(event){
            this.setValueToFalse(this.aboutComponentStatus);
            this.aboutComponentStatus['timeline'] = true;
            this.highlightButton(event);
        },
        highlightButton(event) {
            // Remove highlight from all buttons
            const buttons = document.querySelectorAll('.bar-button');
            buttons.forEach(btn => btn.classList.remove('highlighted'));

            // Add highlight to the clicked button
            event.target.classList.add('highlighted');
        },
        setStyles(){
            const button = document.querySelectorAll('#first-button');
            button.classList.add('highlighted');
        }
	},
	template:
	`
    <div v-if="aboutComponentStatus['timeline']">
        <timeline />
    </div>
    <div class="bottom-bar">
        <div id="first-button" class="bar-button" @click=timelineFunc($event)>Timeline</div>
        <div class="bar-button" @click=highlightButton($event)>Button 2</div>
        <div class="bar-button" @click=highlightButton($event)>Button 3</div>
        <div id="last-button" class="bar-button" @click=highlightButton($event)>Button 4</div>
    </div>
	`
}