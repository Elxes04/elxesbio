// Multi-language translation system
const translations = {
    it: {
        // Navigation
        nav: {
            home: "Home",
            about: "Chi Sono",
            contact: "Contatti"
        },
        // Home Section
        home: {
            greeting: "Ciao, sono Elxes",
            subtitle: "Software Developer • 20 anni • Italia",
            description: "Sono una software developer appassionata di tecnologia e sviluppo software. Ho iniziato a programmare quando avevo 12 anni e non mi sono più fermata.",
            skills: {
                languages: "Linguaggi",
                specializations: "Specializzazioni"
            }
        },
        // About Section
        about: {
            title: "Chi Sono",
            description: "Sono una ragazza appassionata di tecnologia e sviluppo software. Ho iniziato a programmare quando avevo 12 anni e non mi sono più fermata. Credo che il codice sia un potente strumento per cambiare il mondo. :)",
            timeline: {
                "2016": "Inizio del mio viaggio nella programmazione",
                "2024": "Software Developer con 8 anni di esperienza"
            }
        },
        // Contact Section
        contact: {
            title: "Contatti",
            intro: "Se vuoi metterti in contatto con me, puoi trovarmi qui:"
        },
        // Footer
        footer: {
            copyright: "Creato con ❤️ e JavaScript."
        },
        // Available languages
        languages: {
            it: "Italiano",
            en: "English",
            ru: "Русский",
            pl: "Polski",
            es: "Español",
            fr: "Français",
            de: "Deutsch"
        }
    },
    
    en: {
        nav: {
            home: "Home",
            about: "About",
            contact: "Contact"
        },
        home: {
            greeting: "Hi, I'm Elxes",
            subtitle: "Software Developer • 20 years old • Italy",
            description: "I'm a software developer passionate about technology and software development. I started programming when I was 12 years old and I never stopped.",
            skills: {
                languages: "Languages",
                specializations: "Specializations"
            }
        },
        about: {
            title: "About Me",
            description: "I'm a girl passionate about technology and software development. I started programming when I was 12 years old and I never stopped. I believe that code is a powerful tool to change the world. :)",
            timeline: {
                "2016": "Beginning of my programming journey",
                "2024": "Software Developer with 8 years of experience"
            }
        },
        contact: {
            title: "Contact",
            intro: "If you want to get in touch with me, you can find me here:"
        },
        footer: {
            copyright: "Created with ❤️ and JavaScript."
        },
        languages: {
            it: "Italiano",
            en: "English",
            ru: "Русский",
            pl: "Polski",
            es: "Español",
            fr: "Français",
            de: "Deutsch"
        }
    },
    
    ru: {
        nav: {
            home: "Главная",
            about: "Обо мне",
            contact: "Контакты"
        },
        home: {
            greeting: "Привет, я Elxes",
            subtitle: "Разработчик ПО • 20 лет • Италия",
            description: "Я разработчик программного обеспечения, увлеченная технологиями и разработкой ПО. Я начала программировать в 12 лет и не останавливаюсь.",
            skills: {
                languages: "Языки программирования",
                specializations: "Специализации"
            }
        },
        about: {
            title: "Обо мне",
            description: "Я девушка, увлеченная технологиями и разработкой программного обеспечения. Я начала программировать в 12 лет и не останавливаюсь. Я верю, что код - это мощный инструмент для изменения мира. :)",
            timeline: {
                "2016": "Начало моего пути в программировании",
                "2024": "Разработчик ПО с 8-летним опытом"
            }
        },
        contact: {
            title: "Контакты",
            intro: "Если вы хотите связаться со мной, вы можете найти меня здесь:"
        },
        footer: {
            copyright: "Создано с ❤️ и JavaScript."
        },
        languages: {
            it: "Italiano",
            en: "English",
            ru: "Русский",
            pl: "Polski",
            es: "Español",
            fr: "Français",
            de: "Deutsch"
        }
    },
    
    pl: {
        nav: {
            home: "Strona główna",
            about: "O mnie",
            contact: "Kontakt"
        },
        home: {
            greeting: "Cześć, jestem Elxes",
            subtitle: "Programistka • 20 lat • Włochy",
            description: "Jestem programistką pasjonującą się technologią i rozwojem oprogramowania. Zaczęłam programować w wieku 12 lat i nie przestałam.",
            skills: {
                languages: "Języki programowania",
                specializations: "Specjalizacje"
            }
        },
        about: {
            title: "O mnie",
            description: "Jestem dziewczyną pasjonującą się technologią i rozwojem oprogramowania. Zaczęłam programować w wieku 12 lat i nie przestałam. Wierzę, że kod to potężne narzędzie do zmiany świata. :)",
            timeline: {
                "2016": "Początek mojej podróży w programowaniu",
                "2024": "Programistka z 8-letnim doświadczeniem"
            }
        },
        contact: {
            title: "Kontakt",
            intro: "Jeśli chcesz się ze mną skontaktować, możesz znaleźć mnie tutaj:"
        },
        footer: {
            copyright: "Stworzone z ❤️ i JavaScript."
        },
        languages: {
            it: "Italiano",
            en: "English",
            ru: "Русский",
            pl: "Polski",
            es: "Español",
            fr: "Français",
            de: "Deutsch"
        }
    },
    
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            contact: "Contacto"
        },
        home: {
            greeting: "Hola, soy Elxes",
            subtitle: "Desarrolladora de Software • 20 años • Italia",
            description: "Soy una desarrolladora de software apasionada por la tecnología y el desarrollo de software. Empecé a programar cuando tenía 12 años y no me he detenido.",
            skills: {
                languages: "Lenguajes",
                specializations: "Especializaciones"
            }
        },
        about: {
            title: "Sobre mí",
            description: "Soy una chica apasionada por la tecnología y el desarrollo de software. Empecé a programar cuando tenía 12 años y no me he detenido. Creo que el código es una herramienta poderosa para cambiar el mundo. :)",
            timeline: {
                "2016": "Inicio de mi viaje en la programación",
                "2024": "Desarrolladora de Software con 8 años de experiencia"
            }
        },
        contact: {
            title: "Contacto",
            intro: "Si quieres ponerte en contacto conmigo, puedes encontrarme aquí:"
        },
        footer: {
            copyright: "Creado con ❤️ y JavaScript."
        },
        languages: {
            it: "Italiano",
            en: "English",
            ru: "Русский",
            pl: "Polski",
            es: "Español",
            fr: "Français",
            de: "Deutsch"
        }
    },
    
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            contact: "Contact"
        },
        home: {
            greeting: "Bonjour, je suis Elxes",
            subtitle: "Développeuse de logiciels • 20 ans • Italie",
            description: "Je suis une développeuse de logiciels passionnée par la technologie et le développement de logiciels. J'ai commencé à programmer à l'âge de 12 ans et je ne me suis jamais arrêtée.",
            skills: {
                languages: "Langages",
                specializations: "Spécialisations"
            }
        },
        about: {
            title: "À propos",
            description: "Je suis une fille passionnée par la technologie et le développement de logiciels. J'ai commencé à programmer à l'âge de 12 ans et je ne me suis jamais arrêtée. Je crois que le code est un outil puissant pour changer le monde. :)",
            timeline: {
                "2016": "Début de mon voyage dans la programmation",
                "2024": "Développeuse de logiciels avec 8 ans d'expérience"
            }
        },
        contact: {
            title: "Contact",
            intro: "Si vous voulez me contacter, vous pouvez me trouver ici :"
        },
        footer: {
            copyright: "Créé avec ❤️ et JavaScript."
        },
        languages: {
            it: "Italiano",
            en: "English",
            ru: "Русский",
            pl: "Polski",
            es: "Español",
            fr: "Français",
            de: "Deutsch"
        }
    },
    
    de: {
        nav: {
            home: "Startseite",
            about: "Über mich",
            contact: "Kontakt"
        },
        home: {
            greeting: "Hallo, ich bin Elxes",
            subtitle: "Softwareentwicklerin • 20 Jahre • Italien",
            description: "Ich bin eine Softwareentwicklerin, die sich für Technologie und Softwareentwicklung begeistert. Ich habe mit 12 Jahren angefangen zu programmieren und nie aufgehört.",
            skills: {
                languages: "Programmiersprachen",
                specializations: "Spezialisierungen"
            }
        },
        about: {
            title: "Über mich",
            description: "Ich bin ein Mädchen, das sich für Technologie und Softwareentwicklung begeistert. Ich habe mit 12 Jahren angefangen zu programmieren und nie aufgehört. Ich glaube, dass Code ein mächtiges Werkzeug ist, um die Welt zu verändern. :)",
            timeline: {
                "2016": "Beginn meiner Reise in der Programmierung",
                "2024": "Softwareentwicklerin mit 8 Jahren Erfahrung"
            }
        },
        contact: {
            title: "Kontakt",
            intro: "Wenn Sie mit mir in Kontakt treten möchten, können Sie mich hier finden:"
        },
        footer: {
            copyright: "Erstellt mit ❤️ und JavaScript."
        },
        languages: {
            it: "Italiano",
            en: "English",
            ru: "Русский",
            pl: "Polski",
            es: "Español",
            fr: "Français",
            de: "Deutsch"
        }
    }
};

