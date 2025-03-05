import activityBloc from './activityBloc.js';

export default {
	components: {
		activityBloc
	},
	emits: [''],
	data : function(){
		return {
		}
	},
	methods: {
	},
	template:
	`
	<div id="time">
		<activityBloc
			:isRelevant="false"
			iconName="fas fa-graduation-cap"
			date="2021"
			description="Obtention of baccalauréat with honors in Math and Physics."
			position="left"
		></activityBloc>
		<div class="timeline-circle"></div>
		<activityBloc
			:isRelevant="true"
			iconName="fas fa-keyboard"
			date="2023"
			description="Started working for a famous tire manufacturer as trainee devops"
			position="right"
		></activityBloc>
		<div class="timeline-circle"></div>
		<activityBloc
			:isRelevant="false"
			iconName="fas fa-laptop-code"
			date="2023"
			description="Obtention of DUT in Computer Science at IUT Informatique Aubiere."
			position="left"
		></activityBloc>
		<div class="timeline-circle"></div>
		<activityBloc
			:isRelevant="true"
			iconName="fas fa-fire-extinguisher"
			date="2024"
			description="Started my engagement as a volunteer firefighter."
			position="right"
		></activityBloc>
		<div class="timeline-circle"></div>
		<activityBloc
			:isRelevant="true"
			iconName="fas fa-chalkboard-teacher"
			date="2024"
			description="Started giving private Maths lesson."
			position="left"
		></activityBloc>
		<div class="timeline-circle"></div>
		<activityBloc
			:isRelevant="true"
			iconName="fas fa-user-graduate"
			date="2025"
			description="2nd year of engineering degree in Computer Science at ISIMA."
			position="right"
		></activityBloc>
		<div class="timeline-circle"></div>
	</div>
	`
}