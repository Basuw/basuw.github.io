export default {
    emits: [''],
    created() {
        this.loadFonts();
    },
    data : function(){
        return {
            fonts: []
        }
    },
    methods: {
        async loadFonts() {
            try {
                const response = await fetch('/data/fonts.json');
                const fontsData = await response.json();
                this.fonts = fontsData;
            } catch (error) {
                console.error('Error loading fonts:', error);
            }
        },
        openDownloadLink(url) {
            window.open(url, '_blank');
        }
    },
    template:
    `
    <h2 class="font-aeronaut">Here few fonts I'm loving</h2>
    <div class="font-container">
        <div v-for="(font, index) in fonts" :key="font.id" class="font-item">
            <div>
                <span class="font-rank">{{ index + 1 }}</span>
                <input 
                    :class="'font-' + font.id" 
                    type="text" 
                    :placeholder="'Try typing with ' + font.name + ' font'"
                    v-model="font.inputValue"
                />
            </div>
            <div class="font-info">
                <h3 :class="'font-name font-' + font.id">{{ font.name }}</h3>
                <span class="font-category">{{ font.category }}</span>
                <button 
                    class="download-button" 
                    @click="openDownloadLink(font.downloadUrl)"
                    title="Download or view font"
                >
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        </div>
    </div>
    `
}