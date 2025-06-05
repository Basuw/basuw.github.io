export default {
    data() {
        return {
            experiences: [
                {
                    type: 'professional',
                    title: 'Michelin Apprenticeship',
                    company: 'Michelin',
                    location: 'Clermont-Ferrand',
                    period: '2023-2026',
                    icon: 'fas fa-briefcase',
                    description: 'Professional apprenticeship in software development and DevOps practices.',
                    technologies: [
                        { name: 'Spring Boot', level: 5 },
                        { name: 'Angular', level: 4 },
                        { name: 'Ansible', level: 2 },
                        { name: 'PostgreSQL', level: 4 },
                        { name: 'Agile Methods', level: 4 },
                        { name: 'DevOps', level: 4 }
                    ],
                    color: 'rgba(16, 185, 129, 0.1)',
                    borderColor: 'rgba(16, 185, 129, 0.3)'
                },
                {
                    type: 'academic',
                    title: 'IUT Computer Science',
                    company: 'Université Clermont Auvergne',
                    location: 'Aubière',
                    period: '2021-2023',
                    icon: 'fas fa-graduation-cap',
                    description: 'Computer Science degree with focus on development logic and data structures.',
                    technologies: [
                        { name: 'Development Logic & Architecture', level: 5 },
                        { name: 'Data Structures', level: 4 },
                        { name: 'Blazor', level: 2 },
                        { name: 'Vue.js', level: 4 },
                        { name: 'PHP', level: 2 }
                    ],
                    color: 'rgba(59, 130, 246, 0.1)',
                    borderColor: 'rgba(59, 130, 246, 0.3)'
                },
                {
                    type: 'academic',
                    title: 'ISIMA Engineering School',
                    company: 'INP ISIMA',
                    location: 'Aubière',
                    period: '2023-2026',
                    icon: 'fas fa-laptop-code',
                    description: 'Engineering school with advanced computer science specialization and project management experience.',
                    technologies: [
                        { name: 'Graphs & Algorithms', level: 4 },
                        { name: 'Machine Learning', level: 3 },
                        { name: 'Digital Signal Processing', level: 3 },
                        { name: 'Mobile Dev (Kotlin)', level: 3 },
                        { name: 'Unity', level: 2 },
                        { name: 'Kubernetes', level: 2 }
                    ],
                    color: 'rgba(139, 92, 246, 0.1)',
                    borderColor: 'rgba(139, 92, 246, 0.3)',
                    project: {
                        name: 'Project FallZ (Fall Detection)',
                        duration: '500h team project (5 members)',
                        role: 'Project Manager',
                        highlights: [
                            'Team leadership and task prioritization',
                            'Crisis management and technical decisions',
                            'Technology pivots (Satellite → LoRaWAN)',
                            'Data optimization for IoT constraints'
                        ]
                    }
                },
                {
                    type: 'service',
                    title: 'Volunteer Firefighter',
                    company: 'SDIS 63',
                    location: 'Puy-de-Dôme',
                    period: '2024 - Present',
                    icon: 'fas fa-fire-extinguisher',
                    description: 'Emergency response and rescue operations with emphasis on precision and teamwork.',
                    skills: [
                        'Rigorous attention to detail',
                        'Team coordination under pressure',
                        'Emergency response protocols',
                        'Physical and mental resilience'
                    ],
                    color: 'rgba(244, 63, 94, 0.1)',
                    borderColor: 'rgba(244, 63, 94, 0.3)',
                    motto: '"Train hard for easy war - Every detail counts"'
                },
                {
                    type: 'work',
                    title: 'Agricultural Worker',
                    company: 'Various Farms',
                    location: 'Clermont-Ferrand',
                    period: '2018-2020',
                    icon: 'fas fa-seedling',
                    description: 'Seasonal agricultural work developing perseverance and work ethic.',
                    skills: [
                        'Physical endurance',
                        'Patience with repetitive tasks',
                        'Problem-solving in outdoor conditions',
                        'Team collaboration'
                    ],
                    color: 'rgba(245, 158, 11, 0.1)',
                    borderColor: 'rgba(245, 158, 11, 0.3)'
                },
                {
                    type: 'initiative',
                    title: 'Student-Teacher Platform',
                    company: 'High School Initiative',
                    location: 'Remote',
                    period: '2020',
                    icon: 'fab fa-discord',
                    description: 'Created and managed a Discord platform for remote learning during COVID-19 lockdown.',
                    achievements: [
                        '150+ students from multiple classes',
                        'Organized by subject and teacher availability',
                        'Moderation team management',
                        'Collaboration with school administration',
                        '24/7 technical support and tutorials',
                        'Digital privacy and safety enforcement'
                    ],
                    color: 'rgba(168, 85, 247, 0.1)',
                    borderColor: 'rgba(168, 85, 247, 0.3)',
                    impact: 'Helped maintain educational continuity during unprecedented times'
                }
            ]
        };
    },
    methods: {
        getSkillLevelStars(level) {
            return '★'.repeat(level) + '☆'.repeat(5 - level);
        },
        getTypeLabel(type) {
            const labels = {
                professional: 'Professional',
                academic: 'Academic',
                service: 'Public Service',
                work: 'Work Experience',
                initiative: 'Initiative'
            };
            return labels[type] || type;
        },
        getTypeIcon(type) {
            const icons = {
                professional: 'fas fa-building',
                academic: 'fas fa-university',
                service: 'fas fa-hands-helping',
                work: 'fas fa-hammer',
                initiative: 'fas fa-lightbulb'
            };
            return icons[type] || 'fas fa-circle';
        }
    },
    template: `
        <div class="experience-container">
            <div class="experience-header">
                <h1><i class="fas fa-road"></i> Professional Journey</h1>
                <p>A comprehensive overview of my educational background, professional experiences, and personal initiatives that have shaped my technical expertise and leadership skills.</p>
            </div>
            
            <div class="experience-timeline">
                <div 
                    v-for="(experience, index) in experiences" 
                    :key="index"
                    class="experience-card"
                    :style="{ 
                        '--card-bg': experience.color, 
                        '--card-border': experience.borderColor 
                    }"
                >
                    <div class="experience-type">
                        <i :class="getTypeIcon(experience.type)"></i>
                        {{ getTypeLabel(experience.type) }}
                    </div>
                    
                    <div class="experience-main">
                        <div class="experience-icon">
                            <i :class="experience.icon"></i>
                        </div>
                        
                        <div class="experience-content">
                            <div class="experience-title">{{ experience.title }}</div>
                            <div class="experience-company">{{ experience.company }}</div>
                            <div class="experience-meta">
                                <span class="location"><i class="fas fa-map-marker-alt"></i> {{ experience.location }}</span>
                                <span class="period"><i class="fas fa-calendar"></i> {{ experience.period }}</span>
                            </div>
                            <p class="experience-description">{{ experience.description }}</p>
                            
                            <!-- Technologies for academic/professional -->
                            <div v-if="experience.technologies" class="technologies-section">
                                <h4><i class="fas fa-code"></i> Technologies & Skills</h4>
                                <div class="tech-grid">
                                    <div 
                                        v-for="tech in experience.technologies" 
                                        :key="tech.name"
                                        class="tech-item"
                                    >
                                        <span class="tech-name">{{ tech.name }}</span>
                                        <span class="tech-level">{{ getSkillLevelStars(tech.level) }}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Skills for service/work -->
                            <div v-if="experience.skills" class="skills-section">
                                <h4><i class="fas fa-star"></i> Key Skills</h4>
                                <ul class="skills-list">
                                    <li v-for="skill in experience.skills" :key="skill">
                                        <i class="fas fa-check-circle"></i>
                                        {{ skill }}
                                    </li>
                                </ul>
                            </div>
                            
                            <!-- Achievements for initiatives -->
                            <div v-if="experience.achievements" class="achievements-section">
                                <h4><i class="fas fa-trophy"></i> Key Achievements</h4>
                                <ul class="achievements-list">
                                    <li v-for="achievement in experience.achievements" :key="achievement">
                                        <i class="fas fa-medal"></i>
                                        {{ achievement }}
                                    </li>
                                </ul>
                            </div>
                            
                            <!-- Project details for ISIMA -->
                            <div v-if="experience.project" class="project-section">
                                <h4><i class="fas fa-project-diagram"></i> Notable Project</h4>
                                <div class="project-details">
                                    <div class="project-name">{{ experience.project.name }}</div>
                                    <div class="project-meta">
                                        <span>{{ experience.project.duration }}</span>
                                        <span>{{ experience.project.role }}</span>
                                    </div>
                                    <ul class="project-highlights">
                                        <li v-for="highlight in experience.project.highlights" :key="highlight">
                                            <i class="fas fa-arrow-right"></i>
                                            {{ highlight }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <!-- Special elements -->
                            <div v-if="experience.motto" class="motto">
                                <i class="fas fa-quote-left"></i>
                                {{ experience.motto }}
                            </div>
                            
                            <div v-if="experience.impact" class="impact">
                                <i class="fas fa-heart"></i>
                                <strong>Impact:</strong> {{ experience.impact }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};