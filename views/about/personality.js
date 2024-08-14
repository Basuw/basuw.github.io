export default {
    data() {
        return {
            imageSrc: '/img/personality.png'
        };
    },
	methods: {
	},
	template: `
        <div class="image-container">
            <img :src="imageSrc" class="full-size-image" />
        </div>
	`
};