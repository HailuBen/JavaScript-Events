//Mouse events
const hoverBtn = document.getElementById('hoverBtn');
const mouseMsg = document.getElementById('mouseMsg');

hoverBtn.addEventListener('mouseover', () => {
    mouseMsg.textContent = 'Mouse is over the button!';
});

hoverBtn.addEventListener('mouseout', () => {
  mouseMsg.textContent = 'Mouse left the button.';
});

//Keyboard events
const keyInput = document.getElementById('keyInput');
const keyMsg = document.getElementById('keyMsg');

keyInput.addEventListener('keydown', (e) => {
  keyMsg.textContent = `Last key pressed: ${e.key}`;
});

//Form 
const form1 = document.getElementById('form1');
const formMsg = document.getElementById('formMsg');
const formInput = document.getElementById('formInput');

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = `Form input: "${formInput.value}" submitted successfully!`;
    form1.reset();
});

//Focus 
const focusInput = document.getElementById('focusInput');
const focusMsg = document.getElementById('focusMsg');

focusInput.addEventListener('focus', ()=>{
    focusMsg.textContent = 'Focused.';
});

focusInput.addEventListener('blur', ()=> {
    focusMsg.textContent = 'Unfocused.';
});