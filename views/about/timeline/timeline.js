import activityBloc from './activityBloc.js';

export default {
	components: {
		activityBloc
	},
	emits: [''],
	created() {
		this.loadActivities();
	},
	data : function(){
		return {
			activities: []
		}
	},
	methods: {
		async loadActivities() {
			try {
				const response = await fetch('/data/timeline.json');
				const activitiesData = await response.json();
				this.activities = activitiesData;
			} catch (error) {
				console.error('Error loading timeline activities:', error);
			}
		}
	},
	template:
	`
	<div id="time">
		<div class="timeline-line"></div>
		<template v-for="(activity, index) in activities" :key="index">
			<activityBloc
				:isRelevant="activity.isRelevant"
				:iconName="activity.iconName"
				:date="activity.date"
				:description="activity.description"
				:position="activity.position"
			></activityBloc>
			<div class="timeline-circle"></div>
		</template>
	</div>
	`
}