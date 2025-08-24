
        // Animación de elementos al hacer scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.service-card, .about-img, .about-text, .testimonial-item, .product-card, .contact-form');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate');
                }
            });
        }

        // Mostrar/ocultar botón de volver arriba
        function toggleBackToTop() {
            const backToTop = document.querySelector('.back-to-top');
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        }

        // Navbar effect on scroll
        function navbarScrollEffect() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 5px 15px rgba(44, 62, 80, 0.1)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }

        // Inicializar eventos
        window.addEventListener('scroll', () => {
            animateOnScroll();
            toggleBackToTop();
            navbarScrollEffect();
        });

        // Ejecutar al cargar la página
        window.addEventListener('load', () => {
            animateOnScroll();
            toggleBackToTop();
        });

        // Inicializar tooltips de Bootstrap
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
 