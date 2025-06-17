// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const header = document.querySelector('.header');

// Create scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Enhanced parallax effect
function initParallax() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Header scroll effect (제거된 다크모드 호환성 문제로 주석 처리)
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 100) {
//         header.style.background = 'rgba(255, 255, 255, 0.98)';
//         header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
//     } else {
//         header.style.background = 'rgba(255, 255, 255, 0.95)';
//         header.style.boxShadow = 'none';
//     }
// });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formValues = {};
    
    // Get all form inputs
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        formValues[input.placeholder] = input.value;
    });
    
    // Simple validation
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#e9ecef';
        }
    });
    
    if (isValid) {
        // Show success message
        showNotification('문의가 성공적으로 전송되었습니다!', 'success');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send the data to your server
        console.log('Form submitted:', formValues);
    } else {
        showNotification('모든 필드를 입력해주세요.', 'error');
    }
});

// Notification function
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .service-card, .portfolio-item, .about-text, .about-image');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Enhanced Counter Animation with requestAnimationFrame
function animateCounter(element) {
    if (element.dataset.animating === 'true') return;
    element.dataset.animating = 'true';
    
    const originalText = element.textContent.trim();
    const numberMatch = originalText.match(/\d+/);
    if (!numberMatch) return;
    
    const targetNumber = parseInt(numberMatch[0]);
    const suffix = originalText.replace(/\d+/, '');
    
    let currentNumber = 0;
    const duration = 2500;
    const startTime = performance.now();
    
    function updateCounter(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        currentNumber = Math.floor(targetNumber * easeProgress);
        element.textContent = currentNumber + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = originalText;
            element.dataset.animating = 'false';
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Updated animateCounters function
function animateCounters() {
    const counters = document.querySelectorAll('.stat h4');
    counters.forEach(counter => {
        animateCounter(counter);
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
const serviceStatsSection = document.querySelector('.service-stats');

if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Animate service stats as well
if (serviceStatsSection) {
    const serviceStatsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const serviceCounters = entry.target.querySelectorAll('.stat-number, .stat-percentage');
                serviceCounters.forEach(counter => {
                    animateCounter(counter);
                });
                serviceStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    serviceStatsObserver.observe(serviceStatsSection);
}

// High-quality image system with Unsplash integration
const UNSPLASH_IMAGES = {
    about: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
    portfolio1: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
    portfolio2: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
    portfolio3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
    hero: 'https://images.unsplash.com/photo-1518709268805-4e9042af2ea0?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    tech1: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
    tech2: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
    tech3: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
};

// Advanced image loading with blur-up technique
function loadHighQualityImages() {
    const imageMap = {
        'about-placeholder.jpg': UNSPLASH_IMAGES.about,
        'portfolio-1.jpg': UNSPLASH_IMAGES.portfolio1,
        'portfolio-2.jpg': UNSPLASH_IMAGES.portfolio2,
        'portfolio-3.jpg': UNSPLASH_IMAGES.portfolio3
    };
    
    document.querySelectorAll('img').forEach(img => {
        const srcAttribute = img.getAttribute('src');
        if (srcAttribute && srcAttribute.includes('placeholder') || srcAttribute.includes('portfolio')) {
            const filename = srcAttribute.split('/').pop();
            const highQualityUrl = imageMap[filename];
            
            if (highQualityUrl) {
                // Create blur placeholder
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 20;
                canvas.height = 15;
                
                const gradient = ctx.createLinearGradient(0, 0, 20, 15);
                gradient.addColorStop(0, '#667eea');
                gradient.addColorStop(1, '#764ba2');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 20, 15);
                
                img.src = canvas.toDataURL();
                img.style.filter = 'blur(5px)';
                img.style.transition = 'filter 0.3s ease';
                
                // Load high quality image
                const highQualityImg = new Image();
                highQualityImg.onload = () => {
                    img.src = highQualityUrl;
                    img.style.filter = 'blur(0)';
                };
                highQualityImg.src = highQualityUrl;
            }
        }
    });
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', loadHighQualityImages);

// Scroll to top functionality
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2c5aa0;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        z-index: 1000;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(44, 90, 160, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'translateY(0)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'translateY(100px)';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.background = '#1e3a8a';
        scrollBtn.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.background = '#2c5aa0';
        scrollBtn.style.transform = 'translateY(0) scale(1)';
    });
}

// Interactive Charts - 한번만 실행되도록 수정
let chartsInitialized = false;

function initCharts() {
    // 이미 초기화되었으면 리턴
    if (chartsInitialized) return;
    
    // Wait for Chart.js to load
    if (typeof Chart === 'undefined') {
        setTimeout(initCharts, 1000);
        return;
    }
    
    chartsInitialized = true;
    console.log('Initializing charts...');
    
    // Growth Chart
    const growthCtx = document.getElementById('growthChart');
    if (growthCtx) {
        // 기존 차트가 있다면 제거
        const existingChart = Chart.getChart(growthCtx);
        if (existingChart) {
            existingChart.destroy();
        }
        
        console.log('Creating growth chart');
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['2015', '2017', '2019', '2021', '2023', '2024'],
                datasets: [{
                    label: '매출 성장률 (%)',
                    data: [100, 150, 230, 340, 480, 650],
                    borderColor: '#1e3c72',
                    backgroundColor: 'rgba(30, 60, 114, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#1e3c72',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2.5,
                layout: {
                    padding: 10
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    }
                },
                elements: {
                    point: {
                        hoverRadius: 8
                    }
                }
            }
        });
    }

    // Tech Stack Doughnut Chart
    const techCtx = document.getElementById('techChart');
    if (techCtx) {
        new Chart(techCtx, {
            type: 'doughnut',
            data: {
                labels: ['AI/ML', 'Cloud', 'Frontend', 'Backend', 'DevOps'],
                datasets: [{
                    data: [25, 30, 20, 15, 10],
                    backgroundColor: [
                        '#1e3c72',
                        '#2a5298',
                        '#667eea',
                        '#4c63d2',
                        '#3b4de8'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                cutout: '60%'
            }
        });
    }
}

// Animate Progress Bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-width');
                progressBar.style.setProperty('--target-width', targetWidth);
                progressBar.parentElement.parentElement.classList.add('animate');
                
                // Animate width
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 500);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Initialize AOS (Animate On Scroll)
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
}

// Particle Animation System
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and size
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        
        // Random animation duration
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }
    
    // Create particles continuously
    setInterval(createParticle, 300);
}

