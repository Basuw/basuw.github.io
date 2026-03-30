export default {
	props: {
		isRelevant: {
			type: Boolean,
			required: true
		},
		iconName: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		details: {
			type: String,
			default: ''
		},
		position: {
			type: String,
			required: true,
			validator: function(value) {
				return ['left', 'right'].includes(value);
			}
		}
	},
	emits: ['select'],
	template:
	`
	<div :class="'timeline-container ' + position" @click="$emit('select')" :style="{ cursor: details ? 'pointer' : 'default' }">
		<div class="timeline-content" :class="{ 'timeline-content--clickable': details }">
			<i :class="iconName"></i>
			<h2 class="timeline-title">{{ date }}</h2>
			<h3 class="timeline-subtitle" v-if="isRelevant">Still relevant</h3>
			<p>{{ description }}</p>
		</div>
	</div>
	`
}
