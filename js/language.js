// 언어 전환 시스템
const translations = {
    ko: {
        // 네비게이션
        nav_home: "홈",
        nav_ceo: "CEO 인사말",
        nav_about: "회사소개", 
        nav_services: "서비스",
        nav_portfolio: "포트폴리오",
        nav_contact: "문의하기",
        
        // 히어로 섹션
        hero_title: "AI와 클라우드로 만드는",
        hero_highlight: "디지털 미래",
        hero_subtitle: "InnovateTech는 첨단 AI 기술과 안정적인 클라우드 인프라로<br>기업의 디지털 전환을 성공적으로 이끌어갑니다",
        btn_services: "서비스 알아보기",
        btn_contact: "무료 상담 신청",
        
        // 특징
        feature1_title: "AI 기반 솔루션",
        feature1_desc: "머신러닝과 딥러닝 기술을 활용한 지능형 비즈니스 솔루션을 제공합니다",
        feature2_title: "클라우드 인프라", 
        feature2_desc: "AWS, Azure 기반의 확장 가능하고 안정적인 클라우드 시스템을 구축합니다",
        feature3_title: "데이터 사이언스",
        feature3_desc: "빅데이터 분석과 시각화로 비즈니스 인사이트를 도출합니다",
        
        // 회사소개
        about_title: "회사소개",
        about_subtitle: "AI와 클라우드 전문 기업",
        about_desc1: "InnovateTech는 2015년 설립된 AI와 클라우드 전문 기업으로, 국내 대기업부터 스타트업까지 300여 개 기업의 디지털 전환을 성공적으로 지원했습니다.",
        about_desc2: "삼성, LG, 현대자동차 등 대기업과의 파트너십을 통해 검증된 기술력을 보유하고 있으며, AWS 파트너사, Microsoft Gold Partner로 인정받고 있습니다.",
        chart_title: "연도별 성장률",
        
        // 서비스
        services_title: "서비스",
        services_subtitle: "전문 기술력으로 고객의 성공을 이끌어갑니다",
        tech_capabilities: "핵심 기술 역량",
        // 서비스 통계
        stat_projects: "완료 프로젝트",
        stat_satisfaction: "고객 만족도", 
        stat_partners: "파트너 기업",
        stat_support: "기술 지원",
        stat_expertise: "기술 전문성", 
        stat_security: "보안 준수",
        // 서비스 통계 숫자와 비율
        stat_number_1: "300+",
        stat_number_2: "50+",
        stat_number_3: "8년",
        stat_percentage_1: "95%",
        stat_percentage_2: "24/7",
        stat_percentage_3: "100%",
        
        service1_title: "AI 솔루션",
        service1_desc: "최신 딥러닝 기술과 대화형 AI를 활용하여 기업의 업무 효율성을 극대화하는 맞춤형 인공지능 솔루션을 제공합니다.",
        service2_title: "클라우드 인프라",
        service2_desc: "AWS, Azure, GCP 멀티 클라우드 환경에서 확장성과 보안성을 갖춘 엔터프라이즈급 클라우드 인프라를 설계하고 구축합니다.",
        service3_title: "데이터 분석",
        service3_desc: "빅데이터 수집부터 실시간 분석, 시각화까지 데이터 기반 의사결정을 위한 종합 솔루션을 제공합니다.",
        service4_title: "디지털 플랫폼",
        service4_desc: "React, Vue.js 기반 현대적인 웹/앱 플랫폼 개발",
        service5_title: "보안 솔루션",
        service5_desc: "Zero Trust 보안 모델과 컴플라이언스 준수 솔루션",
        service6_title: "디지털 컨설팅",
        service6_desc: "디지털 전환 전략 수립부터 실행까지 전 과정 컨설팅",
        
        // 통계
        stat1_number: "300+",
        stat1_label: "성공 프로젝트",
        stat2_number: "50+", 
        stat2_label: "대기업 고객",
        stat3_number: "8년",
        stat3_label: "AI/클라우드 전문",
        
        // 연락처
        contact_title: "문의하기",
        contact_info: "연락처 정보",
        contact_form_title: "무료 상담 신청",
        form_company: "회사명",
        form_name: "담당자명",
        form_phone: "연락처",
        form_email: "이메일",
        form_message: "문의내용",
        btn_submit: "문의하기",
        
        // 포트폴리오
        portfolio_title: "주요 프로젝트",
        portfolio_subtitle: "대기업과 함께한 성공적인 디지털 전환 사례",
        filter_all: "전체",
        filter_ai: "AI 솔루션",
        filter_cloud: "클라우드",
        filter_data: "데이터 분석",
        portfolio1_title: "현대자동차 AI 품질관리 시스템",
        portfolio1_desc: "컴퓨터비전과 딥러닝을 활용한 실시간 품질 검사",
        portfolio2_title: "신한은행 클라우드 전환",
        portfolio2_desc: "레거시 시스템의 AWS 기반 마이크로서비스 아키텍처 전환",
        portfolio3_title: "CJ올리브네트웍스 빅데이터 플랫폼",
        portfolio3_desc: "실시간 로그 분석과 예측 모델링 시스템",
        
        // 푸터
        footer_tagline: "AI와 클라우드로 만드는 디지털 미래",
        footer_links: "빠른 링크"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_ceo: "CEO Message",
        nav_about: "About Us",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Digital Future with",
        hero_highlight: "AI & Cloud",
        hero_subtitle: "InnovateTech successfully leads corporate digital transformation<br>with cutting-edge AI technology and stable cloud infrastructure",
        btn_services: "Learn About Services",
        btn_contact: "Free Consultation",
        
        // Features
        feature1_title: "AI-Based Solutions",
        feature1_desc: "We provide intelligent business solutions using machine learning and deep learning technologies",
        feature2_title: "Cloud Infrastructure",
        feature2_desc: "We build scalable and stable cloud systems based on AWS and Azure",
        feature3_title: "Data Science",
        feature3_desc: "We derive business insights through big data analysis and visualization",
        
        // About
        about_title: "About Us",
        about_subtitle: "AI & Cloud Specialist",
        about_desc1: "InnovateTech, established in 2015, is an AI and cloud specialist company that has successfully supported digital transformation for over 300 companies from large corporations to startups.",
        about_desc2: "We have proven technology through partnerships with large corporations such as Samsung, LG, and Hyundai Motor Company, and are recognized as AWS Partner and Microsoft Gold Partner.",
        chart_title: "Annual Growth Rate",
        
        // Services
        services_title: "Services",
        services_subtitle: "Leading customer success with professional expertise",
        tech_capabilities: "Core Technical Capabilities",
        // 서비스 통계
        stat_projects: "Completed Projects",
        stat_satisfaction: "Customer Satisfaction", 
        stat_partners: "Partner Companies",
        stat_support: "Technical Support",
        stat_expertise: "Technical Expertise", 
        stat_security: "Security Compliance",
        // 서비스 통계 숫자와 비율
        stat_number_1: "300+",
        stat_number_2: "50+",
        stat_number_3: "8 Years",
        stat_percentage_1: "95%",
        stat_percentage_2: "24/7",
        stat_percentage_3: "100%",
        
        service1_title: "AI Solutions",
        service1_desc: "We provide customized artificial intelligence solutions that maximize corporate work efficiency using the latest deep learning technology and conversational AI.",
        service2_title: "Cloud Infrastructure",
        service2_desc: "We design and build enterprise-grade cloud infrastructure with scalability and security in multi-cloud environments including AWS, Azure, and GCP.",
        service3_title: "Data Analytics",
        service3_desc: "We provide comprehensive solutions for data-driven decision making from big data collection to real-time analysis and visualization.",
        service4_title: "Digital Platform",
        service4_desc: "Modern web/app platform development based on React and Vue.js",
        service5_title: "Security Solutions",
        service5_desc: "Zero Trust security model and compliance solutions",
        service6_title: "Digital Consulting",
        service6_desc: "Full process consulting from digital transformation strategy establishment to execution",
        
        // Statistics
        stat1_number: "300+",
        stat1_label: "Successful Projects",
        stat2_number: "50+",
        stat2_label: "Enterprise Clients",
        stat3_number: "8 Years",
        stat3_label: "AI/Cloud Expertise",
        
        // Contact
        contact_title: "Contact Us",
        contact_info: "Contact Information",
        contact_form_title: "Free Consultation Request",
        form_company: "Company Name",
        form_name: "Contact Person",
        form_phone: "Phone Number",
        form_email: "Email",
        form_message: "Message",
        btn_submit: "Submit Inquiry",
        
        // Portfolio
        portfolio_title: "Key Projects",
        portfolio_subtitle: "Successful digital transformation cases with major enterprises",
        filter_all: "All",
        filter_ai: "AI Solutions",
        filter_cloud: "Cloud",
        filter_data: "Data Analytics",
        portfolio1_title: "Hyundai Motor AI Quality Management System",
        portfolio1_desc: "Real-time quality inspection using computer vision and deep learning",
        portfolio2_title: "Shinhan Bank Cloud Transformation",
        portfolio2_desc: "Legacy system transformation to AWS-based microservice architecture",
        portfolio3_title: "CJ Olive Networks Big Data Platform",
        portfolio3_desc: "Real-time log analysis and predictive modeling system",
        
        // Footer
        footer_tagline: "Digital Future with AI & Cloud",
        footer_links: "Quick Links"
    }
};

let currentLang = 'ko';

function switchLanguage(lang) {
    currentLang = lang;
    
    // 모든 다국어 요소 업데이트
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // 언어 선택기 업데이트
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = lang;
    }
    
    // 로컬 스토리지에 언어 설정 저장
    localStorage.setItem('selectedLanguage', lang);
}

// 페이지 로드 시 저장된 언어 설정 복원
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ko';
    switchLanguage(savedLang);
});