// Internationalization (i18n) System
const translations = {
    ko: {
        // Navigation
        nav_home: "홈",
        nav_about: "회사소개", 
        nav_services: "서비스",
        nav_portfolio: "포트폴리오",
        nav_contact: "문의하기",
        
        // Hero Section
        hero_title: "AI와 클라우드로 만드는",
        hero_highlight: "디지털 미래",
        hero_subtitle: "InnovateTech는 첨단 AI 기술과 안정적인 클라우드 인프라로<br>기업의 디지털 전환을 성공적으로 이끌어갑니다",
        btn_services: "서비스 알아보기",
        btn_contact: "무료 상담 신청",
        
        // Features
        feature1_title: "AI 기반 솔루션",
        feature1_desc: "머신러닝과 딥러닝 기술을 활용한 지능형 비즈니스 솔루션을 제공합니다",
        feature2_title: "클라우드 인프라", 
        feature2_desc: "AWS, Azure 기반의 확장 가능하고 안정적인 클라우드 시스템을 구축합니다",
        feature3_title: "데이터 사이언스",
        feature3_desc: "빅데이터 분석과 시각화로 비즈니스 인사이트를 도출합니다",
        
        // About Section
        about_title: "회사소개",
        about_subtitle: "AI와 클라우드 전문 기업",
        about_desc1: "InnovateTech는 2015년 설립된 AI와 클라우드 전문 기업으로, 국내 대기업부터 스타트업까지 300여 개 기업의 디지털 전환을 성공적으로 지원했습니다.",
        about_desc2: "삼성, LG, 현대자동차 등 대기업과의 파트너십을 통해 검증된 기술력을 보유하고 있으며, AWS 파트너사, Microsoft Gold Partner로 인정받고 있습니다.",
        stat1_number: "300+",
        stat1_label: "성공 프로젝트",
        stat2_number: "50+", 
        stat2_label: "대기업 고객",
        stat3_number: "8년",
        stat3_label: "AI/클라우드 전문",
        chart_title: "연도별 성장률",
        
        // Services
        services_title: "서비스",
        tech_capabilities: "핵심 기술 역량",
        service1_title: "AI 솔루션",
        service1_desc: "머신러닝, 자연어처리, 컴퓨터비전을 활용한 맞춤형 AI 솔루션",
        service2_title: "클라우드 마이그레이션",
        service2_desc: "AWS, Azure, GCP 기반 안전하고 효율적인 클라우드 전환",
        service3_title: "데이터 분석",
        service3_desc: "빅데이터 플랫폼 구축과 실시간 데이터 분석 대시보드 제공",
        
        // Contact
        contact_title: "문의하기",
        contact_info: "연락처 정보",
        contact_form_title: "무료 상담 신청",
        form_company: "회사명",
        form_name: "담당자명",
        form_phone: "연락처",
        form_email: "이메일",
        form_message: "문의내용",
        btn_submit: "문의하기",
        
        // Footer
        footer_tagline: "AI와 클라우드로 만드는 디지털 미래",
        footer_links: "빠른 링크",
        footer_services: "서비스",
        footer_legal: "법적 고지",
        copyright: "2024 InnovateTech Co., Ltd. All rights reserved. | 사업자등록번호: 123-45-67890"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services", 
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Building Digital Future with",
        hero_highlight: "AI & Cloud",
        hero_subtitle: "InnovateTech leads successful digital transformation with<br>cutting-edge AI technology and reliable cloud infrastructure",
        btn_services: "Explore Services",
        btn_contact: "Free Consultation",
        
        // Features
        feature1_title: "AI-Powered Solutions",
        feature1_desc: "Providing intelligent business solutions using machine learning and deep learning technologies",
        feature2_title: "Cloud Infrastructure",
        feature2_desc: "Building scalable and reliable cloud systems based on AWS and Azure",
        feature3_title: "Data Science",
        feature3_desc: "Deriving business insights through big data analysis and visualization",
        
        // About Section
        about_title: "About Us",
        about_subtitle: "AI & Cloud Technology Experts",
        about_desc1: "Founded in 2015, InnovateTech is an AI and cloud specialist company that has successfully supported digital transformation for over 300 companies, from large enterprises to startups.",
        about_desc2: "We possess proven technological capabilities through partnerships with major corporations like Samsung, LG, and Hyundai Motor, and are recognized as an AWS Partner and Microsoft Gold Partner.",
        stat1_number: "300+",
        stat1_label: "Successful Projects",
        stat2_number: "50+",
        stat2_label: "Enterprise Clients", 
        stat3_number: "8 Years",
        stat3_label: "AI/Cloud Expertise",
        chart_title: "Annual Growth Rate",
        
        // Services
        services_title: "Services",
        tech_capabilities: "Core Technical Capabilities",
        service1_title: "AI Solutions",
        service1_desc: "Custom AI solutions utilizing machine learning, NLP, and computer vision",
        service2_title: "Cloud Migration", 
        service2_desc: "Safe and efficient cloud transformation based on AWS, Azure, GCP",
        service3_title: "Data Analytics",
        service3_desc: "Big data platform construction and real-time data analysis dashboard provision",
        
        // Contact
        contact_title: "Contact Us",
        contact_info: "Contact Information",
        contact_form_title: "Free Consultation Request",
        form_company: "Company Name",
        form_name: "Contact Person",
        form_phone: "Phone Number",
        form_email: "Email",
        form_message: "Message",
        btn_submit: "Send Message",
        
        // Footer
        footer_tagline: "Building Digital Future with AI & Cloud",
        footer_links: "Quick Links",
        footer_services: "Services", 
        footer_legal: "Legal Notice",
        copyright: "2024 InnovateTech Co., Ltd. All rights reserved. | Business Registration: 123-45-67890"
    }
};

