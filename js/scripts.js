const nameInput = document.getElementById('name-input');
const checkBtn = document.getElementById('check-btn');

nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() !== '') {
    checkBtn.classList.add('enabled');
    checkBtn.disabled = false;
    checkBtn.style.cursor = 'pointer';
  } else {
    checkBtn.classList.remove('enabled');
    checkBtn.disabled = true;
    checkBtn.style.cursor = 'not-allowed';
  }
});

checkBtn.addEventListener('click', () => {
  if (!checkBtn.disabled) {
    window.location.href = 'element.html';
  }
});
