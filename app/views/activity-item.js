export default{
    props: {
        activity:Activity,
        referenceAchieved:ReferenceAchieved
    },
    emits: ['achievment'],
    data:function(){
        return{
            perweek:THISWEEK
        }
    },
	// emits: ['event'],
	methods: {
        achieved: function(value){
			this.referenceAchieved.achieved=value;
            this.$emit("achievment",this.activity, value);
		}
	},
	template:
		`
        <div class="task">
            <div class="mainTaskInfo">
                <img src="/activities/icon/tasks/hiking.png" alt="imgTask" class="imgTask"/>
                <div class="vertical">
                    <span class="taskName"> {{activity.name}} </span>
                    <span class="frequence"> {{activity.progress}} / {{referenceAchieved.reference}} {{perweek}}</span>
                </div>
                <div class="vertical">
                    <span class="value">{{referenceAchieved.achieved}}/{{activity.value}}</span>
                    <span class="unit">{{activity.unit}}</span>
                </div>
            </div>
            <div class="validationInfo">
                <div class="buttonValidation" @click="achieved(Math.round(activity.value*0.3))">{{Math.round(activity.value*0.3)}}</div>
                <div class="buttonValidation" @click="achieved(Math.round(activity.value*0.7))">{{Math.round(activity.value*0.7)}}</div>
                <div class="buttonValidation" @click="achieved(activity.value)">{{activity.value}}</div>
            </div>
            <div class="deleteInfo">
            </div>
        </div>
        
		`
}