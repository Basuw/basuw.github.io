export default {
	mounted() {
		document.addEventListener('keydown', this.handleKeydown);
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.handleKeydown);
	},
	created() {
		this.loadLikedProjects();
	},
    data() {
        return {
            projects: [
                {
                    image: '/img/projects/AT-tistic_Logo.png',
                    title: 'AR-tistic',
                    description: 'Mobile game which aimed to use AR technology to create art and share it with other users on interest points located all over the streets. ',
                    date: '2023-02',
                    authors: 'Axel de la Fuente, Bastien Jacquelin',
                    detailedDescription: 'AR-tistic is a mobile application based on augmented reality. The idea is to design a “social network” in AR. The application would allow you to be located in real time. As users approach points of interest, they will be allowed to use AR to draw around them. Users could therefore share their works of art, and contemplate those of others, at points of interest available on the application.',
                    github: 'https://github.com/Basuw/AR-tistic',
                    summary: 'Kotlin mobile app working with a javalin API and a Kotlin ORM to link the app to a PostgreSQL database.',
                    likes: 5,
                    id: 'project1'
                },
                {
                    image: '/img/projects/Hyperset_Logo.png',
                    title: 'HyperSet',
                    description: 'Web version of the famous game Set, with a multiplayer mode, different difficulty levels.',
                    date: '2023-06',
                    authors: 'Raphaël Lacote, Aurian Jault, Rémi Arnal, Bastien Jacquelin',
                    detailedDescription: 'The SET game consists of finding the maximum number of sets. A set is made up of three cards whose four characteristics (taken separately) are: either completely identical (for example the three cards have the same suit), or totally different (for example each of the three cards is of a different color). This project was realized in the context of the course of the 2nd year of IUT',
                    github: 'https://github.com/Basuw/HyperSet',
                    summary: 'JavaScript web app using Node.js with Socket.io for the multiplayer mode and VueJs',
                    likes: 8,
                    id: 'project2'
                },                {
                    image: '/img/projects/arduino_icon.png',
                    title: 'Moisture & Temperature Sensor',
                    description: 'Moisture & Temperature Sensor using an Arduino board and a small screen to display the data.',
                    date: '2023-04',
                    authors: 'Bastien Jacquelin',
                    detailedDescription: '2 termic sensors display temperature and humidity percentage on a monitor. Moisture sensor activating a pump to water a plant below a certain humidity level, Tools : - Elegoo Mega 2560 - Arduino card, - U8g2 - screen,- AZ-delivery DHT 11 Temperaturesensor, - AZ-delivery Bodefeuchte Sensor Modul, with some leds to create a nice design.',
                    github: 'https://github.com/Basuw/Moisture_termic_sensor-Arduino',
                    summary: 'Arduino project using C++',
                    likes: 2,
                    id: 'project3'
                },                {
                    image: '/img/projects/visit_icon.png',
                    title: 'Visit Manager',
                    description: 'Web application to manage visits in a school',
                    date: '2023-06',
                    authors: 'Yoan Boyer, Bastien Jacquelin',
                    detailedDescription: 'The goal of this app is to manage all the visits of the school from a client (the teacher) requirements. The app is divided in 2 parts : - The client part, where the teacher can create a visit, see all the visits, and see the details of a visit. - The admin part, where the admin can see all the visits, see the details of a visit, and validate a visit.',
                    github: 'https://github.com/Basuw/Visit-manager',
                    summary: 'Angular web app and a Spring Boot API deployed using DockerCompose',
                    likes: 8,
                    id: 'project4'
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