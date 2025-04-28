// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // For demonstration, alert the message
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Add active class to nav links based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelector(`.main-nav a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`.main-nav a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Add CSS class for nav link hover effect
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--primary-color)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = 'var(--gray-700)';
            }
        });
    });
    
    // Animation for skill bars
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.style.width;
            
            // Reset width first for animation
            bar.style.width = '0%';
            
            // Animate to target width
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-in-out';
                bar.style.width = width;
            }, 200);
        });
    }
    
    // Add intersection observer for skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillsSection);
    }
    
    // Add basic lightbox functionality for project links
    const projectLinks = document.querySelectorAll('.project-links a');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Project link will be available soon!');
            }
        });
    });
    
    // Add animations to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 300 * index);
    });
    
    // Add hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--box-shadow)';
        });
    });
}); 
