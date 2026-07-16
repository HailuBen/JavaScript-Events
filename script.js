//Mouse events
const hoverBtn = document.getElementById('hoverBtn');
const mouseMsg = document.getElementById('mouseMsg');

hoverBtn.addEventListener('mouseover', () => {
    mouseMsg.textContent = 'Mouse is over the button!';
});

hoverBtn.addEventListener('mouseout', () => {
  mouseMsg.textContent = 'Mouse left the button.';
});