// Function to get the current language
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'it';
}

// Function to update the page language
function updatePageLanguage(lang) {
    console.log('Updating language to:', lang);

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key, lang);
        if (translation && translation !== key) {
            // Replace content directly (already cleaned externally)
            element.textContent = translation;
            console.log(`Updated ${key}: ${translation}`);
        }
    });

    // Update document language attribute
    document.documentElement.lang = lang;

    // Update page title
    const title = document.querySelector('title');
    if (title) {
        title.textContent = `Elxes - Software Developer (${t(`languages.${lang}`, lang)})`;
    }

    console.log('Language update completed');
}

// Function to set the language
function setLanguage(lang) {
    if (translations[lang]) {
        localStorage.setItem('language', lang);
        updatePageLanguage(lang);

        // Update language selector UI
        const languageBtn = document.getElementById('languageBtn');
        if (languageBtn && typeof t === 'function') {
            const currentLangText = t(`languages.${lang}`);
            const span = languageBtn.querySelector('span');
            if (span) {
                span.textContent = currentLangText;
            }
        }
        const languageOptions = document.querySelectorAll('.language-dropdown a');
        languageOptions.forEach(option => {
            const optionLang = option.getAttribute('data-lang');
            if (optionLang === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        window.dispatchEvent(new Event('languageChanged'));
    }
}

// Function to get a translation
function t(key, lang = getCurrentLanguage()) {
    const keys = key.split('.');
    let value = translations[lang];

    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            // Fallback to Italian
            value = translations['it'];
            for (const fallbackKey of keys) {
                if (value && value[fallbackKey] !== undefined) {
                    value = value[fallbackKey];
                } else {
                    return key; // Return key if translation not found
                }
            }
        }
    }

    return value || key;
}

// Export functions for global use
window.translations = translations;
window.getCurrentLanguage = getCurrentLanguage;
window.setLanguage = setLanguage;
window.t = t;
window.updatePageLanguage = updatePageLanguage;
