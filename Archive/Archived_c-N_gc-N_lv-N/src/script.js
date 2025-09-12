// Simple Design System Interactive Features

document.addEventListener('DOMContentLoaded', function () {
  // Add interactive hover effects for buttons
  const buttons = document.querySelectorAll('.btn:not(.btn-disabled)');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.2s ease';
    });

    button.addEventListener('click', function (e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Form validation and interaction
  const inputs = document.querySelectorAll('input, select');

  inputs.forEach((input) => {
    input.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function () {
      this.parentElement.classList.remove('focused');
      validateField(this);
    });

    input.addEventListener('input', function () {
      validateField(this);
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    const fieldContainer = field.parentElement;

    // Remove existing error messages
    const existingError = fieldContainer.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    fieldContainer.classList.remove('error', 'success');

    if (value === '') return;

    let isValid = true;
    let errorMessage = '';

    if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
      errorMessage = 'Please enter a valid email address';
    } else if (field.type === 'password') {
      isValid = value.length >= 6;
      errorMessage = 'Password must be at least 6 characters long';
    }

    if (isValid) {
      fieldContainer.classList.add('success');
    } else {
      fieldContainer.classList.add('error');
      const errorElement = document.createElement('span');
      errorElement.className = 'error-message';
      errorElement.textContent = errorMessage;
      fieldContainer.appendChild(errorElement);
    }
  }

  // Card interactions
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // Add some dynamic content loading simulation
  setTimeout(() => {
    console.log('Design System Components Loaded Successfully');

    // Add loaded state to components
    const componentSections = document.querySelectorAll('.component-showcase');
    componentSections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease';

        setTimeout(() => {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }, 100);
      }, index * 200);
    });
  }, 100);
});

// Add CSS for ripple animation and form states
const additionalStyles = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .form-field.focused input,
    .form-field.focused select {
        border-color: #4f46e5;
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }
    
    .form-field.error input,
    .form-field.error select {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .form-field.success input,
    .form-field.success select {
        border-color: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }
    
    .error-message {
        color: #ef4444;
        font-size: 12px;
        margin-top: 4px;
    }
    
    .component-showcase {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Inject additional styles
const styleElement = document.createElement('style');
styleElement.textContent = additionalStyles;
document.head.appendChild(styleElement);
