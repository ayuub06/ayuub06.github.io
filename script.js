
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Navigation Active State Highlighter
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.navigation a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });

        // Project Card Hover Effect
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = 'none';
            });
        });

        // Typed Text Effect for Main Header
        const typedTextElement = document.querySelector('.main h2 span');
        const texts = ['Web Developer', 'Designer', 'Creative Coder'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeText, isDeleting ? 100 : 200);
        }

        typeText();

        // Contact Information Copy Function
        document.querySelectorAll('.contact .cards .info p').forEach(infoElement => {
            infoElement.addEventListener('click', function() {
                navigator.clipboard.writeText(this.textContent).then(() => {
                    alert(`Copied: ${this.textContent}`);
                });
            });
        });

        // Scroll Progress Indicator
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            const progressBar = document.querySelector('.scroll-progress') || createProgressBar();
            progressBar.style.width = `${scrolled}%`;
        });

        function createProgressBar() {
            const progressBar = document.createElement('div');
            progressBar.classList.add('scroll-progress');
            document.body.appendChild(progressBar);
            return progressBar;
        }

        // Add subtle animations to service cards
        const serviceCards = document.querySelectorAll('.section-2 .cards');
        serviceCards.forEach(card => {
            card.style.transition = 'all 0.3s ease';
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            });
        });