// Titto Camacho — Website

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SMOOTH NAVIGATION
       ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    /* =========================================
       LANGUAGE SYSTEM
       ========================================= */

    const translations = {

        es: {

            navAbout: "Sobre mí",
            navMusic: "Música",
            navPerformance: "En escena",
            navJourney: "Trayectoria",
            navContact: "Contacto",

            heroEyebrow: "Cantante · Músico · Artista",
            heroSubtitle: "Ecuador · Música · Escena",

            aboutLabel: "01 / Sobre mí",
            aboutTitle: "Una voz.<br>Una formación musical en expansión.",
            aboutText1: "Soy Titto Camacho, cantante y músico ecuatoriano. Mi formación reúne canto, interpretación instrumental, música coral y sinfónica, con experiencia en repertorios que van desde la ópera y la música clásica hasta el rock, jazz, música popular y propuestas contemporáneas.",
            aboutText2: "He participado en proyectos junto a la <strong>Orquesta Sinfónica Juvenil del Ecuador</strong> y distintas agrupaciones musicales y corales de Quito. Actualmente continúo mi formación artística y estudio <strong>Dirección Orquestal</strong> con el maestro Francisco Navarro Lara.",
            aboutSignature: "CANTO. · INTERPRETO. · ESTUDIO. · DIRIJO.",

            musicLabel: "02 / Música",
            musicTitle: "Repertorio<br>y lenguajes.",
            musicMore: "Entre otros repertorios, obras y estilos.",

            performanceLabel: "03 / En escena",
            performanceTitle: "Música<br>en movimiento.",
            performanceIntro: "Una formación artística que se desarrolla en distintos escenarios, formatos y lenguajes musicales.",

            performance1Title: "Concierto",
            performance1Text: "Presentaciones como intérprete vocal en formatos solistas, corales y sinfónicos.",

            performance2Title: "Ópera",
            performance2Text: "Interpretación de repertorio operístico y trabajo escénico aplicado a la voz.",

            performance3Title: "Música coral",
            performance3Text: "Participación en agrupaciones corales y proyectos junto a orquestas y ensambles.",

            performance4Title: "Proyectos musicales",
            performance4Text: "Colaboraciones y propuestas que integran diferentes estilos, músicos y formatos de presentación.",

            journeyLabel: "04 / Trayectoria",

            contactLabel: "05 / Contacto",
            contactTitle: "Hagamos<br>música.",
            contactIntro: "Para conciertos, colaboraciones, proyectos musicales y propuestas artísticas.",

            formName: "Nombre",
            formEmail: "Correo electrónico",
            formReason: "Motivo de contacto",
            formSelect: "Selecciona una opción",
            formConcert: "Concierto",
            formCollab: "Colaboración",
            formProject: "Proyecto musical",
            formProposal: "Propuesta artística",
            formOther: "Otro",
            formMessage: "Mensaje",
            formButton: "Enviar propuesta"

        },


       en: {

    navAbout: "About",
    navMusic: "Music",
    navPerformance: "On Stage",
    navJourney: "Journey",
    navContact: "Contact",

    heroEyebrow: "Singer · Musician · Artist",
    heroSubtitle: "Ecuador · Music · Stage",

    aboutLabel: "01 / About",
    aboutTitle: "A voice.<br>A musical journey in progress.",
    aboutText1: "I am Titto Camacho, an Ecuadorian singer and musician. My artistic development brings together singing, instrumental performance, choral and symphonic music, with experience ranging from opera and classical music to rock, jazz, popular music and contemporary projects.",
    aboutText2: "I have participated in projects alongside the <strong>Ecuadorian Youth Symphony Orchestra</strong> and various musical and choral ensembles in Quito. I am currently continuing my artistic development and studying <strong>Orchestral Conducting</strong> with conductor Francisco Navarro Lara.",
    aboutSignature: "I SING. · I PERFORM. · I STUDY. · I CONDUCT.",

    musicLabel: "02 / Music",
    musicTitle: "Repertoire<br>and musical languages.",
    musicMore: "Among other repertoires, works and styles.",

    performanceLabel: "03 / On Stage",
    performanceTitle: "Music<br>in motion.",
    performanceIntro: "An artistic practice developed across different stages, formats and musical languages.",

    performance1Title: "Concert",
    performance1Text: "Vocal performances in solo, choral and symphonic formats.",

    performance2Title: "Opera",
    performance2Text: "Opera repertoire and stage work applied to vocal performance.",

    performance3Title: "Choral Music",
    performance3Text: "Participation in choral ensembles and projects alongside orchestras and instrumental ensembles.",

    performance4Title: "Musical Projects",
    performance4Text: "Collaborations and artistic projects bringing together different styles, musicians and performance formats.",

    journeyLabel: "04 / Journey",

    contactLabel: "05 / Contact",
    contactTitle: "Let's make<br>music.",
    contactIntro: "For concerts, collaborations, musical projects and artistic proposals.",

    formName: "Name",
    formEmail: "Email",
    formReason: "Reason for contact",
    formSelect: "Select an option",
    formConcert: "Concert",
    formCollab: "Collaboration",
    formProject: "Musical project",
    formProposal: "Artistic proposal",
    formOther: "Other",
    formMessage: "Message",
    formButton: "Send proposal"

}
    };


    /* =========================================
       APPLY LANGUAGE
       ========================================= */

    function setLanguage(language) {

        const t = translations[language];

        if (!t) return;

        document.documentElement.lang = language;


        /* NAVIGATION */

        const navLinks = document.querySelectorAll("nav a");

        if (navLinks.length >= 5) {
            navLinks[0].textContent = t.navAbout;
            navLinks[1].textContent = t.navMusic;
            navLinks[2].textContent = t.navPerformance;
            navLinks[3].textContent = t.navJourney;
            navLinks[4].textContent = t.navContact;
        }


        /* HERO */

        const eyebrow = document.querySelector(".eyebrow");
        const subtitle = document.querySelector(".subtitle");

        if (eyebrow) eyebrow.textContent = t.heroEyebrow;
        if (subtitle) subtitle.textContent = t.heroSubtitle;


        /* ABOUT */

        const aboutLabel = document.querySelector(".about .section-label");
        const aboutTitle = document.querySelector(".about h2");
        const aboutParagraphs = document.querySelectorAll(".about-content p");

        if (aboutLabel) aboutLabel.textContent = t.aboutLabel;
        if (aboutTitle) aboutTitle.innerHTML = t.aboutTitle;

        if (aboutParagraphs.length >= 3) {
            aboutParagraphs[0].innerHTML = t.aboutText1;
            aboutParagraphs[1].innerHTML = t.aboutText2;
            aboutParagraphs[2].innerHTML = t.aboutSignature;
        }


        /* MUSIC */

        const musicLabel = document.querySelector(".music .section-label");
        const musicTitle = document.querySelector(".music h2");
        const musicMore = document.querySelector(".music-more p");

        if (musicLabel) musicLabel.textContent = t.musicLabel;
        if (musicTitle) musicTitle.innerHTML = t.musicTitle;
        if (musicMore) musicMore.textContent = t.musicMore;


        /* PERFORMANCE */

        const performanceLabel = document.querySelector(".performances .section-label");
        const performanceTitle = document.querySelector(".performance-content h2");
        const performanceIntro = document.querySelector(".performance-content > p");

        if (performanceLabel) performanceLabel.textContent = t.performanceLabel;
        if (performanceTitle) performanceTitle.innerHTML = t.performanceTitle;
        if (performanceIntro) performanceIntro.textContent = t.performanceIntro;

        const performanceItems = document.querySelectorAll(".performance-item");

        if (performanceItems.length >= 4) {

            performanceItems[0].querySelector("h3").textContent = t.performance1Title;
            performanceItems[0].querySelector("p").textContent = t.performance1Text;

            performanceItems[1].querySelector("h3").textContent = t.performance2Title;
            performanceItems[1].querySelector("p").textContent = t.performance2Text;

            performanceItems[2].querySelector("h3").textContent = t.performance3Title;
            performanceItems[2].querySelector("p").textContent = t.performance3Text;

            performanceItems[3].querySelector("h3").textContent = t.performance4Title;
            performanceItems[3].querySelector("p").textContent = t.performance4Text;
        }


        /* JOURNEY */

        const journeyLabel = document.querySelector(".journey .section-label");

        if (journeyLabel) {
            journeyLabel.textContent = t.journeyLabel;
        }


        /* CONTACT */

        const contactLabel = document.querySelector(".contact .section-label");
        const contactTitle = document.querySelector(".contact-content h2");
        const contactIntro = document.querySelector(".contact-content > p");

        if (contactLabel) contactLabel.textContent = t.contactLabel;
        if (contactTitle) contactTitle.innerHTML = t.contactTitle;
        if (contactIntro) contactIntro.textContent = t.contactIntro;


        /* FORM */

        const nameLabel = document.querySelector('label[for="name"]');
        const emailLabel = document.querySelector('label[for="email"]');
        const reasonLabel = document.querySelector('label[for="reason"]');
        const messageLabel = document.querySelector('label[for="message"]');

        if (nameLabel) nameLabel.textContent = t.formName;
        if (emailLabel) emailLabel.textContent = t.formEmail;
        if (reasonLabel) reasonLabel.textContent = t.formReason;
        if (messageLabel) messageLabel.textContent = t.formMessage;

        const select = document.querySelector("#reason");

        if (select) {

            select.options[0].textContent = t.formSelect;
            select.options[1].textContent = t.formConcert;
            select.options[2].textContent = t.formCollab;
            select.options[3].textContent = t.formProject;
            select.options[4].textContent = t.formProposal;
            select.options[5].textContent = t.formOther;

        }

        const formButton = document.querySelector(".form-button");

        if (formButton) {
            formButton.textContent = t.formButton;
        }


        /* LANGUAGE BUTTONS */

        document.querySelectorAll(".language button").forEach(button => {

            button.classList.remove("active");

            if (button.dataset.lang === language) {
                button.classList.add("active");
            }

        });


        localStorage.setItem("titto-language", language);
    }


    /* =========================================
       LANGUAGE BUTTON EVENTS
       ========================================= */

    document.querySelectorAll(".language button").forEach(button => {

        button.addEventListener("click", () => {

            const language = button.dataset.lang;

            setLanguage(language);

        });

    });


    /* =========================================
       INITIAL LANGUAGE
       ========================================= */

    const savedLanguage = localStorage.getItem("titto-language") || "es";

    setLanguage(savedLanguage);

});
