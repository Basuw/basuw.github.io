export default {
    data: function() {
        return {
            currentIndex: 0,
            intervalId: null,
            colorIntervalId: null, // Ajout d'un identifiant pour l'intervalle de couleur
            colorStep: 0, // Étape actuelle de la couleur
            links: [
                {
                    href: "https://www.linkedin.com/in/bastien-jacquelin",
                    icon: "fab fa-linkedin",
                    text: "LinkedIn"
                },
                {
                    href: "https://github.com/Basuw",
                    icon: "fab fa-github",
                    text: "GitHub"
                },
                {
                    href: "mailto:bastien.jacquelin@free.fr",
                    icon: "fas fa-envelope",
                    text: "Email"
                }
            ]
        };
    },
    methods: {
        nextLink() {
            const prevIndex = this.currentIndex;
            this.currentIndex = (this.currentIndex + 1) % this.links.length;
            this.updateClasses(prevIndex, this.currentIndex, 'next');
            this.resetInterval(); // Réinitialiser l'intervalle
        },
        prevLink() {
            const prevIndex = this.currentIndex;
            this.currentIndex = (this.currentIndex - 1 + this.links.length) % this.links.length;
            this.updateClasses(prevIndex, this.currentIndex, 'prev');
            this.resetInterval(); // Réinitialiser l'intervalle
        },
        selectLink(index) {
            const prevIndex = this.currentIndex;
            this.currentIndex = index;
            this.updateClasses(prevIndex, this.currentIndex, 'next');
            this.resetInterval(); // Réinitialiser l'intervalle
        },
        updateClasses(prevIndex, currentIndex, direction) {
            const items = this.$el.querySelectorAll('.carousel-item');
            items.forEach((item, index) => {
                item.classList.remove('active', 'prev', 'next');
                item.style.display = 'none'; // Masquer tous les éléments
                if (index === prevIndex) {
                    item.classList.add(direction === 'next' ? 'next' : 'prev');
                    item.style.display = 'block'; // Afficher l'élément précédent ou suivant
                }
                if (index === currentIndex) {
                    item.classList.add('active');
                    item.style.display = 'block'; // Afficher l'élément actif
                }
            });
            this.resetIndicatorColors(); // Réinitialiser les couleurs des indicateurs
        },
        resetInterval() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
            if (this.colorIntervalId) {
                clearInterval(this.colorIntervalId);
            }
            this.intervalId = setInterval(this.nextLink, 5000); // Réinitialiser l'intervalle
            this.colorStep = 0; // Réinitialiser l'étape de couleur
            this.colorIntervalId = setInterval(this.updateIndicatorColor, 100); // Changer la couleur toutes les 0.1 secondes
        },
        interpolateColor(color1, color2, factor) {
            const result = color1.slice();
            for (let i = 0; i < 3; i++) {
                result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
            }
            return result;
        },
        updateIndicatorColor() {
            const blue = [0, 115, 177];
            const violet = [142, 68, 173];
            const factor = this.colorStep / 50;
            const color = this.interpolateColor(blue, violet, factor);
            const colorString = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            const activeIndicator = this.$el.querySelector('.carousel-indicators span.active');
            if (activeIndicator) {
                activeIndicator.style.backgroundColor = colorString;
            }
            this.colorStep = (this.colorStep + 1) % 51; // Réinitialiser après 50 étapes
        },
        resetIndicatorColors() {
            const indicators = this.$el.querySelectorAll('.carousel-indicators span');
            indicators.forEach(indicator => {
                indicator.style.backgroundColor = '#ccc'; // Couleur grise pour tous les indicateurs
                indicator.classList.remove('active'); // Supprimer la classe active
            });
            const activeIndicator = this.$el.querySelector(`.carousel-indicators span:nth-child(${this.currentIndex + 1})`);
            if (activeIndicator) {
                activeIndicator.classList.add('active'); // Ajouter la classe active au point sélectionné
            }
        }
    },
    mounted() {
        this.intervalId = setInterval(this.nextLink, 5000); // Change link every 5 seconds
        this.colorIntervalId = setInterval(this.updateIndicatorColor, 100); // Change color every 0.1 seconds
    },
    beforeDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId); // Nettoyer l'intervalle lors de la destruction du composant
        }
        if (this.colorIntervalId) {
            clearInterval(this.colorIntervalId); // Nettoyer l'intervalle de couleur lors de la destruction du composant
        }
    },
    template: `
        <div class="contact">
            <h2>Don't hesitate to contact me !😊</h2>
            <div class="carousel">
                <div class="carousel-inner">
                    <div v-for="(link, index) in links" :key="index" class="carousel-item" :class="{ active: index === currentIndex }">
                        <a :href="link.href" target="_blank">
                            <i :class="link.icon"></i> {{ link.text }}
                        </a>
                    </div>
                </div>
                <div class="carousel-controls">
                    <button @click="prevLink" class="carousel-control prev">&lt;</button>
                    <button @click="nextLink" class="carousel-control next">&gt;</button>
                </div>
                <div class="carousel-indicators">
                    <span v-for="(link, index) in links" :key="index" :class="{ active: index === currentIndex }" @click="selectLink(index)"></span>
                </div>
            </div>
        </div>
    `
}