class I18n {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }
    
    detectLanguage() {
        // Check URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && translations[langParam]) {
            return langParam;
        }
        
        // Check localStorage
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        
        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) {
            return browserLang;
        }
        
        return 'ko'; // Default to Korean
    }
    
    init() {
        this.createLanguageSwitcher();
        this.translatePage();
        this.updateUrl();
    }
    
    createLanguageSwitcher() {
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <button class="lang-btn ${this.currentLang === 'ko' ? 'active' : ''}" data-lang="ko">
                🇰🇷 한국어
            </button>
            <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">
                🇺🇸 English
            </button>
        `;
        
        // Add to navigation
        const nav = document.querySelector('.nav-menu');
        if (nav) {
            nav.appendChild(switcher);
        }
        
        // Add event listeners
        switcher.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const newLang = e.target.dataset.lang;
                this.switchLanguage(newLang);
            });
        });
    }
    
    switchLanguage(lang) {
        if (!translations[lang]) return;
        
        this.currentLang = lang;
        localStorage.setItem('preferred-language', lang);
        this.translatePage();
        this.updateUrl();
        this.updateLanguageSwitcher();
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.dataset.i18n;
            const translation = translations[this.currentLang][key];
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
        
        // Update document title
        if (this.currentLang === 'en') {
            document.title = 'InnovateTech - Leading AI & Cloud Solutions Provider';
        } else {
            document.title = 'InnovateTech - 혁신적인 IT 솔루션의 선두주자';
        }
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            if (this.currentLang === 'en') {
                metaDesc.content = 'InnovateTech is a leading AI, cloud, and big data specialist IT company. Start your digital innovation with InnovateTech.';
            } else {
                metaDesc.content = 'InnovateTech는 AI, 클라우드, 빅데이터 전문 IT 기업입니다. 디지털 전환과 혁신적인 기술 솔루션으로 기업의 성장을 이끕니다.';
            }
        }
    }
    
    updateUrl() {
        const url = new URL(window.location);
        url.searchParams.set('lang', this.currentLang);
        window.history.replaceState({}, '', url);
    }
    
    updateLanguageSwitcher() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }
    
    t(key) {
        return translations[this.currentLang][key] || key;
    }
}

// Initialize i18n system
const i18n = new I18n();