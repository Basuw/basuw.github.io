export default {
    data: function() {
        return {
            currentIndex: 0,
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
        },
        prevLink() {
            const prevIndex = this.currentIndex;
            this.currentIndex = (this.currentIndex - 1 + this.links.length) % this.links.length;
            this.updateClasses(prevIndex, this.currentIndex, 'prev');
        },
        selectLink(index) {
            const prevIndex = this.currentIndex;
            this.currentIndex = index;
            this.updateClasses(prevIndex, this.currentIndex, 'next');
        },
        updateClasses(prevIndex, currentIndex, direction) {
            const items = this.$el.querySelectorAll('.carousel-item');
            items.forEach((item, index) => {
                item.classList.remove('active', 'prev', 'next');
                if (index === prevIndex) {
                    item.classList.add(direction === 'next' ? 'next' : 'prev');
                }
                if (index === currentIndex) {
                    item.classList.add('active');
                }
            });
        }
    },
    mounted() {
        setInterval(this.nextLink, 5000); // Change link every 5 seconds
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