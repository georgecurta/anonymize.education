/**
 * Anonymize.Education - Main JavaScript
 * Simple, clean functionality for the education data protection site
 * Based on "Protective Clarity" design philosophy
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav__toggle');
  const navMobile = document.querySelector('.nav__mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function() {
      navMobile.classList.toggle('is-open');
      const isOpen = navMobile.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking a link
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===========================================
  // SCROLL-TRIGGERED ANIMATIONS
  // ===========================================

  const scrollRevealElements = document.querySelectorAll(
    '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .fade-in'
  );

  if (scrollRevealElements.length > 0 && 'IntersectionObserver' in window) {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'is-visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    scrollRevealElements.forEach(el => scrollObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    scrollRevealElements.forEach(el => el.classList.add('visible', 'is-visible'));
  }

  // ===========================================
  // ANIMATED STATISTICS COUNTER
  // ===========================================

  const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
        // Add suffix if present
        const suffix = element.dataset.suffix || '';
        element.textContent = target + suffix;
      }
    };

    updateCounter();
  };

  const statNumbers = document.querySelectorAll('[data-count]');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.count, 10);
          animateCounter(entry.target, target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  // ===========================================
  // PROTECTION RINGS ANIMATION (Hero)
  // ===========================================

  const heroSection = document.querySelector('.hero-animated');
  if (heroSection) {
    // Create protection rings container
    const ringsContainer = document.createElement('div');
    ringsContainer.className = 'protection-rings';
    ringsContainer.setAttribute('aria-hidden', 'true');

    // Add 5 concentric rings
    for (let i = 0; i < 5; i++) {
      const ring = document.createElement('div');
      ring.className = 'protection-ring';
      ringsContainer.appendChild(ring);
    }

    heroSection.appendChild(ringsContainer);
  }

  // ===========================================
  // DATA FLOW VISUALIZATION
  // ===========================================

  const dataFlowContainers = document.querySelectorAll('.data-flow-container');
  dataFlowContainers.forEach(container => {
    // Create data points
    for (let i = 0; i < 5; i++) {
      const point = document.createElement('div');
      point.className = 'data-point';
      container.appendChild(point);

      // After animation, add protected class
      setTimeout(() => {
        point.classList.add('protected');
      }, (i * 500) + 2500);
    }
  });

  // ===========================================
  // BUTTON ANIMATIONS
  // ===========================================

  document.querySelectorAll('.btn, .btn--primary, .btn--secondary').forEach(btn => {
    btn.classList.add('btn-animated');
  });

  // ===========================================
  // CARD HOVER ANIMATIONS
  // ===========================================

  document.querySelectorAll('.feature-card, .product-card, .pricing-card, .use-case-card').forEach(card => {
    card.classList.add('card-animated');
  });

  // ===========================================
  // CONTACT FORM HANDLING WITH reCAPTCHA v3
  // ===========================================

  const RECAPTCHA_SITE_KEY = '6LcFEFosAAAAAH6zUMF5USUNKGGjr07y97nC5uDr';
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    // Add animation classes to form inputs
    contactForm.querySelectorAll('input, textarea, select').forEach(input => {
      input.classList.add('form-input-animated');
    });

    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;

      // Show loading state
      submitButton.innerHTML = '<span class="loading-ring" style="width:20px;height:20px;border-width:2px;margin-right:8px;"></span> Sending...';
      submitButton.disabled = true;

      try {
        // Get reCAPTCHA token
        let recaptchaToken = '';
        if (typeof grecaptcha !== 'undefined') {
          try {
            recaptchaToken = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' });
          } catch (recaptchaError) {
            console.error('reCAPTCHA error:', recaptchaError);
          }
        }

        // Collect form data
        const formData = {
          name: this.querySelector('#name').value.trim(),
          email: this.querySelector('#email').value.trim(),
          institution: this.querySelector('#institution').value.trim(),
          interest: this.querySelector('#interest').value,
          message: this.querySelector('#message').value.trim(),
          recaptcha_token: recaptchaToken
        };

        // Send to backend
        const response = await fetch('api/send-message.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
          // Hide form, show success message
          this.style.display = 'none';
          if (formSuccess) {
            formSuccess.style.display = 'block';
            formSuccess.style.animation = 'fadeInScale 0.4s ease-out';
          }
          this.reset();
        } else {
          // Show error message
          const errorMsg = result.errors ? result.errors.join(', ') : (result.error || 'Failed to send message');
          showFormError(this, errorMsg);
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
        }
      } catch (error) {
        console.error('Form submission error:', error);
        showFormError(this, 'Network error. Please try again later.');
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }
    });
  }

  function showFormError(form, message) {
    // Remove any existing error message
    const existingError = form.querySelector('.form-error');
    if (existingError) existingError.remove();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = 'padding: 1rem; background: #fef2f2; color: #991b1b; border-radius: 0.5rem; text-align: center; margin-top: 1rem; animation: fadeInScale 0.3s ease-out;';
    errorDiv.innerHTML = `<strong>Error:</strong> ${message}`;
    form.appendChild(errorDiv);

    // Remove after 5 seconds
    setTimeout(() => {
      errorDiv.style.animation = 'fadeInScale 0.3s ease-out reverse';
      setTimeout(() => errorDiv.remove(), 300);
    }, 5000);
  }

  // ===========================================
  // NAVIGATION ENHANCEMENTS
  // ===========================================

  // Add active class to current nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ===========================================
  // ICON ANIMATIONS ON HOVER
  // ===========================================

  document.querySelectorAll('.feature-card__icon, .product-card__icon').forEach(icon => {
    icon.classList.add('icon-animated');
  });

  // ===========================================
  // ACCESSIBILITY: REDUCE MOTION PREFERENCE
  // ===========================================

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    document.documentElement.classList.add('reduced-motion');
  }

  prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  });

  // ===========================================
  // TOOLTIP INITIALIZATION
  // ===========================================

  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', function() {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = this.dataset.tooltip;
      tooltip.style.cssText = `
        position: absolute;
        background: #134e4a;
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 0.875rem;
        white-space: nowrap;
        z-index: 1000;
        animation: fadeInScale 0.2s ease-out;
      `;

      const rect = this.getBoundingClientRect();
      tooltip.style.top = `${rect.top - 40 + window.scrollY}px`;
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.transform = 'translateX(-50%)';

      document.body.appendChild(tooltip);
      this._tooltip = tooltip;
    });

    el.addEventListener('mouseleave', function() {
      if (this._tooltip) {
        this._tooltip.remove();
        this._tooltip = null;
      }
    });
  });
});
