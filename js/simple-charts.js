// Simple CSS-based Charts (fallback)
function createSimpleCharts() {
    // CSS-based Growth Chart
    const growthContainer = document.querySelector('.growth-chart-container');
    if (growthContainer) {
        const canvas = growthContainer.querySelector('canvas');
        if (canvas) {
            // Replace canvas with CSS chart
            const simpleChart = document.createElement('div');
            simpleChart.className = 'simple-growth-chart';
            simpleChart.innerHTML = `
                <div class="chart-bars">
                    <div class="bar" style="height: 20%" data-year="2015" data-value="100%"></div>
                    <div class="bar" style="height: 35%" data-year="2017" data-value="150%"></div>
                    <div class="bar" style="height: 55%" data-year="2019" data-value="230%"></div>
                    <div class="bar" style="height: 75%" data-year="2021" data-value="340%"></div>
                    <div class="bar" style="height: 90%" data-year="2023" data-value="480%"></div>
                    <div class="bar" style="height: 100%" data-year="2024" data-value="650%"></div>
                </div>
                <div class="chart-labels">
                    <span>2015</span>
                    <span>2017</span>
                    <span>2019</span>
                    <span>2021</span>
                    <span>2023</span>
                    <span>2024</span>
                </div>
            `;
            canvas.parentNode.replaceChild(simpleChart, canvas);
        }
    }
    
    // CSS-based Tech Chart
    const techContainer = document.querySelector('.tech-chart-container');
    if (techContainer) {
        const canvas = techContainer.querySelector('canvas');
        if (canvas) {
            const simpleTechChart = document.createElement('div');
            simpleTechChart.className = 'simple-tech-chart';
            simpleTechChart.innerHTML = `
                <div class="tech-circle">
                    <div class="tech-segment tech-ai" style="--percentage: 25">
                        <span>AI/ML<br>25%</span>
                    </div>
                    <div class="tech-segment tech-cloud" style="--percentage: 30">
                        <span>Cloud<br>30%</span>
                    </div>
                    <div class="tech-segment tech-frontend" style="--percentage: 20">
                        <span>Frontend<br>20%</span>
                    </div>
                    <div class="tech-segment tech-backend" style="--percentage: 15">
                        <span>Backend<br>15%</span>
                    </div>
                    <div class="tech-segment tech-devops" style="--percentage: 10">
                        <span>DevOps<br>10%</span>
                    </div>
                </div>
            `;
            canvas.parentNode.replaceChild(simpleTechChart, canvas);
        }
    }
}

// Animate bars when visible
function animateChartBars() {
    const bars = document.querySelectorAll('.chart-bars .bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scaleY(1)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    bars.forEach(bar => {
        bar.style.transform = 'scaleY(0)';
        bar.style.opacity = '0';
        bar.style.transition = 'all 1s ease';
        bar.style.transformOrigin = 'bottom';
        observer.observe(bar);
    });
}

// Initialize simple charts if Chart.js fails
setTimeout(() => {
    if (typeof Chart === 'undefined' || !document.querySelector('canvas')) {
        console.log('Using fallback CSS charts');
        createSimpleCharts();
        animateChartBars();
    }
}, 2000);