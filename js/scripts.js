// 取得需要操作的元素
const submitButton = document.getElementById('submit-button');
const nameInput = document.getElementById('name-input');

// 當名字輸入框有變動時，檢查是否有輸入內容
nameInput.addEventListener('input', function () {
  if (nameInput.value.trim() !== "") {
    submitButton.style.display = 'block'; // 顯示確認按鈕
  } else {
    submitButton.style.display = 'none'; // 隱藏確認按鈕
  }
});

// 當按下確認按鈕時
submitButton.addEventListener('click', function () {
  if (nameInput.value.trim() !== "") {
    // 提交名字並跳轉到element.html
    alert("名字已提交：" + nameInput.value);
    window.location.href = "element.html"; // 跳轉到 element.html
  } else {
    alert("請輸入名字！");
  }
});
