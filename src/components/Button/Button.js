import './Button.css';

/**
 * Creates a Button element wrapped in a section.
 *
 * @param {Object}  args
 * @param {string}  args.label    - Button text
 * @param {string}  args.href     - Optional URL — renders as <a> instead of <button>
 * @param {boolean} args.disabled - Whether the button is disabled
 * @returns {HTMLElement}
 */
export const createButton = ({
  label = 'New order',
  href = '',
  disabled = false,
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-button-section';
  section.setAttribute('aria-label', 'Button');

  let btn;

  if (href && !disabled) {
    btn = document.createElement('a');
    btn.href = href;
    btn.className = 'mo-button';
  } else {
    btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mo-button' + (disabled ? ' mo-button--disabled' : '');
    if (disabled) btn.disabled = true;
  }

  btn.textContent = label;
  section.appendChild(btn);
  return section;
};
