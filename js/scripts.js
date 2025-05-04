// 確認按鈕的勾選狀態
const submitCheck = document.getElementById('submit-check');
const nameInput = document.getElementById('name-input');

// 檢查名字輸入框是否已經填寫
nameInput.addEventListener('input', function () {
  if (nameInput.value.trim() !== "") {
    submitCheck.style.display = 'block'; // 顯示勾選符號
  } else {
    submitCheck.style.display = 'none'; // 隱藏勾選符號
  }
});

// 當按下確認按鈕
submitCheck.addEventListener('click', function () {
  alert("名字已提交：" + nameInput.value);
});
