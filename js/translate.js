const translations = {
    en: {
        'hero-title': 'Professional Crane Rental Services',
        'hero-subtitle': 'Your Trusted Partner in Heavy Construction Equipment',
        'request-quote': 'Request a Quote',
        'equipment-title': 'Our Equipment',
        'contact-title': 'Contact Us',
        'contact-info': 'Contact Information',
        'follow-us': 'Follow Us',
        'send-inquiry': 'Send Inquiry',
        'services-title': 'Our Services',
        'faq-title': 'Frequently Asked Questions',
        'projects-title': 'Our Projects',
        'crane-rental': 'Crane Rental',
        'operator-training': 'Operator Training',
        'maintenance': 'Maintenance',
        'project-planning': 'Project Planning',
        'reviews-title': 'Client Reviews',
        'view-equipment': 'View Equipment',
        'address': 'Address',
        'phone': 'Phone',
        'email': 'Email',
        'your-name': 'Your Name',
        'your-email': 'Your Email',
        'project-details': 'Project Details',
        'why-choose-us': 'Why Choose Us',
        'safety-first': 'Safety First',
        'support-247': '24/7 Support',
        'certified-equipment': 'Certified Equipment',
        'expert-team': 'Expert Team',
        'competitive-pricing': 'Competitive Pricing'
    },
    uk: {
        'hero-title': 'Професійні послуги оренди кранів',
        'hero-subtitle': 'Ваш надійний партнер у будівельній техніці',
        'request-quote': 'Запитати ціну',
        'equipment-title': 'Наша техніка',
        'contact-title': 'Зв\'яжіться з нами',
        'contact-info': 'Контактна інформація',
        'follow-us': 'Слідкуйте за нами',
        'send-inquiry': 'Надіслати запит',
        'services-title': 'Наші послуги',
        'faq-title': 'Часті запитання',
        'projects-title': 'Наші проекти',
        'crane-rental': 'Оренда кранів',
        'operator-training': 'Навчання операторів',
        'maintenance': 'Технічне обслуговування',
        'project-planning': 'Планування проектів',
        'reviews-title': 'Відгуки клієнтів',
        'view-equipment': 'Переглянути техніку',
        'address': 'Адреса',
        'phone': 'Телефон',
        'email': 'Електронна пошта',
        'your-name': 'Ваше ім\'я',
        'your-email': 'Ваша пошта',
        'project-details': 'Деталі проекту',
        'why-choose-us': 'Чому обрати нас',
        'safety-first': 'Безпека передусім',
        'support-247': 'Цілодобова підтримка',
        'certified-equipment': 'Сертифіковане обладнання',
        'expert-team': 'Команда експертів',
        'competitive-pricing': 'Конкурентні ціни'
    }
};

let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    updateLanguage();
    
    // Update language button text
    const langBtn = document.querySelector('.language-btn');
    langBtn.innerHTML = `<i class="fas fa-globe"></i> ${currentLanguage.toUpperCase()}`;
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Initialize translations
document.addEventListener('DOMContentLoaded', updateLanguage); 