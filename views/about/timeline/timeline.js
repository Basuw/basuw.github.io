import activityBloc from './activityBloc.js';

export default {
	components: {
		activityBloc
	},
	emits: [''],
	created() {
		this.loadActivities();
	},
	mounted() {
		document.addEventListener('keydown', this.handleKeydown);
	},
	beforeUnmount() {
		document.removeEventListener('keydown', this.handleKeydown);
	},
	data() {
		return {
			activities: [],
			selectedActivity: null
		};
	},
	methods: {
		async loadActivities() {
			try {
				const response = await fetch('/data/timeline.json');
				this.activities = await response.json();
			} catch (error) {
				console.error('Error loading timeline activities:', error);
			}
		},
		openDetail(activity) {
			if (activity.details) this.selectedActivity = activity;
		},
		closeDetail() {
			this.selectedActivity = null;
		},
		handleKeydown(e) {
			if (e.key === 'Escape') this.closeDetail();
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
				:details="activity.details"
				:position="activity.position"
				@select="openDetail(activity)"
			></activityBloc>
			<div class="timeline-circle"></div>
		</template>
	</div>

	<Teleport to="body">
		<div v-if="selectedActivity" class="tl-popup-overlay" @click.self="closeDetail">
			<div class="tl-popup-card">
				<button type="button" class="tl-popup-close" @click="closeDetail">&times;</button>

				<div class="tl-popup-header">
					<div class="tl-popup-icon">
						<i :class="selectedActivity.iconName"></i>
					</div>
					<div class="tl-popup-meta">
						<span class="tl-popup-date">{{ selectedActivity.date }}</span>
						<span v-if="selectedActivity.isRelevant" class="tl-popup-badge">Still relevant</span>
					</div>
				</div>

				<p class="tl-popup-title">{{ selectedActivity.description }}</p>
				<p class="tl-popup-details">{{ selectedActivity.details }}</p>
			</div>
		</div>
	</Teleport>
	`
}
