// ===== PROJECT DATA ===== 
// Array of projects to dynamically populate the projects section
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        demoUrl: "https://example.com/demo1",
        githubUrl: "https://github.com/example/project1"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A responsive task management application with real-time updates and user authentication.",
        tech: ["React", "Firebase", "Tailwind CSS"],
        demoUrl: "https://example.com/demo2",
        githubUrl: "https://github.com/example/project2"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Interactive weather dashboard fetching real-time data with charts and forecasts.",
        tech: ["JavaScript", "API", "Chart.js", "HTML/CSS"],
        demoUrl: "https://example.com/demo3",
        githubUrl: "https://github.com/example/project3"
    },
    {
        id: 4,
        title: "Social Media Feed",
        description: "A social media feed component with infinite scroll, likes, and comments functionality.",
        tech: ["React", "Node.js", "PostgreSQL"],
        demoUrl: "https://example.com/demo4",
        githubUrl: "https://github.com/example/project4"
    },
    {
        id: 5,
        title: "Blog Platform",
        description: "A content management system for creating and sharing blog posts with categories and tags.",
        tech: ["Next.js", "Prisma", "PostgreSQL"],
        demoUrl: "https://example.com/demo5",
        githubUrl: "https://github.com/example/project5"
    },
    {
        id: 6,
        title: "Fitness Tracker",
        description: "Mobile-friendly fitness tracking app with workout logs, progress charts, and goal setting.",
        tech: ["Vue.js", "Firebase", "Chart.js"],
        demoUrl: "https://example.com/demo6",
        githubUrl: "https://github.com/example/project6"
    }
];

// ===== DOM ELEMENTS ===== 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const contactForm = document.getElementById('contactForm');
const projectsGrid = document.getElementById('projectsGrid');

// ===== HAMBURGER MENU ===== 
// Toggle hamburger menu and navigation menu on click
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close hamburger menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING ===== 
// Smooth scroll to sections when navigation links are clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== LOAD PROJECTS DYNAMICALLY ===== 
// Render project cards dynamically from the projects array
function renderProjects() {
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <div class="project-image">${project.title}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tech.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href=\"${project.demoUrl}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"project-link\">Live Demo</a>
                    <a href=\"${project.githubUrl}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"project-link\">GitHub</a>
                </div>
            </div>
        `;\n        projectsGrid.appendChild(projectCard);
    });
}\n
// Render projects when page loads
renderProjects();

// ===== FORM VALIDATION ===== 
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Validation function for name (minimum 2 characters)
function validateName(name) {
    return name.trim().length >= 2;
}

// Validation function for email (proper email format)
function validateEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
}

// Validation function for message (minimum 10 characters)
function validateMessage(message) {
    return message.trim().length >= 10;
}

// Show error message below input field
function showError(input, errorElement, message) {
    input.style.borderColor = '#e53e3e';
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Clear error message from input field
function clearError(input, errorElement) {
    input.style.borderColor = '';
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Real-time validation for name field
nameInput.addEventListener('blur', () => {
    if (!validateName(nameInput.value)) {
        showError(nameInput, nameError, 'Name must be at least 2 characters long');
    } else {
        clearError(nameInput, nameError);
    }
});

// Real-time validation for email field
emailInput.addEventListener('blur', () => {
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
    } else {
        clearError(emailInput, emailError);
    }
});

// Real-time validation for message field
messageInput.addEventListener('blur', () => {
    if (!validateMessage(messageInput.value)) {
        showError(messageInput, messageError, 'Message must be at least 10 characters long');
    } else {
        clearError(messageInput, messageError);
    }
});

// Form submission with validation
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields before submission
    let isValid = true;

    if (!validateName(nameInput.value)) {
        showError(nameInput, nameError, 'Name must be at least 2 characters long');
        isValid = false;
    } else {
        clearError(nameInput, nameError);
    }

    if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(emailInput, emailError);
    }

    if (!validateMessage(messageInput.value)) {
        showError(messageInput, messageError, 'Message must be at least 10 characters long');
        isValid = false;
    } else {
        clearError(messageInput, messageError);
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    }
});

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

// Observe all project cards for animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ===== CONSOLE MESSAGE ===== 
// Welcome message in the browser console
console.log('%cWelcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('Feel free to explore and check out my projects!');

// ===== INITIALIZE ===== 
// Log when the portfolio website has fully loaded
window.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
});