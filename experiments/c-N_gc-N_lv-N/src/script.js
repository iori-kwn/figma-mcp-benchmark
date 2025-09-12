// Simple Design System - Interactive Elements
document.addEventListener('DOMContentLoaded', function () {
  // Button interaction feedback
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    if (!button.disabled) {
      button.addEventListener('click', function (e) {
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        button.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    }
  });

  // Input field interactions
  const inputs = document.querySelectorAll('.input');
  inputs.forEach((input) => {
    // Focus animations
    input.addEventListener('focus', function () {
      this.parentElement?.classList.add('input-focused');
    });

    input.addEventListener('blur', function () {
      this.parentElement?.classList.remove('input-focused');
    });

    // Real-time validation example for error state
    if (input.classList.contains('input-error')) {
      input.addEventListener('input', function () {
        if (this.value.length > 5) {
          this.classList.remove('input-error');
        } else {
          this.classList.add('input-error');
        }
      });
    }
  });

  // Color swatch click interaction
  const colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach((swatch) => {
    swatch.addEventListener('click', function () {
      const colorValue = getComputedStyle(this).backgroundColor;

      // Copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(colorValue).then(() => {
          showToast(`Copied color: ${colorValue}`);
        });
      } else {
        showToast(`Color: ${colorValue}`);
      }
    });

    // Add cursor pointer
    swatch.style.cursor = 'pointer';
  });

  // Component card hover effects
  const componentCards = document.querySelectorAll('.component-card');
  componentCards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = 'var(--shadow-md)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });

  // Toast notification function
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    // Toast styles
    Object.assign(toast.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      padding: 'var(--spacing-sm) var(--spacing-md)',
      borderRadius: 'var(--radius-sm)',
      zIndex: '1000',
      fontSize: 'var(--font-size-sm)',
      boxShadow: 'var(--shadow-md)',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out',
    });

    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 10);

    // Remove after delay
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 2000);
  }

  // Add smooth scrolling for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});

// CSS for ripple effect
const rippleCSS = `
.btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.component-card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
`;

// Inject ripple CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);
