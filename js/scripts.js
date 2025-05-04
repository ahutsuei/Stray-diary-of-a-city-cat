// 取得輸入欄與按鈕
const nameInput = document.getElementById('name-input');
const submitCheck = document.getElementById('submit-check');

// 初始狀態：按鈕不可點擊
submitCheck.disabled = true;

// 當輸入內容變化時
nameInput.addEventListener('input', () => {
  // 檢查是否有輸入內容
  if (nameInput.value.trim() !== '') {
    submitCheck.disabled = false;
    submitCheck.style.opacity = '1';         // 顯示正常按鈕狀態
    submitCheck.style.cursor = 'pointer';
  } else {
    submitCheck.disabled = true;
    submitCheck.style.opacity = '0.5';       // 呈現灰色狀態
    submitCheck.style.cursor = 'not-allowed';
  }
});

// 點擊 ✔ 後跳轉
submitCheck.addEventListener('click', () => {
  if (!submitCheck.disabled) {
    window.location.href = 'element.html';
  }
});
