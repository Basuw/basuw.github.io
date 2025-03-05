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
		position: {
			type: String,
			required: true,
			validator: function(value) {
				return ['left', 'right'].includes(value);
			}
		}
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
	<div :class="'timeline-container ' + position">
		<div class="timeline-content">
			<i :class="iconName"></i>
			<h2 class="timeline-title">{{ date }}</h2>
			<h3 class="timeline-subtitle" v-if="isRelevant">Still relevant</h3>
			<p>{{ description }}</p>
		</div>
	</div>
	`
}