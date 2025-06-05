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
            isBottomBarVisible: true,
            hideTimeout: null,
            isHoveringBottomBar: false,
            isFirstLoad: true, // Ajouter une variable pour détecter le premier chargement
		}
	},
    created() {
		this.setStyles();
        this.startHideTimer();
	},
    mounted() {
        this.setupEventListeners();
    },
    beforeUnmount() {
        this.clearHideTimer();
        this.removeEventListeners();
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
            this.startHideTimer(); // Redémarrer le timer après une action
        },
        projectsFunc(event){
            this.setValueToFalse(this.aboutComponentStatus);
            this.aboutComponentStatus['projects'] = true;
            this.highlightButton(event);
            this.startHideTimer();
        },        
        personalityFunc(event){
            this.setValueToFalse(this.aboutComponentStatus);
            this.aboutComponentStatus['personality'] = true;
            this.highlightButton(event);
            this.startHideTimer();
        },
        experienceFunc(event){
            this.setValueToFalse(this.aboutComponentStatus);
            this.aboutComponentStatus['experience'] = true;
            this.highlightButton(event);
            this.startHideTimer();
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
        startHideTimer() {
            this.clearHideTimer();
            this.hideTimeout = setTimeout(() => {
                if (!this.isHoveringBottomBar) {
                    this.isBottomBarVisible = false;
                    this.isFirstLoad = false; // Marquer que le premier affichage est terminé
                }
            }, 5000); // Délai de 5 secondes comme demandé
        },
        clearHideTimer() {
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
            }
        },
        showBottomBar() {
            this.isBottomBarVisible = true;
            this.startHideTimer();
        },
        hideBottomBar() {
            this.isBottomBarVisible = false;
        },
        onBottomBarMouseEnter() {
            this.isHoveringBottomBar = true;
            this.clearHideTimer();
            this.isBottomBarVisible = true;
        },
        onBottomBarMouseLeave() {
            this.isHoveringBottomBar = false;
            this.startHideTimer();
        },
        onIndicatorClick() {
            this.showBottomBar();
        },
        onIndicatorHover() {
            this.showBottomBar();
        },
        setupEventListeners() {
            // Écouter les clics globaux pour fermer la barre si on clique ailleurs
            document.addEventListener('click', this.onDocumentClick);
        },
        removeEventListeners() {
            document.removeEventListener('click', this.onDocumentClick);
        },
        onDocumentClick(event) {
            // Ne pas fermer automatiquement pendant les 5 premières secondes du premier chargement
            if (this.isFirstLoad) {
                return;
            }
            
            // Vérifier si le clic est en dehors de la bottom-bar et de l'indicateur
            const bottomBar = document.querySelector('.bottom-bar');
            const indicator = document.querySelector('.ios-indicator');
            
            if (bottomBar && !bottomBar.contains(event.target) && 
                indicator && !indicator.contains(event.target)) {
                this.hideBottomBar();
            }
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
    
    <!-- Barre de navigation principale avec animation -->
    <div 
        class="bottom-bar" 
        :class="{ 'hidden': !isBottomBarVisible }"
        @mouseenter="onBottomBarMouseEnter"
        @mouseleave="onBottomBarMouseLeave"
    >
        <div id="first-button" class="bar-button" @click="timelineFunc($event)">Timeline</div>
        <div class="bar-button" @click="experienceFunc($event)">Experience</div>
        <div class="bar-button" @click="projectsFunc($event)">Projects</div>
        <div id="last-button" class="bar-button" @click="personalityFunc($event)">Personality</div>
    </div>
    
    <!-- Petite barre indicatrice iOS-style -->
    <div 
        class="ios-indicator" 
        :class="{ 'visible': !isBottomBarVisible }"
        @click="onIndicatorClick"
        @mouseenter="onIndicatorHover"
    >
        <div class="indicator-bar"></div>
    </div>
	`
}