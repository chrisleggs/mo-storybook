import './Button.css';

/**
 * Creates a Button element.
 * @param {Object} args
 * @param {string} args.label - Button text
 * @param {'primary'|'secondary'} args.variant - Visual style
 * @param {'small'|'medium'|'large'} args.size - Button size
 * @param {boolean} args.disabled - Whether the button is disabled
 * @returns {HTMLElement}
 */
export const createButton = ({ label = 'Button', variant = 'primary', size = 'medium', disabled = false } = {}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = label;
  btn.disabled = disabled;
  btn.className = [
    'mo-btn',
    `mo-btn--${variant}`,
    `mo-btn--${size}`,
    disabled ? 'mo-btn--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return btn;
};
