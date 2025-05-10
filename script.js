const buttons = document.querySelectorAll('.info-btn');
const bubbles = document.querySelectorAll('.bubble');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);

    // If already visible, toggle it off
    const isActive = target.classList.contains('show');
    bubbles.forEach(b => b.classList.remove('show'));
    if (!isActive) {
      target.classList.add('show');
    }
  });
});
