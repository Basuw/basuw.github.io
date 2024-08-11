export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    template: `
        <div class="gallery-item" @click="$emit('click')">
            <img :src="project.image" :alt="project.title">
            <div class="description">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <span class="date">{{ project.date }}</span>
                <p class="authors">{{ project.authors }}</p>
            </div>
        </div>
    `
};