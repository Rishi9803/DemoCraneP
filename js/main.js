// Equipment Data
const equipmentData = [
    {
        id: 1,
        name: 'Mobile Crane 50T',
        image: 'images/mobile-crane.jpg',
        specs: {
            capacity: '50 Tons',
            height: '40m',
            reach: '35m'
        }
    },
    {
        id: 2,
        name: 'Tower Crane 100T',
        image: 'images/tower-crane.jpg',
        specs: {
            capacity: '100 Tons',
            height: '80m',
            reach: '60m'
        }
    },
    // Add more equipment as needed
];

// Load Equipment Cards
function loadEquipment() {
    const equipmentGrid = document.querySelector('.equipment-grid');
    
    equipmentData.forEach(crane => {
        const card = document.createElement('div');
        card.className = 'equipment-card';
        card.innerHTML = `
            <div class="equipment-image-container">
                <img src="${crane.image}" alt="${crane.name}" loading="lazy">
            </div>
            <div class="equipment-info">
                <h3>${crane.name}</h3>
                <ul class="equipment-specs">
                    <li>
                        <i class="fas fa-weight-hanging"></i>
                        Capacity: ${crane.specs.capacity}
                    </li>
                    <li>
                        <i class="fas fa-arrows-alt-v"></i>
                        Max Height: ${crane.specs.height}
                    </li>
                    <li>
                        <i class="fas fa-ruler-horizontal"></i>
                        Max Reach: ${crane.specs.reach}
                    </li>
                </ul>
                <button class="inquiry-btn" data-id="${crane.id}">
                    <span>Inquire Now</span>
                </button>
            </div>
        `;
        equipmentGrid.appendChild(card);
    });
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Form Submission
const inquiryForm = document.getElementById('inquiry-form');

inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your inquiry. We will contact you soon!');
    inquiryForm.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadEquipment();
    optimizeImages();
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.faq-item.active');
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
        }
        item.classList.toggle('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ Categories
const categoryBtns = document.querySelectorAll('.category-btn');
const faqCategories = document.querySelectorAll('.faq-category');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Hide all categories
        faqCategories.forEach(cat => cat.classList.remove('active'));
        // Show selected category
        const category = btn.dataset.category;
        document.querySelector(`.faq-category.${category}`).classList.add('active');
    });
});

// Stats Animation
const stats = document.querySelectorAll('.stat-number');
const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50; // Adjust speed here
        const updateCount = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target + '+';
            }
        };
        updateCount();
    });
};

// Trigger stats animation when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
});

document.querySelector('.stats-container')?.forEach(stat => {
    observer.observe(stat);
});

// Image optimization
function optimizeImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
        document.body.appendChild(lazyLoadScript);

        lazyLoadScript.onload = function() {
            const observer = lozad();
            observer.observe();
        }
    }
}

// Add form validation
const form = document.getElementById('inquiry-form');
const inputs = form.querySelectorAll('input, textarea, select');

inputs.forEach(input => {
    // Add animation for label when input has content
    input.addEventListener('input', () => {
        if (input.value) {
            input.classList.add('has-content');
        } else {
            input.classList.remove('has-content');
        }
    });

    // Add validation styles
    input.addEventListener('invalid', () => {
        input.classList.add('error');
    });

    input.addEventListener('focus', () => {
        input.classList.remove('error');
    });
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully';
        submitBtn.classList.add('success');
        
        // Reset form after delay
        setTimeout(() => {
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Inquiry';
            submitBtn.classList.remove('success');
        }, 3000);
    } catch (error) {
        submitBtn.innerHTML = 'Error. Try Again';
        submitBtn.classList.add('error');
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Inquiry';
            submitBtn.classList.remove('error');
        }, 3000);
    }
}); 