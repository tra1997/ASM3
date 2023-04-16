// Lấy các phần tử từ DOM
const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-btn");
const formContainer = document.getElementById("form-container");
const infoContainer = document.getElementById("info-container");

// Bắt sự kiện click vào nút submit
submitBtn.addEventListener("click", function () {
  // Lấy giá trị email nhập vào và loại bỏ khoảng trắng ở đầu và cuối
  const email = emailInput.value.trim(); 

  // Kiểm tra email có hợp lệ hay không
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email)) {
    alert("Email không hợp lệ! Vui lòng nhập lại.");
    return;
  }

  // Hiển thị container chứa thông tin cá nhân và ẩn container của form
  formContainer.classList.add("hide");
  infoContainer.classList.remove("hide");
});
