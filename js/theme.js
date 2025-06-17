// 올바른 다크/라이트 모드 시스템

// 테마 초기화
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // 모든 곳에 강제로 적용
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
    
    // 강제 스타일 적용
    if (savedTheme === 'dark') {
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';
        console.log('DARK MODE INITIALIZED!');
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        console.log('LIGHT MODE INITIALIZED!');
    }
    
    updateThemeIcon(savedTheme);
}

// 테마 토글
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // 모든 곳에 강제로 적용
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
    document.html.setAttribute('data-theme', newTheme);
    
    // 로컬스토리지에 저장
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // 강제 스타일 적용
    if (newTheme === 'dark') {
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';
        console.log('DARK MODE APPLIED!');
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        console.log('LIGHT MODE APPLIED!');
    }
}

// 테마 아이콘 업데이트
function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
}

// 페이지 로드 시 테마 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 강제로 다크모드 테스트
    localStorage.setItem('theme', 'dark');
    initTheme();
    
    // 추가 강제 적용
    setTimeout(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.setAttribute('data-theme', 'dark');
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';
        console.log('FORCED DARK MODE APPLIED!');
        
        // 모든 섹션도 강제로 변경
        const sections = document.querySelectorAll('section, .header, .footer');
        sections.forEach(section => {
            section.style.backgroundColor = '#000000';
            section.style.color = '#ffffff';
        });
    }, 100);
});