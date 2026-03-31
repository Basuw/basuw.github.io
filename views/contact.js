export default {
    data: function() {
        return {
            currentIndex: 0,
            intervalId: null,
            colorIntervalId: null,
            colorStep: 0,
            links: [
                {
                    href: "https://www.linkedin.com/in/bastien-jacquelin",
                    icon: "fab fa-linkedin",
                    name: "LinkedIn",
                    handle: "/in/bastien-jacquelin",
                    tagline: "Let's connect professionally",
                    accentClass: "contact-card--linkedin"
                },
                {
                    href: "https://github.com/Basuw",
                    icon: "fab fa-github",
                    name: "GitHub",
                    handle: "github.com/Basuw",
                    tagline: "Check out my open-source work",
                    accentClass: "contact-card--github"
                },
                {
                    href: "mailto:bastien.jacquelin@free.fr",
                    icon: "fas fa-envelope",
                    name: "Email",
                    handle: "bastien.jacquelin@free.fr",
                    tagline: "Drop me a message anytime",
                    accentClass: "contact-card--email"
                }
            ]
        };
    },
    methods: {
        nextLink() {
            this.currentIndex = (this.currentIndex + 1) % this.links.length;
            this.resetTimer();
        },
        prevLink() {
            this.currentIndex = (this.currentIndex - 1 + this.links.length) % this.links.length;
            this.resetTimer();
        },
        selectLink(index) {
            this.currentIndex = index;
            this.resetTimer();
        },
        resetTimer() {
            clearInterval(this.intervalId);
            clearInterval(this.colorIntervalId);
            this.colorStep = 0;
            this.intervalId = setInterval(this.nextLink, 5000);
            this.colorIntervalId = setInterval(this.tickColor, 100);
        },
        tickColor() {
            this.colorStep = (this.colorStep + 1) % 51;
        },
        dotColor(index) {
            if (index !== this.currentIndex) return null;
            // green → amber → red over 50 steps
            const t = this.colorStep / 50;
            let r, g, b;
            if (t < 0.5) {
                const f = t * 2;
                r = Math.round(74  + f * (245 - 74));
                g = Math.round(222 + f * (158 - 222));
                b = Math.round(128 + f * (11  - 128));
            } else {
                const f = (t - 0.5) * 2;
                r = Math.round(245 + f * (239 - 245));
                g = Math.round(158 + f * (68  - 158));
                b = Math.round(11  + f * (68  - 11));
            }
            return `rgb(${r},${g},${b})`;
        }
    },
    mounted() {
        this.intervalId = setInterval(this.nextLink, 5000);
        this.colorIntervalId = setInterval(this.tickColor, 100);
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
        clearInterval(this.colorIntervalId);
    },
    template: `
    <div class="contact">
        <h2 class="contact-title">Get in touch</h2>
        <p class="contact-subtitle">I'd love to hear from you — pick your favourite channel.</p>

        <div class="contact-stage">
            <button type="button" class="contact-arrow contact-arrow--prev" @click="prevLink">
                <i class="fas fa-chevron-left"></i>
            </button>

            <div class="contact-cards">
                <div
                    v-for="(link, index) in links"
                    :key="index"
                    class="contact-card"
                    :class="[link.accentClass, { 'is-active': index === currentIndex, 'is-prev': index === (currentIndex - 1 + links.length) % links.length, 'is-next': index === (currentIndex + 1) % links.length }]"
                >
                    <div class="contact-card-glow"></div>
                    <div class="contact-card-inner">
                        <div class="contact-card-icon">
                            <i :class="link.icon"></i>
                        </div>
                        <h3 class="contact-card-name">{{ link.name }}</h3>
                        <p class="contact-card-tagline">{{ link.tagline }}</p>
                        <span class="contact-card-handle">{{ link.handle }}</span>
                        <a :href="link.href" target="_blank" class="contact-card-btn" @click.stop>
                            Visit <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <button type="button" class="contact-arrow contact-arrow--next" @click="nextLink">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>

        <div class="contact-dots">
            <span
                v-for="(link, index) in links"
                :key="index"
                class="contact-dot"
                :class="{ 'is-active': index === currentIndex }"
                :style="index === currentIndex ? { backgroundColor: dotColor(index), boxShadow: '0 0 10px ' + dotColor(index) } : {}"
                @click="selectLink(index)"
            ></span>
        </div>
    </div>
    `
}
