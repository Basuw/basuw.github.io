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
            this.currentIndex = (this.currentIndex + 1) % this.links.length;
        },
        prevLink() {
            this.currentIndex = (this.currentIndex - 1 + this.links.length) % this.links.length;
        },
        selectLink(index) {
            this.currentIndex = index;
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