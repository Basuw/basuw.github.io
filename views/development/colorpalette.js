export default {
    emits: [''],
    data: function () {
        return {
            copiedSwatch: null,

            /* ── Section 1 : couleurs du site ── */
            siteColors: [
                {
                    group: 'Accent',
                    swatches: [
                        { name: '--accent-primary',  value: '#8b5cf6', label: 'Purple 500' },
                        { name: '--accent-blue',     value: '#3b82f6', label: 'Blue 500' },
                        { name: '--accent-purple-d', value: '#9333ea', label: 'Purple 600' },
                        { name: '--accent-blue-d',   value: '#2563eb', label: 'Blue 600' },
                    ]
                },
                {
                    group: 'Backgrounds (dark)',
                    swatches: [
                        { name: '--bg-base',     value: '#1e1e2e', label: 'Base' },
                        { name: '--bg-surface',  value: '#2d2d44', label: 'Surface' },
                        { name: '--bg-elevated', value: '#3c3c5a', label: 'Elevated' },
                        { name: '--bg-card',     value: '#2d2d44', label: 'Card' },
                    ]
                },
                {
                    group: 'Backgrounds (light)',
                    swatches: [
                        { name: '--bg-light-1', value: '#f8fafc', label: 'Slate 50' },
                        { name: '--bg-light-2', value: '#e2e8f0', label: 'Slate 200' },
                        { name: '--bg-light-3', value: '#cbd5e1', label: 'Slate 300' },
                    ]
                },
                {
                    group: 'Text',
                    swatches: [
                        { name: '--text-primary',   value: '#e2e8f0', label: 'Primary' },
                        { name: '--text-secondary', value: '#94a3b8', label: 'Secondary' },
                        { name: '--text-muted',     value: '#64748b', label: 'Muted' },
                        { name: '--text-dark',      value: '#1e293b', label: 'Dark primary' },
                    ]
                },
            ],

            siteGradients: [
                { name: '--accent-gradient',    value: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',                                             label: 'Accent' },
                { name: '--gradient-vertical',  value: 'linear-gradient(180deg, #8b5cf6, #3b82f6)',                                             label: 'Vertical' },
                { name: '--bg-dark-gradient',   value: 'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 25%, #3c3c5a 50%, #2d2d44 75%, #1e1e2e 100%)', label: 'Background' },
                { name: '--bg-light-gradient',  value: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f8fafc 100%)', label: 'Background (light)' },
            ],

            /* ── Section 2 : palettes harmonieuses ── */
            harmonious: [
                {
                    name: 'Purple Haze',
                    desc: 'Les couleurs de ce site — violet profond et bleu vif',
                    colors: ['#1e1e2e', '#8b5cf6', '#6366f1', '#3b82f6', '#e2e8f0'],
                },
                {
                    name: 'Emerald Night',
                    desc: 'Fonds sombres avec des accents émeraude lumineux',
                    colors: ['#0d1f1a', '#059669', '#10b981', '#34d399', '#d1fae5'],
                },
                {
                    name: 'Sunset Glow',
                    desc: 'Chaleureux, du corail à l\'or en passant par le rose',
                    colors: ['#1c0a00', '#f97316', '#fb923c', '#fbbf24', '#fef3c7'],
                },
                {
                    name: 'Rose Quartz',
                    desc: 'Douceur et romantisme, du bordeaux au blush',
                    colors: ['#1f0a10', '#e11d48', '#fb7185', '#fda4af', '#fff1f2'],
                },
                {
                    name: 'Arctic',
                    desc: 'Froid et minimaliste, du noir à la glace',
                    colors: ['#0f172a', '#0ea5e9', '#38bdf8', '#bae6fd', '#f0f9ff'],
                },
                {
                    name: 'Slate Mono',
                    desc: 'Monochrome élégant, nuances de gris bleuté',
                    colors: ['#0f172a', '#1e293b', '#334155', '#94a3b8', '#f1f5f9'],
                },
            ],
        };
    },
    methods: {
        async copyToClipboard(value, id) {
            try {
                await navigator.clipboard.writeText(value);
            } catch (e) {
                const el = document.createElement('textarea');
                el.value = value;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
            }
            this.copiedSwatch = id;
            setTimeout(() => { if (this.copiedSwatch === id) this.copiedSwatch = null; }, 1500);
        },
        sid(a, b) { return a + '__' + b; },
    },
    template: `
    <div class="color-palette-page">

        <!-- ══ Section : couleurs du site ══ -->
        <section class="palette-chapter">
            <div class="palette-chapter-header">
                <div class="chapter-icon-box"><i class="fas fa-globe chapter-icon"></i></div>
                <div>
                    <h2 class="palette-chapter-title">Site colors</h2>
                    <p class="palette-chapter-desc">Toutes les couleurs utilisées sur ce site — clic pour copier</p>
                </div>
            </div>

            <div class="palette-section" v-for="group in siteColors" :key="group.group">
                <h3 class="palette-group-title">{{ group.group }}</h3>
                <div class="palette-swatches">
                    <div
                        v-for="swatch in group.swatches"
                        :key="swatch.name"
                        class="palette-swatch"
                        @click="copyToClipboard(swatch.value, sid(group.group, swatch.name))"
                        :title="'Copy ' + swatch.value"
                    >
                        <div class="swatch-preview" :style="{ background: swatch.value }"></div>
                        <div class="swatch-info">
                            <span class="swatch-label">{{ swatch.label }}</span>
                            <span class="swatch-name">{{ swatch.name }}</span>
                            <span class="swatch-value">{{ swatch.value }}</span>
                            <span class="swatch-copied" v-if="copiedSwatch === sid(group.group, swatch.name)">Copied!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="palette-section">
                <h3 class="palette-group-title">Gradients</h3>
                <div class="palette-swatches">
                    <div
                        v-for="g in siteGradients"
                        :key="g.name"
                        class="palette-swatch gradient-swatch"
                        @click="copyToClipboard(g.value, sid('gradient', g.name))"
                        :title="'Copy gradient'"
                    >
                        <div class="swatch-preview gradient-preview" :style="{ background: g.value }"></div>
                        <div class="swatch-info">
                            <span class="swatch-label">{{ g.label }}</span>
                            <span class="swatch-name">{{ g.name }}</span>
                            <span class="swatch-copied" v-if="copiedSwatch === sid('gradient', g.name)">Copied!</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══ Section : palettes harmonieuses ══ -->
        <section class="palette-chapter">
            <div class="palette-chapter-header">
                <div class="chapter-icon-box"><i class="fas fa-swatchbook chapter-icon"></i></div>
                <div>
                    <h2 class="palette-chapter-title">Harmonious palettes</h2>
                    <p class="palette-chapter-desc">Combinaisons de couleurs qui s'accordent parfaitement — clic pour copier</p>
                </div>
            </div>

            <div class="palette-combos">
                <div class="palette-combo" v-for="palette in harmonious" :key="palette.name">
                    <div class="combo-strip">
                        <div
                            v-for="(color, ci) in palette.colors"
                            :key="ci"
                            class="combo-chip"
                            :style="{ background: color }"
                            :title="'Copy ' + color"
                            @click="copyToClipboard(color, palette.name + ci)"
                        >
                            <span class="combo-chip-copied" v-if="copiedSwatch === palette.name + ci">✓</span>
                        </div>
                    </div>
                    <div class="combo-meta">
                        <span class="combo-name">{{ palette.name }}</span>
                        <span class="combo-desc">{{ palette.desc }}</span>
                    </div>
                </div>
            </div>
        </section>

    </div>
    `
}
