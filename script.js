const buttons = document.querySelectorAll('.info-btn');
const bubbles = document.querySelectorAll('.bubble');
const container = document.querySelector('.resume-container');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);

    const isActive = target.classList.contains('show');
    bubbles.forEach(b => b.classList.remove('show'));

    if (!isActive) {
      target.classList.add('show');
    }

    container.classList.add('shrink');
  });
});
