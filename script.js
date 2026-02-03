// ===== PROJECT DATA ===== 
// Array of projects to dynamically populate the projects section
const projects = [
    {
        id: 1,
        title: "Connect4 Game",
        description: "A classic Connect4 game implemented in C++ with object-oriented programming principles, featuring game logic, win detection, and interactive gameplay.",
        tech: ["C++", "Object-Oriented Programming", "Game Development"],
        demoUrl: "https://www.linkedin.com/posts/ayush-patel-lizdoes_internpe-cpp-ayush-activity-7318529079060615170-pncK?utm_source=share&utm_medium=member_android&rcm=ACoAAEjZUtkBjuSUhDariC2OZcPQ0ITVlVqNilo",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "EV Population Analysis",
        description: "Comprehensive data analysis of electric vehicle population trends using Tableau, featuring interactive dashboards and visualizations.",
        tech: ["Tableau", "Data Visualization", "Statistical Analysis"],
        demoUrl: "assets/projects/evANALYSIS.twb",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Global Energy Consumption Analysis",
        description: "Python-based analysis of global energy consumption patterns, utilizing pandas, matplotlib, and seaborn for data processing and visualization.",
        tech: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
        demoUrl: "assets/projects/global_energy_consumption.csv",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "The Souled Store Annual Report Analysis",
        description: "Excel-based comprehensive analysis of The Souled Store's annual report, featuring financial modeling, trend analysis, and business insights.",
        tech: ["Excel", "Financial Analysis", "Data Modeling", "Business Intelligence"],
        demoUrl: "assets/projects/The Souled Store Annual Report.xlsx",
        githubUrl: "#"
    }
];

// ===== DOM ELEMENTS ===== 
let hamburger, navMenu, navLinks, navbar, projectsGrid;

// ===== INITIALIZE DOM ELEMENTS ===== 
function initializeDOMElements() {
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('navMenu');
    navLinks = document.querySelectorAll('.nav-link');
    navbar = document.getElementById('navbar');
    projectsGrid = document.getElementById('projectsGrid');
}

// ===== EVENT LISTENERS ===== 
// Initialize all event listeners after DOM is loaded
function initializeEventListeners() {
    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Navigation links - combined smooth scrolling and menu closing
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Close hamburger menu if open
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            
            // Smooth scroll to section
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== LOAD PROJECTS DYNAMICALLY ===== 
// Render project cards dynamically from the projects array
function renderProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <div class="project-image">${project.title}</div>
            <div class="project-content">
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tech.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link">View</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// ===== SCROLL ANIMATIONS ===== 
// Use Intersection Observer to animate project cards when they come into view
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

// Initialize scroll animations for project cards
function initializeScrollAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// ===== INITIALIZE ===== 
// Initialize everything when DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    initializeDOMElements();
    renderProjects();
    initializeEventListeners();
    initializeScrollAnimations();
    
    console.log('Portfolio website loaded successfully!');
});

// ===== CONSOLE MESSAGE ===== 
// Welcome message in the browser console
console.log('%cWelcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('Feel free to explore and check out my projects!');