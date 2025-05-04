const nameInput = document.getElementById('name-input');
const submitCheck = document.getElementById('submit-check');

nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() !== '') {
    submitCheck.disabled = false;
  } else {
    submitCheck.disabled = true;
  }
});

submitCheck.addEventListener('click', () => {
  if (!submitCheck.disabled) {
    window.location.href = 'element.html';
  }
});
