export default {
	mounted() {
		document.addEventListener('keydown', this.handleKeydown);
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.handleKeydown);
	},
	created() {
		this.loadProjects();
		this.loadLikedProjects();
	},
    data() {
        return {
            projects: [],
            selectedProject: null
        };
    },
	methods: {
		async loadProjects() {
			try {
				const response = await fetch('/data/projects.json');
				const projectsData = await response.json();
				this.projects = projectsData;
			} catch (error) {
				console.error('Error loading projects:', error);
			}
		},
		handleKeydown(event) {
			if (event.key === 'Escape') {
				this.closePopup();
			}
		},
		closePopup() {
			this.selectedProject = null;
		},
		openPopup(project) {
			this.selectedProject = project;
		},
		likeProject(project) {
			const likedProjects = JSON.parse(localStorage.getItem('likedProjects')) || [];
			const projectIndex = likedProjects.indexOf(project.id);
	
			if (projectIndex === -1) {
				// Like the project
				project.liked = true;
				project.likes++;
				likedProjects.push(project.id);
			} else {
				// Unlike the project
				project.liked = false;
				project.likes--;
				likedProjects.splice(projectIndex, 1);
			}
	
			localStorage.setItem('likedProjects', JSON.stringify(likedProjects));
		},
		loadLikedProjects() {
			const likedProjects = JSON.parse(localStorage.getItem('likedProjects')) || [];
			this.projects.forEach(project => {
				if (likedProjects.includes(project.id)) {
					project.liked = true;
				}
			});
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
				<img class="popup-project-icon" :src="selectedProject.image" :alt="selectedProject.title" />
				<h3>{{ selectedProject.title }}</h3>
				<p>{{ selectedProject.summary }}</p>
				<p>{{ selectedProject.detailedDescription }}</p>
				<p class="date">{{ selectedProject.date }}</p>
				<p class="authors">{{ selectedProject.authors }}</p>
				<div class="popup-footer">
					<a :href="selectedProject.github" target="_blank">
						<img class="git-icon" src="/icon/github.png" alt="GitHub" />
					</a>
					<button class="like-button" @click.stop="likeProject(selectedProject)">
						<i :class="selectedProject.liked ? 'fas fa-heart' : 'far fa-heart'"></i> {{ selectedProject.likes }}
					</button>
				</div>
			</div>
		</div>
	</div>
	`
};