// Enhanced Scroll Reveal
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal, .feature-card, .service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed', 'animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Advanced Typing Effect
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid #ffd700';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                element.style.borderRight = 'none';
            }
        };
        
        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeWriter, 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Interactive Elements Enhancement
function enhanceInteractivity() {
    // Add interactive class to hoverable elements
    const interactiveElements = document.querySelectorAll('.service-card, .feature-card, .portfolio-item, .btn');
    interactiveElements.forEach(element => {
        element.classList.add('interactive-element');
    });
    
    // Add click ripple effect
    interactiveElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = element.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            element.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Magnetic Cursor System
function initMagneticCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-magnetic';
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const speed = 0.8;
    
    function updateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * speed;
        cursorY += dy * speed;
        
        cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0)`;
        requestAnimationFrame(updateCursor);
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Add hover effects
    const hoverElements = document.querySelectorAll('.btn, .nav-link, .theme-toggle, a, .interactive-element');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
    
    updateCursor();
}

// Loading System
function initLoadingSystem() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    if (loadingSpinner) {
        // 간단하게 2초 후에 로딩 스피너 제거
        setTimeout(() => {
            loadingSpinner.style.opacity = '0';
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
            }, 300);
        }, 2000);
    }
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    initMagneticCursor();
    initLoadingSystem();
    initScrollProgress();
    createScrollToTopButton();
    createScrollProgress();
    initParallax();
    loadHighQualityImages();
    initCharts();
    animateProgressBars();
    initAOS();
    createParticles();
    initScrollReveal();
    initTypingEffect();
    enhanceInteractivity();
});

// Preloader
function createPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="spinner"></div>
            <p>로딩 중...</p>
        </div>
    `;
    
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .preloader-content {
            text-align: center;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #2c5aa0;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .preloader-content p {
            color: #666;
            font-size: 1.1rem;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(preloader);
    
    // Remove preloader when page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
                style.remove();
            }, 500);
        }, 1000);
    });
}

// Initialize preloader
createPreloader();

// Performance optimization: Debounce scroll events
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

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-related calculations here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading states for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class when everything is ready
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
    });
});

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a fallback image
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 400;
            canvas.height = 300;
            
            ctx.fillStyle = '#f8f9fa';
            ctx.fillRect(0, 0, 400, 300);
            
            ctx.fillStyle = '#6c757d';
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('이미지를 불러올 수 없습니다', 200, 150);
            
            this.src = canvas.toDataURL();
        });
    });
});