export default{
	emits: [''],
	data : function(){
		return {
            aboutComponentStatus : {
                'timeline': true,
                'personality': false,
                'projects': false,
                'experience': false,
            },
		}
	},
    created() {
		this.setStyles();
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
        projectsFunc(event){
            this.setValueToFalse(this.aboutComponentStatus);
            this.aboutComponentStatus['projects'] = true;
            this.highlightButton(event);
        },        
        personalityFunc(event){
            this.setValueToFalse(this.aboutComponentStatus);
            this.aboutComponentStatus['personality'] = true;
            this.highlightButton(event);
        },
        experienceFunc(event){
            this.setValueToFalse(this.aboutComponentStatus);
            this.aboutComponentStatus['experience'] = true;
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
            this.$nextTick(() => {
                const button = document.querySelector('#first-button');
                if (button) {
                    button.classList.add('highlighted');
                } else {
                    console.error('Button with ID "first-button" not found.');
                }
            });
        },
	},
	template:
	`
    <div id="container">
        <div v-if="aboutComponentStatus['timeline']">
            <timeline />
        </div>
        <div v-if="aboutComponentStatus['personality']">
            <personality />
        </div>    
        <div v-if="aboutComponentStatus['projects']">
            <projects />
        </div>
        <div v-if="aboutComponentStatus['experience']">
            <experience />
        </div>
    </div>
    <div class="bottom-bar">
        <div id="first-button" class="bar-button" @click=timelineFunc($event)>Timeline</div>
        <div class="bar-button" @click=experienceFunc($event)>Experience</div>
        <div class="bar-button" @click=projectsFunc($event)>Projects</div>
        <div id="last-button" class="bar-button" @click=personalityFunc($event)>Personality</div>
    </div>
	`
}