// Multi-language translations
const translations = {
    it: {
        otherProjects: "Altri Progetti",
        title: "Distingui O da 0",
        subtitle: "Non confondere più la lettera O con il numero 0. Inserisci il tuo testo e visualizza immediatamente la differenza.",
        inputLabel: "Inserisci il tuo testo:",
        inputPlaceholder: "Inserisci qui il tuo username o password...",
        letterO: "Lettere O:",
        numberZero: "Numeri 0:",
        totalChars: "Caratteri totali:",
        outputTitle: "Testo con differenziazione:",
        emptyState: "Il tuo testo apparirà qui con le differenze evidenziate...",
        legendLetterO: "Lettera O (blu)",
        legendNumberZero: "Numero 0 (arancione)",
        myProjects: "I Miei Progetti",
        project0web: "Distingui facilmente la lettera O dal numero 0",
        projectCalcoloTitle: "Calcolo Straordinario",
        projectCalcoloDesc: "Calcola facilmente le ore di lavoro straordinario",
        viewProject: "Visita Progetto",
        currentProject: "Progetto Corrente",
        comingSoon: "Prossimamente",
        comingSoonText: "Altri progetti in arrivo...",
        footerText: "Tutti i diritti riservati."
    },
    en: {
        otherProjects: "Other Projects",
        title: "Distinguish O from 0",
        subtitle: "Never confuse the letter O with the number 0 again. Enter your text and instantly see the difference.",
        inputLabel: "Enter your text:",
        inputPlaceholder: "Enter your username or password here...",
        letterO: "Letter O:",
        numberZero: "Number 0:",
        totalChars: "Total characters:",
        outputTitle: "Text with differentiation:",
        emptyState: "Your text will appear here with differences highlighted...",
        legendLetterO: "Letter O (blue)",
        legendNumberZero: "Number 0 (orange)",
        myProjects: "My Projects",
        project0web: "Easily distinguish the letter O from the number 0",
        projectCalcoloTitle: "Overtime Calculator",
        projectCalcoloDesc: "Easily calculate your overtime working hours",
        viewProject: "Visit Project",
        currentProject: "Current Project",
        comingSoon: "Coming Soon",
        comingSoonText: "More projects coming soon...",
        footerText: "All rights reserved."
    },
    es: {
        otherProjects: "Otros Proyectos",
        title: "Distingue O de 0",
        subtitle: "No confundas más la letra O con el número 0. Introduce tu texto y visualiza inmediatamente la diferencia.",
        inputLabel: "Introduce tu texto:",
        inputPlaceholder: "Introduce aquí tu nombre de usuario o contraseña...",
        letterO: "Letras O:",
        numberZero: "Números 0:",
        totalChars: "Caracteres totales:",
        outputTitle: "Texto con diferenciación:",
        emptyState: "Tu texto aparecerá aquí con las diferencias resaltadas...",
        legendLetterO: "Letra O (azul)",
        legendNumberZero: "Número 0 (naranja)",
        myProjects: "Mis Proyectos",
        project0web: "Distingue fácilmente la letra O del número 0",
        projectCalcoloTitle: "Calculadora de Horas Extras",
        projectCalcoloDesc: "Calcula fácilmente tus horas de trabajo extraordinario",
        viewProject: "Visitar Proyecto",
        currentProject: "Proyecto Actual",
        comingSoon: "Próximamente",
        comingSoonText: "Más proyectos próximamente...",
        footerText: "Todos los derechos reservados."
    },
    fr: {
        otherProjects: "Autres Projets",
        title: "Distinguer O de 0",
        subtitle: "Ne confondez plus la lettre O avec le chiffre 0. Entrez votre texte et visualisez immédiatement la différence.",
        inputLabel: "Entrez votre texte:",
        inputPlaceholder: "Entrez votre nom d'utilisateur ou mot de passe ici...",
        letterO: "Lettres O:",
        numberZero: "Chiffres 0:",
        totalChars: "Caractères totaux:",
        outputTitle: "Texte avec différenciation:",
        emptyState: "Votre texte apparaîtra ici avec les différences en surbrillance...",
        legendLetterO: "Lettre O (bleu)",
        legendNumberZero: "Chiffre 0 (orange)",
        myProjects: "Mes Projets",
        project0web: "Distinguez facilement la lettre O du chiffre 0",
        projectCalcoloTitle: "Calculatrice d'Heures Supplémentaires",
        projectCalcoloDesc: "Calculez facilement vos heures de travail supplémentaire",
        viewProject: "Visiter le Projet",
        currentProject: "Projet Actuel",
        comingSoon: "Bientôt",
        comingSoonText: "Plus de projets bientôt...",
        footerText: "Tous droits réservés."
    },
    de: {
        otherProjects: "Weitere Projekte",
        title: "O von 0 unterscheiden",
        subtitle: "Verwechseln Sie nie wieder den Buchstaben O mit der Zahl 0. Geben Sie Ihren Text ein und sehen Sie sofort den Unterschied.",
        inputLabel: "Geben Sie Ihren Text ein:",
        inputPlaceholder: "Geben Sie hier Ihren Benutzernamen oder Ihr Passwort ein...",
        letterO: "Buchstaben O:",
        numberZero: "Zahlen 0:",
        totalChars: "Zeichen gesamt:",
        outputTitle: "Text mit Unterscheidung:",
        emptyState: "Ihr Text wird hier mit hervorgehobenen Unterschieden angezeigt...",
        legendLetterO: "Buchstabe O (blau)",
        legendNumberZero: "Zahl 0 (orange)",
        myProjects: "Meine Projekte",
        project0web: "Unterscheiden Sie leicht den Buchstaben O von der Zahl 0",
        projectCalcoloTitle: "Überstundenrechner",
        projectCalcoloDesc: "Berechnen Sie mühelos Ihre Überstunden",
        viewProject: "Projekt besuchen",
        currentProject: "Aktuelles Projekt",
        comingSoon: "Demnächst",
        comingSoonText: "Weitere Projekte folgen bald...",
        footerText: "Alle Rechte vorbehalten."
    }
};

