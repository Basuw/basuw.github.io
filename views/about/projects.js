export default {
	mounted() {
		document.addEventListener('keydown', this.handleKeydown);
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.handleKeydown);
	},
    data() {
        return {
            projects: [
                {
                    image: '/img/projects/AT-tistic_Logo.png',
                    title: 'Project Title 1',
                    description: 'Brief description of the project.',
                    date: '2023-01-01',
                    authors: 'Author 1, Author 2',
                    detailedDescription: 'Detailed description of the project.',
                    github: 'https://github.com/Basuw/AR-tistic',
                    summary: 'This is a detailed summary of the project.',
                    likes: 0,
                    id: 'project1' // Ajoutez un identifiant unique pour chaque projet
                },
                {
                    image: '/img/projects/Hyperset_Logo.png',
                    title: 'Project Title 2',
                    description: 'Brief description of the project.',
                    date: '2023-02-01',
                    authors: 'Author 3, Author 4',
                    detailedDescription: 'Detailed description of the project.',
                    github: 'https://github.com/Basuw/HyperSet',
                    summary: 'This is a detailed summary of the project.',
                    likes: 0,
                    id: 'project2' // Ajoutez un identifiant unique pour chaque projet
                },
                // Add more projects as needed
            ],
            selectedProject: null
        };
    },
    methods: {
		handleKeydown(event) {
			if (event.key === 'Escape') {
				this.closePopup();
			}
		},
        openPopup(project) {
            this.selectedProject = project;
        },
        closePopup() {
            this.selectedProject = null;
        },
		likeProject(project) {
			if (!project.liked) {
				project.liked = true;
				project.likes++;
				const likedProjects = JSON.parse(localStorage.getItem('likedProjects')) || [];
				likedProjects.push(project.id);
				localStorage.setItem('likedProjects', JSON.stringify(likedProjects));
			} else {
				alert('You have already liked this project.');
			}
		}
    },
	template: `
	<div>
		<div class="project-list">
			<div
				v-for="(project, index) in projects"
				:key="project.id"
				class="gallery-item"
				@click="openPopup(project)"
			>
				<img :src="project.image" :alt="project.title" />
				<div class="description">
					<h3>{{ project.title }}</h3>
					<p>{{ project.description }}</p>
					<p class="date">{{ project.date }}</p>
					<p class="authors">{{ project.authors }}</p>
					<button class="like-button" @click.stop="likeProject(project)">
						<i :class="project.liked ? 'fas fa-heart' : 'far fa-heart'"></i> {{ project.likes }}
					</button>
				</div>
			</div>
		</div>
		<div v-if="selectedProject" class="popup" @click="closePopup">
			<div class="popup-content" @click.stop>
				<span class="close" @click="closePopup">&times;</span>
				<img class="project-icon" :src="selectedProject.image" :alt="selectedProject.title" />
				<h3>{{ selectedProject.title }}</h3>
				<p>{{ selectedProject.detailedDescription }}</p>
				<a :href="selectedProject.github" target="_blank">
					<img class="git-icon" src="/icon/github.png" alt="GitHub" />
				</a>
			</div>
		</div>
	</div>
	`
};