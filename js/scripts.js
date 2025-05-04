// 取得需要操作的元素
const submitCheck = document.getElementById('submit-check');
const nameInput = document.getElementById('name-input');
const submitCircle = document.getElementById('submit-circle');

// 當名字輸入框有變動時，檢查是否有輸入內容
nameInput.addEventListener('input', function () {
  if (nameInput.value.trim() !== "") {
    submitCheck.style.display = 'block'; // 顯示勾選符號
  } else {
    submitCheck.style.display = 'none'; // 隱藏勾選符號
  }
});

// 當按下確認按鈕（勾選符號）時
submitCircle.addEventListener('click', function () {
  if (nameInput.value.trim() !== "") {
    // 提交名字並跳轉到element.html
    alert("名字已提交：" + nameInput.value);
    window.location.href = "element.html"; // 跳轉到 element.html
  } else {
    alert("請輸入名字！");
  }
});
