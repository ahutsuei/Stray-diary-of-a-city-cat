// 取得名字輸入框
const nameInput = document.getElementById('name-input');

// 檢查是否已經建立按鈕（避免重複）
let checkButton = null;

// 監聽輸入框內容變化
nameInput.addEventListener('input', function () {
  const hasText = nameInput.value.trim() !== "";

  if (hasText && !checkButton) {
    // 動態建立按鈕
    checkButton = document.createElement('div');
    checkButton.textContent = '✔';
    checkButton.style.position = 'absolute';
    checkButton.style.left = '270px';
    checkButton.style.top = '760px';
    checkButton.style.fontSize = '24px';
    checkButton.style.color = '#333';
    checkButton.style.cursor = 'pointer';
    checkButton.style.userSelect = 'none';

    checkButton.addEventListener('click', function () {
      window.location.href = 'element.html';
    });

    document.querySelector('.container').appendChild(checkButton);
  }

  if (checkButton) {
    checkButton.style.display = hasText ? 'block' : 'none';
  }
});