// Current language
let currentLanguage = 'it';

// DOM Elements
const textInput = document.getElementById('textInput');
const outputDisplay = document.getElementById('outputDisplay');
const countO = document.getElementById('countO');
const countZero = document.getElementById('countZero');
const countTotal = document.getElementById('countTotal');
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const projectsBtn = document.getElementById('projectsBtn');
const projectsModal = document.getElementById('projectsModal');
const closeModal = document.getElementById('closeModal');
const themeToggle = document.getElementById('themeToggle');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
        updateLanguage();
    }

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('preferredTheme') || 'dark';
    setTheme(savedTheme);

    // Event listeners
    textInput.addEventListener('input', processText);
    langBtn.addEventListener('click', toggleLanguageDropdown);
    projectsBtn.addEventListener('click', openProjectsModal);
    closeModal.addEventListener('click', closeProjectsModal);
    themeToggle.addEventListener('click', toggleTheme);
    
    // Close modal on outside click
    projectsModal.addEventListener('click', (e) => {
        if (e.target === projectsModal) {
            closeProjectsModal();
        }
    });

    // Language dropdown buttons
    const langButtons = langDropdown.querySelectorAll('[data-lang]');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('show');
        }
    });
});

// Process text and differentiate O from 0
function processText() {
    const text = textInput.value;
    let oCount = 0;
    let zeroCount = 0;
    
    if (text.length === 0) {
        outputDisplay.innerHTML = `<div class="empty-state" data-i18n="emptyState">${translations[currentLanguage].emptyState}</div>`;
        countO.textContent = '0';
        countZero.textContent = '0';
        countTotal.textContent = '0';
        return;
    }
    
    let output = '';
    
    for (let char of text) {
        if (char === 'O' || char === 'o') {
            oCount++;
            output += `<span class="letter-o">${char}</span>`;
        } else if (char === '0') {
            zeroCount++;
            output += `<span class="number-zero">${char}</span>`;
        } else {
            output += `<span class="other-char">${escapeHtml(char)}</span>`;
        }
    }
    
    outputDisplay.innerHTML = output;
    countO.textContent = oCount;
    countZero.textContent = zeroCount;
    countTotal.textContent = text.length;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Toggle language dropdown
function toggleLanguageDropdown() {
    langDropdown.classList.toggle('show');
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguage();
    langDropdown.classList.remove('show');
}

// Update all translatable elements
function updateLanguage() {
    currentLangSpan.textContent = currentLanguage.toUpperCase();
    document.documentElement.lang = currentLanguage;
    
    // Update all elements with data-i18n attribute
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholder
    const placeholder = document.querySelector('[data-i18n-placeholder]');
    if (placeholder) {
        placeholder.placeholder = translations[currentLanguage].inputPlaceholder;
    }
    
    // Reprocess text to update empty state if needed
    if (textInput.value.length === 0) {
        processText();
    }
}

// Open projects modal
function openProjectsModal() {
    projectsModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close projects modal
function closeProjectsModal() {
    projectsModal.classList.remove('show');
    document.body.style.overflow = '';
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Set theme
function setTheme(theme) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('preferredTheme', theme);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Close modal with Escape key
    if (e.key === 'Escape' && projectsModal.classList.contains('show')) {
        closeProjectsModal();
    }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Analytics: Count characters processed (client-side only)
let totalCharsProcessed = 0;
textInput.addEventListener('input', () => {
    totalCharsProcessed = textInput.value.length;
});

// Console easter egg
console.log('%c0web', 'font-size: 40px; font-weight: bold; background: linear-gradient(135deg, #3b82f6, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cDistingui facilmente O da 0! 🚀', 'font-size: 16px; color: #3b82f6;');
console.log('%cPrivacy-first • No data leaves your browser', 'font-size: 12px; color: #94a3b8;');
