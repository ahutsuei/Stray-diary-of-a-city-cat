const nameInput = document.getElementById('name-input');
const submitCheck = document.getElementById('submit-check');

// 監聽輸入
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() !== '') {
    submitCheck.style.pointerEvents = 'auto'; // 可點擊
    submitCheck.style.opacity = '1';           // 可視提示
  } else {
    submitCheck.style.pointerEvents = 'none'; // 禁止點擊
    submitCheck.style.opacity = '0.4';         // 呈現灰掉效果
  }
});

// 點擊時跳轉
submitCheck.addEventListener('click', () => {
  if (nameInput.value.trim() !== '') {
    window.location.href = 'element.html';
  }
});
