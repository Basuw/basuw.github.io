export default {
    data() {
        return {
            activeCard: null,
            techStack: [
                {
                    id: 'vue',
                    name: 'Vue.js 3',
                    icon: 'fab fa-vuejs',
                    color: '#4FC08D',
                    description: 'Progressive JavaScript framework for building user interfaces',
                    features: ['Composition API', 'Reactive data binding', 'Component system', 'Single Page Application'],
                    usage: 'Main framework powering the entire website'
                },
                {
                    id: 'html',
                    name: 'HTML5',
                    icon: 'fab fa-html5',
                    color: '#E34F26',
                    description: 'Modern semantic markup for structure',
                    features: ['Semantic elements', 'Accessibility features', 'Modern APIs', 'Clean structure'],
                    usage: 'Foundation structure and content organization'
                },
                {
                    id: 'css',
                    name: 'CSS3',
                    icon: 'fab fa-css3-alt',
                    color: '#1572B6',
                    description: 'Advanced styling with modern features',
                    features: ['Flexbox & Grid', 'Animations', 'Backdrop filters', 'Custom properties'],
                    usage: 'Stunning visual design and smooth animations'
                },
                {
                    id: 'js',
                    name: 'Vanilla JavaScript',
                    icon: 'fab fa-js-square',
                    color: '#F7DF1E',
                    description: 'Pure JavaScript for performance',
                    features: ['ES6+ features', 'Async/await', 'DOM manipulation', 'Event handling'],
                    usage: 'Interactive functionality and dynamic behavior'
                }
            ],
            websiteFeatures: [
                {
                    icon: 'fas fa-mobile-alt',
                    title: 'Responsive Design',
                    description: 'Fully responsive across all devices',
                    color: '#10b981'
                },
                {
                    icon: 'fas fa-palette',
                    title: 'Dark/Light Theme',
                    description: 'Toggle between beautiful themes',
                    color: '#8b5cf6'
                },
                {
                    icon: 'fas fa-font',
                    title: 'Custom Typography',
                    description: 'Handpicked fonts for perfect readability',
                    color: '#f59e0b'
                },
                {
                    icon: 'fas fa-rocket',
                    title: 'Performance First',
                    description: 'Optimized for speed and efficiency',
                    color: '#ef4444'
                },
                {
                    icon: 'fas fa-universal-access',
                    title: 'Accessibility',
                    description: 'Built with accessibility in mind',
                    color: '#06b6d4'
                },
                {
                    icon: 'fas fa-code',
                    title: 'Clean Code',
                    description: 'Well-structured and maintainable',
                    color: '#84cc16'
                }
            ],
            stats: [
                {
                    number: '100%',
                    label: 'Hand-coded',
                    tooltip: 'Copilot & me = unstoppable duo! 🤖👨‍💻',
                    icon: 'fas fa-robot',
                    color: '#6f42c1'
                },
                {
                    number: '0',
                    label: 'Frameworks bloat',
                    tooltip: 'Pure vanilla JS, no unnecessary dependencies',
                    icon: 'fas fa-feather',
                    color: '#28a745'
                },
                {
                    number: '∞',
                    label: 'Passion invested',
                    tooltip: 'Countless hours of love and dedication',
                    icon: 'fas fa-heart',
                    color: '#e74c3c'
                },
                {
                    number: '24/7',
                    label: 'Available online',
                    tooltip: 'Hosted on GitHub Pages',
                    icon: 'fab fa-github',
                    color: '#333'
                }
            ]
        };
    },
    methods: {
        selectCard(tech) {
            this.activeCard = this.activeCard === tech.id ? null : tech.id;
        },
        getCardClass(tech) {
            return {
                'tech-card': true,
                'active': this.activeCard === tech.id
            };
        }
    },
    template: `
        <div class="website-container">
            <div class="hero-section">
                <div class="hero-content">
                    <h1 class="hero-title">
                        <i class="fas fa-code"></i>
                        Crafted with Love & Modern Tech
                    </h1>
                    <p class="hero-subtitle">
                        This website is a showcase of modern web development practices, 
                        built with cutting-edge technologies and attention to detail.
                    </p>
                </div>
                <div class="hero-animation">
                    <div class="floating-elements">
                        <div class="element vue"><i class="fab fa-vuejs"></i></div>
                        <div class="element html"><i class="fab fa-html5"></i></div>
                        <div class="element css"><i class="fab fa-css3-alt"></i></div>
                        <div class="element js"><i class="fab fa-js-square"></i></div>
                    </div>
                </div>
            </div>

            <div class="tech-stack-section">
                <h2>
                    <i class="fas fa-tools"></i>
                    Technology Stack
                </h2>
                <div class="tech-grid">
                    <div 
                        v-for="tech in techStack" 
                        :key="tech.id"
                        :class="getCardClass(tech)"
                        @click="selectCard(tech)"
                        :style="{ '--tech-color': tech.color }"
                    >
                        <div class="card-front">
                            <i :class="tech.icon" :style="{ color: tech.color }"></i>
                            <h3>{{ tech.name }}</h3>
                            <p>{{ tech.description }}</p>
                            <div class="click-hint">Click to explore</div>
                        </div>
                        <div class="card-back" v-if="activeCard === tech.id">
                            <div class="card-details">
                                <h4>Key Features:</h4>
                                <ul>
                                    <li v-for="feature in tech.features" :key="feature">
                                        <i class="fas fa-check"></i>
                                        {{ feature }}
                                    </li>
                                </ul>
                                <div class="usage">
                                    <strong>Usage:</strong> {{ tech.usage }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="features-section">
                <h2>
                    <i class="fas fa-star"></i>
                    Website Features
                </h2>
                <div class="features-grid">
                    <div v-for="feature in websiteFeatures" :key="feature.title" class="feature-card">
                        <div class="feature-icon" :style="{ '--feature-color': feature.color }">
                            <i :class="feature.icon" :style="{ color: feature.color }"></i>
                        </div>
                        <h3>{{ feature.title }}</h3>
                        <p>{{ feature.description }}</p>
                    </div>
                </div>
            </div>

            <div class="stats-section">
                <h2>
                    <i class="fas fa-chart-bar"></i>
                    Quick Stats
                </h2>
                <div class="stats-grid">
                    <div v-for="stat in stats" :key="stat.label" class="stat-item">
                        <div class="stat-icon" :style="{ color: stat.color }">
                            <i :class="stat.icon"></i>
                        </div>
                        <div class="stat-number">{{ stat.number }}</div>
                        <div class="stat-label">{{ stat.label }}</div>
                        <div class="stat-tooltip">{{ stat.tooltip }}</div>
                    </div>
                </div>
            </div>

            <div class="call-to-action">
                <h2>Impressed by the tech?</h2>
                <p>Check out the source code and see how it's all put together!</p>
                <a href="https://github.com/Basuw/basuw.github.io" target="_blank" class="cta-button">
                    <i class="fab fa-github"></i>
                    View on GitHub
                </a>
            </div>
        </div>
    `
};