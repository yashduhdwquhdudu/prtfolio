/**
 * Portfolio Website - JavaScript
 * Handles navigation, interactivity, and user interactions
 */

// ========================================
// Mobile Navigation Toggle
// ========================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isOpen);
    
    if (!isOpen) {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
});

// Close mobile menu when a nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.style.display = 'none';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const isNavClick = navToggle.contains(e.target) || navMenu.contains(e.target);
    if (!isNavClick && navToggle.getAttribute('aria-expanded') === 'true') {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.style.display = 'none';
    }
});

// ========================================
// Smooth Scroll Enhancement
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.querySelector('.navbar');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }

    lastScrollPosition = currentScroll;
});

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.project-card, .education-card, .skill-category, .highlight-card').forEach(el => {
    el.style.opacity = '0.8';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form data
        if (!data.name.trim() || !data.email.trim() || !data.subject.trim() || !data.message.trim()) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Create mailto link for form submission
        const mailtoLink = `mailto:adamopgaming43@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
        
        // Since we can't actually send email from client-side, we'll open the mailto
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Redirecting to your email client...', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show notification message
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 90%;
    `;

    document.body.appendChild(notification);

    // Auto-remove notification
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add notification animations
if (!document.querySelector('style[data-notification]')) {
    const style = document.createElement('style');
    style.setAttribute('data-notification', 'true');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// Active Navigation Link Highlighting
// ========================================
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section, header');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        
        if (href === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
if (!document.querySelector('style[data-active-link]')) {
    const style = document.createElement('style');
    style.setAttribute('data-active-link', 'true');
    style.textContent = `
        .nav-link.active {
            color: var(--secondary-color);
        }
        
        .nav-link.active::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// Print Friendly Navigation
// ========================================
window.addEventListener('beforeprint', () => {
    document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('print-mode');
});

// ========================================
// Performance Optimization
// ========================================
// Lazy load images (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Accessibility Enhancements
// ========================================

// Keyboard navigation for social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            link.click();
        }
    });
});

// Ensure all interactive elements are keyboard accessible
document.querySelectorAll('a, button, input, textarea').forEach(el => {
    if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
    }
});

// ========================================
// Theme Detection (Light/Dark Mode)
// ========================================
// This uses the system preference if available
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

prefersDark.addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.style.colorScheme = 'dark';
    } else {
        document.documentElement.style.colorScheme = 'light';
    }
});

// Set initial theme
if (prefersDark.matches) {
    document.documentElement.style.colorScheme = 'dark';
} else {
    document.documentElement.style.colorScheme = 'light';
}

// ========================================
// Page Load Optimization
// ========================================
// Add preload hints for critical resources
document.addEventListener('DOMContentLoaded', () => {
    // Prefetch navigation links
    const sections = ['about', 'skills', 'projects', 'education', 'certifications', 'contact'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            // Section is available, ready for navigation
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Ensure mobile menu is hidden initially
    navMenu.style.display = '';
    navToggle.setAttribute('aria-expanded', 'false');
});

// ========================================
// Analytics Ready (if needed)
// ========================================
// Track page views and interactions
function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    // Console log for development
    console.log(`Event: ${eventName}`, eventData);
}

// Track button clicks
document.querySelectorAll('.btn, .nav-link, .social-link').forEach(element => {
    element.addEventListener('click', () => {
        const text = element.textContent.trim();
        trackEvent('button_click', {
            button_text: text,
            button_type: element.className
        });
    });
});

console.log('Portfolio website initialized successfully! 🚀');
