export default {
    emits: [''],
    data: function () {
        return {
            currentInput: '',
            history: [],
            commandHistory: [],
            historyIndex: -1,
            prompt: 'guest@basuw.io:~$',
        };
    },
    mounted() {
        this.printWelcome();
        this.$nextTick(() => {
            this.$refs.termInput && this.$refs.termInput.focus();
        });
    },
    methods: {
        printWelcome() {
            const ascii = [
                '  _                                ',
                ' | |                               ',
                ' | |__   __ _ ___ _   _ __      __',
                ' | \'_ \\ / _` / __| | | \\ \\ /\\ / /',
                ' | |_) | (_| \\__ \\ |_| |\\ V  V / ',
                ' |_.__/ \\__,_|___/\\__,_| \\_/\\_/  ',
            ];
            ascii.forEach(line => {
                this.history.push({ type: 'output', text: line, class: 'term-success' });
            });
            this.history.push({ type: 'output', text: '', class: 'term-text' });
            this.history.push({ type: 'output', text: 'Welcome to basuw.io interactive terminal.', class: 'term-info' });
            this.history.push({ type: 'output', text: 'Type "help" to see available commands.', class: 'term-text' });
            this.history.push({ type: 'output', text: '', class: 'term-text' });
        },

        focusInput() {
            this.$refs.termInput && this.$refs.termInput.focus();
        },

        scrollToBottom() {
            this.$nextTick(() => {
                const output = this.$refs.termOutput;
                if (output) {
                    output.scrollTop = output.scrollHeight;
                }
            });
        },

        handleKeydown(event) {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                if (this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    this.currentInput = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
                }
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    this.currentInput = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
                } else {
                    this.historyIndex = -1;
                    this.currentInput = '';
                }
            }
        },

        submitCommand() {
            const raw = this.currentInput.trim();
            this.history.push({ type: 'input', text: raw, class: '' });

            if (raw !== '') {
                this.commandHistory.push(raw);
                this.historyIndex = -1;
                this.processCommand(raw);
            }

            this.currentInput = '';
            this.scrollToBottom();
        },

        processCommand(raw) {
            const cmd = raw.toLowerCase();

            if (cmd === 'help') {
                this.printHelp();
            } else if (cmd === 'whoami' || cmd === 'cat about.txt') {
                this.print('Bastien Jacquelin — engineering student at ISIMA, DevOps apprentice, volunteer firefighter, maths tutor, currently doing research at UFMG Brazil.', 'term-info');
            } else if (cmd === 'skills') {
                this.printSkills();
            } else if (cmd === 'contact') {
                this.printContact();
            } else if (cmd === 'projects') {
                this.printProjects();
            } else if (cmd === 'clear') {
                this.history = [];
            } else if (cmd === 'date') {
                this.print(new Date().toString(), 'term-text');
            } else if (cmd === 'sudo make me a sandwich' || cmd === 'sudo') {
                this.print('Nice try. Permission denied. 🥪', 'term-error');
            } else if (cmd === 'matrix') {
                this.printMatrix();
            } else if (cmd === 'ls') {
                this.print('about.txt  contact.txt  projects/  skills.txt  terminal.js', 'term-text');
            } else {
                this.print('command not found: ' + raw + ". Try 'help'.", 'term-error');
            }

            this.history.push({ type: 'output', text: '', class: 'term-text' });
        },

        print(text, cls) {
            this.history.push({ type: 'output', text, class: cls || 'term-text' });
        },

        printHelp() {
            const commands = [
                { cmd: 'help',                   desc: 'Show this help message' },
                { cmd: 'whoami',                  desc: 'About Bastien Jacquelin' },
                { cmd: 'skills',                  desc: 'List technical skills' },
                { cmd: 'contact',                 desc: 'Show contact information' },
                { cmd: 'projects',                desc: 'List notable projects' },
                { cmd: 'ls',                      desc: 'List directory contents' },
                { cmd: 'cat about.txt',           desc: 'Print about info' },
                { cmd: 'date',                    desc: 'Show current date and time' },
                { cmd: 'matrix',                  desc: 'Enter the matrix' },
                { cmd: 'sudo make me a sandwich', desc: '...' },
                { cmd: 'clear',                   desc: 'Clear the terminal' },
            ];
            this.print('Available commands:', 'term-info');
            commands.forEach(({ cmd, desc }) => {
                this.history.push({
                    type: 'output',
                    text: '  ' + cmd.padEnd(28) + desc,
                    class: 'term-text'
                });
            });
        },

        printSkills() {
            this.print('Technical skills:', 'term-info');
            const skills = ['Vue.js', 'Docker', 'Kubernetes', 'CI/CD', 'Python', 'Java', 'C', 'Git', 'Linux'];
            skills.forEach(skill => {
                this.history.push({ type: 'output', text: '  • ' + skill, class: 'term-success' });
            });
        },

        printContact() {
            this.print('Contact:', 'term-info');
            this.history.push({ type: 'output', text: '  LinkedIn  →  https://linkedin.com/in/bastienjacquelin', class: 'term-text' });
            this.history.push({ type: 'output', text: '  GitHub    →  https://github.com/basuw', class: 'term-text' });
            this.history.push({ type: 'output', text: '  Email     →  bastien.jacquelin@outlook.com', class: 'term-text' });
        },

        printProjects() {
            this.print('Projects:', 'term-info');
            const projects = [
                { name: 'Capitalot',   desc: 'Personal finance tracking app' },
                { name: '4L Trophy',   desc: 'Humanitarian rally project and logistics' },
                { name: 'MySeries',    desc: 'TV series tracking web app' },
                { name: 'FallZ',       desc: 'Survival game project' },
            ];
            projects.forEach(({ name, desc }) => {
                this.history.push({
                    type: 'output',
                    text: '  ' + name.padEnd(16) + desc,
                    class: 'term-text'
                });
            });
        },

        printMatrix() {
            const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
            for (let i = 0; i < 5; i++) {
                let line = '';
                for (let j = 0; j < 60; j++) {
                    line += chars[Math.floor(Math.random() * chars.length)] + ' ';
                }
                this.history.push({ type: 'output', text: line, class: 'term-matrix' });
            }
        },
    },
    template: `
    <div class="terminal-page" @click="focusInput">
        <div class="term-output" ref="termOutput">
            <div
                v-for="(line, index) in history"
                :key="index"
                :class="['term-line', line.type === 'input' ? 'term-line--input' : 'term-line--output']"
            >
                <template v-if="line.type === 'input'">
                    <span class="term-prompt">{{ prompt }}</span>
                    <span class="term-cmd">{{ line.text }}</span>
                </template>
                <template v-else>
                    <span :class="['term-text', line.class]">{{ line.text }}</span>
                </template>
            </div>

            <div class="term-input-row" @click.stop="focusInput">
                <span class="term-input-prompt">{{ prompt }}</span>
                <input
                    ref="termInput"
                    class="term-cmd"
                    type="text"
                    v-model="currentInput"
                    @keydown="handleKeydown"
                    @keydown.enter="submitCommand"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                    aria-label="Terminal input"
                />
            </div>
        </div>
    </div>
    `
}
