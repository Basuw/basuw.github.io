export default {
	mounted() {
		document.addEventListener('keydown', this.handleKeydown);
	},
	beforeUnmount() {
		document.removeEventListener('keydown', this.handleKeydown);
		this.stopCarousel();
	},
	created() {
		this.loadProjects();
	},
	data() {
		return {
			projects: [],
			selectedProject: null,
			currentSlide: 0,
			carouselInterval: null
		};
	},
	computed: {
		projectMedia() {
			if (!this.selectedProject) return [];
			if (this.selectedProject.media) return this.selectedProject.media;
			return (this.selectedProject.screenshots || []).map(src => ({ type: 'image', src }));
		}
	},
	methods: {
		async loadProjects() {
			try {
				const response = await fetch('/data/projects.json');
				const projectsData = await response.json();
				this.projects = projectsData;
				this.loadLikedProjects();
			} catch (error) {
				console.error('Error loading projects:', error);
			}
		},
		handleKeydown(event) {
			if (!this.selectedProject) return;
			if (event.key === 'Escape') this.closePopup();
			if (event.key === 'ArrowRight') this.nextSlide();
			if (event.key === 'ArrowLeft') this.prevSlide();
		},
		closePopup() {
			this.selectedProject = null;
			this.stopCarousel();
		},
		openPopup(project) {
			this.selectedProject = project;
			this.currentSlide = 0;
			this.$nextTick(() => this.startCarousel());
		},
		startCarousel() {
			this.stopCarousel();
			if (this.projectMedia.length > 1) {
				this.carouselInterval = setInterval(() => this.nextSlide(), 3500);
			}
		},
		stopCarousel() {
			if (this.carouselInterval) {
				clearInterval(this.carouselInterval);
				this.carouselInterval = null;
			}
		},
		nextSlide() {
			if (this.projectMedia.length) {
				this.currentSlide = (this.currentSlide + 1) % this.projectMedia.length;
			}
		},
		prevSlide() {
			if (this.projectMedia.length) {
				this.currentSlide = (this.currentSlide - 1 + this.projectMedia.length) % this.projectMedia.length;
			}
		},
		goToSlide(i) {
			this.currentSlide = i;
			this.startCarousel();
		},
		loadLikedProjects() {
			const likedProjects = JSON.parse(localStorage.getItem('likedProjects')) || [];
			const likedLikes = JSON.parse(localStorage.getItem('likedLikes')) || {};
			this.projects.forEach(project => {
				project.liked = likedProjects.includes(project.id);
				if (project.liked && likedLikes[project.id] !== undefined) {
					project.likes = likedLikes[project.id];
				}
			});
		},
		likeProject(project) {
			const likedProjects = JSON.parse(localStorage.getItem('likedProjects')) || [];
			const likedLikes = JSON.parse(localStorage.getItem('likedLikes')) || {};
			const projectIndex = likedProjects.indexOf(project.id);
			if (projectIndex === -1) {
				project.liked = true;
				project.likes++;
				likedProjects.push(project.id);
			} else {
				project.liked = false;
				project.likes--;
				likedProjects.splice(projectIndex, 1);
			}
			likedLikes[project.id] = project.likes;
			localStorage.setItem('likedProjects', JSON.stringify(likedProjects));
			localStorage.setItem('likedLikes', JSON.stringify(likedLikes));
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
					<div v-if="project.technologies && project.technologies.length" class="card-tech-tags">
						<span v-for="tech in project.technologies.slice(0, 4)" :key="tech.name" class="card-tech-tag">
							<i :class="tech.icon"></i>
						</span>
						<span v-if="project.technologies.length > 4" class="card-tech-more">+{{ project.technologies.length - 4 }}</span>
					</div>
					<button type="button" class="like-button" @click.stop="likeProject(project)">
						<i :class="project.liked ? 'fas fa-heart' : 'far fa-heart'"></i> {{ project.likes }}
					</button>
				</div>
			</div>
		</div>

		<div v-if="selectedProject" class="popup" @click="closePopup">
			<div class="popup-content" :class="{ 'popup-content--narrow': !projectMedia.length }" @click.stop>
				<button type="button" class="close" @click="closePopup">&times;</button>

				<!-- Header -->
				<div class="popup-header">
					<img class="popup-project-icon" :src="selectedProject.image" :alt="selectedProject.title" />
					<div class="popup-header-info">
						<h3>{{ selectedProject.title }}</h3>
						<div class="popup-meta">
							<span class="popup-date"><i class="fas fa-calendar-alt"></i> {{ selectedProject.date }}</span>
							<span class="popup-authors"><i class="fas fa-user"></i> {{ selectedProject.authors }}</span>
						</div>
					</div>
				</div>

				<!-- Carousel -->
				<div
					v-if="projectMedia.length"
					class="carousel"
					@mouseenter="stopCarousel"
					@mouseleave="startCarousel"
				>
					<div class="carousel-track" :style="{ transform: 'translateX(-' + (currentSlide * 100) + '%)' }">
						<template v-for="(item, i) in projectMedia" :key="i">
							<img
								v-if="item.type === 'image'"
								:src="item.src"
								:alt="selectedProject.title + ' screenshot ' + (i + 1)"
								class="carousel-slide"
							/>
							<video
								v-else-if="item.type === 'video'"
								:src="item.src"
								class="carousel-slide"
								autoplay
								muted
								loop
								playsinline
							></video>
						</template>
					</div>
					<button v-if="projectMedia.length > 1" type="button" class="carousel-btn prev" @click.stop="prevSlide">&#8249;</button>
					<button v-if="projectMedia.length > 1" type="button" class="carousel-btn next" @click.stop="nextSlide">&#8250;</button>
					<div v-if="projectMedia.length > 1" class="carousel-dots">
						<span
							v-for="(item, i) in projectMedia"
							:key="i"
							class="carousel-dot"
							:class="{ active: i === currentSlide }"
							@click.stop="goToSlide(i)"
						></span>
					</div>
					<div class="carousel-counter" v-if="projectMedia.length > 1">
						{{ currentSlide + 1 }} / {{ projectMedia.length }}
					</div>
				</div>

				<!-- Body -->
				<div class="popup-body">
					<p class="popup-description">{{ selectedProject.detailedDescription }}</p>
					<div v-if="selectedProject.technologies && selectedProject.technologies.length" class="popup-tech-tags">
						<span v-for="tech in selectedProject.technologies" :key="tech.name" class="tech-tag">
							<i :class="tech.icon"></i> {{ tech.name }}
						</span>
					</div>
				</div>

				<!-- Footer -->
				<div class="popup-footer">
					<a :href="selectedProject.github" target="_blank" title="GitHub">
						<img class="git-icon" src="/icon/github.png" alt="GitHub" />
					</a>
					<button type="button" class="like-button" @click.stop="likeProject(selectedProject)">
						<i :class="selectedProject.liked ? 'fas fa-heart' : 'far fa-heart'"></i>
						<span class="like-count">{{ selectedProject.likes }}</span>
					</button>
				</div>
			</div>
		</div>
	</div>
	`
};
