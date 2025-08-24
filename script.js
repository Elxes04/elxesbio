// Navigation and interactive features
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-dropdown a');
    
    // Set active section
    function setActiveSection(sectionId) {
        sections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));
        const targetSection = document.getElementById(sectionId);
        const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (targetSection) targetSection.classList.add('active');
        if (targetLink) targetLink.classList.add('active');
        history.pushState(null, null, `#${sectionId}`);
    }
    
    // Navigation link event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            setActiveSection(sectionId);
            // Close mobile menu and reset hamburger
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
            if (navToggle.classList.contains('active')) {
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (navToggle.classList.contains('active')) {
                    navToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const currentSection = document.querySelector('.section.active');
        if (!currentSection) return;
        const currentIndex = Array.from(sections).indexOf(currentSection);
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % sections.length;
            const nextSection = sections[nextIndex];
            setActiveSection(nextSection.id);
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
            const prevSection = sections[prevIndex];
            setActiveSection(prevSection.id);
        }
    });
    
    // Scroll navigation
    let isScrolling = false;
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (isScrolling) return;
        isScrolling = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 150);
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.id;
                const currentActiveLink = document.querySelector('.nav-link.active');
                const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
                if (currentActiveLink !== targetLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (targetLink) targetLink.classList.add('active');
                }
            }
        });
    });
    
    // Handle initial URL hash
    function handleInitialHash() {
        const hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            setActiveSection(hash);
        } else {
            setActiveSection('home');
        }
    }
    
    // Handle hash change
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            setActiveSection(hash);
        }
    });
    
    // Initialization
    handleInitialHash();
    
    // Initialize language selector
    setTimeout(() => {
        if (typeof t !== 'undefined' && typeof getCurrentLanguage !== 'undefined') {
            const currentLang = getCurrentLanguage();
            const languageBtn = document.getElementById('languageBtn');
            if (languageBtn) {
                const currentLangText = t(`languages.${currentLang}`);
                const span = languageBtn.querySelector('span');
                if (span) {
                    span.textContent = currentLangText;
                }
            }
            const languageOptions = document.querySelectorAll('.language-dropdown a');
            languageOptions.forEach(option => {
                const lang = option.getAttribute('data-lang');
                if (lang === currentLang) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            console.log('Language selector initialized for:', currentLang);
        } else {
            console.warn('Translation functions not available');
        }
    }, 200);
    
    // Language selector logic
    if (languageBtn && languageDropdown) {
        console.log('Configuring language selector...');
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
            console.log('Dropdown toggled');
        });
        document.addEventListener('click', function(e) {
            if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('active');
            }
        });
        languageOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                const langText = this.textContent;
                console.log('Selected language:', lang, langText);
                if (typeof setLanguage !== 'undefined' && typeof t !== 'undefined') {
                    setLanguage(lang);
                    const currentLangText = t(`languages.${lang}`);
                    if (languageBtn.querySelector('span')) {
                        languageBtn.querySelector('span').textContent = currentLangText;
                    }
                } else {
                    if (languageBtn.querySelector('span')) {
                        languageBtn.querySelector('span').textContent = langText;
                    }
                    console.log('Language changed to:', lang);
                }
                languageDropdown.classList.remove('active');
                languageOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                localStorage.setItem('language', lang);
            });
        });
    }
    
    // Dark/light theme toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    }

    function getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Check system preference if no saved theme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    themeToggleBtn.addEventListener('click', () => {
        themeToggleBtn.classList.remove('rotating');
        void themeToggleBtn.offsetWidth; // Force reflow
        themeToggleBtn.classList.add('rotating');
        setTimeout(() => {
            themeToggleBtn.classList.remove('rotating');
        }, 500);
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Set initial theme
    setTheme(getInitialTheme());
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    document.querySelectorAll('.skill-tag, .contact-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Parallax effect for avatar
    window.addEventListener('scroll', function() {
        const avatar = document.querySelector('.avatar');
        if (avatar) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            avatar.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Skill tag hover effect
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Typing effect for main title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Apply typing effect to main title when home section is active
    const heroTitle = document.querySelector('.hero-title');
    let typingDone = false;
    if (heroTitle) {
        function updateHeroTyping() {
            const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'it';
            const greeting = typeof t === 'function' ? t('home.greeting', currentLang) : heroTitle.textContent;
            heroTitle.textContent = '';
            typeWriter(heroTitle, greeting, 80);
        }
        const homeSection = document.getElementById('home');
        const homeObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.classList.contains('active') && !typingDone) {
                    typingDone = true;
                    updateHeroTyping();
                }
            });
        }, { threshold: 0.5 });
        if (homeSection) {
            homeObserver.observe(homeSection);
        }
        window.addEventListener('languageChanged', function() {
            typingDone = false;
            if (homeSection.classList.contains('active')) {
                updateHeroTyping();
                typingDone = true;
            }
        });
    }
    
    // Background particle effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
        `;
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        document.body.appendChild(particle);
        const animation = particle.animate([
            { transform: 'translateY(0px)', opacity: 0.3 },
            { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'linear'
        });
        animation.onfinish = () => {
            particle.remove();
        };
    }
    setInterval(createParticle, 2000);

    // Apply saved language on page load
    const savedLang = localStorage.getItem('language') || 'it';
    setLanguage(savedLang);
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Window resize handler
window.addEventListener('resize', debounce(function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}, 250));

// Translation functions
function initializeTranslations() {
    if (typeof getCurrentLanguage === 'undefined' || typeof t === 'undefined' || typeof updatePageLanguage === 'undefined') {
        console.warn('Translation functions not available');
        return;
    }
    const currentLang = getCurrentLanguage();
    console.log('Applying translations for language:', currentLang);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        element.textContent = '';
    });
    updatePageLanguage(currentLang);
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        const currentLangText = t(`languages.${currentLang}`);
        const span = languageBtn.querySelector('span');
        if (span) {
            span.textContent = currentLangText;
        }
    }
    const languageOptions = document.querySelectorAll('.language-dropdown a');
    languageOptions.forEach(option => {
        const lang = option.getAttribute('data-lang');
        if (lang === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    document.documentElement.lang = currentLang;
    console.log('Translations applied for language:', currentLang);
}

// Utility to add a new language
function addNewLanguage(langCode, translations) {
    if (window.translations) {
        window.translations[langCode] = translations;
        console.log(`Language ${langCode} added successfully!`);
    }
}

// Set language and emit custom event
function setLanguage(lang) {
    if (translations[lang]) {
        localStorage.setItem('language', lang);
        updatePageLanguage(lang);
        window.dispatchEvent(new Event('languageChanged'));
    }
}

// Translate specializations function
function translateSpecializations() {
    const currentLang = getCurrentLanguage();
    console.log('Translating specializations for language:', currentLang);
    
    const specializationTags = document.querySelectorAll('.skill-category:nth-child(2) .skill-tag');
    console.log('Found specialization tags:', specializationTags.length);
    
    specializationTags.forEach((tag, index) => {
        const keys = ['web', 'desktop', 'mobile', 'backend', 'frontend', 'api'];
        if (keys[index]) {
            const translation = t(`home.specializationsList.${keys[index]}`, currentLang);
            if (translation && translation !== `home.specializationsList.${keys[index]}`) {
                tag.textContent = translation;
                console.log(`Translated ${keys[index]}: ${translation}`);
            }
        }
    });
}

// Initialize specializations translation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        if (typeof getCurrentLanguage === 'function' && typeof t === 'function') {
            translateSpecializations();
        }
    }, 1000);
    
    window.addEventListener('languageChanged', function() {
        setTimeout(() => {
            translateSpecializations();
        }, 200);
    });
});

// Ensure translations are applied on window load
window.addEventListener('load', function() {
    setTimeout(() => {
        if (typeof getCurrentLanguage === 'function' && typeof t === 'function') {
            translateSpecializations();
        }
    }, 500);
});

