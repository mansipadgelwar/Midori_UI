const modalBtn = document.querySelector("#modal-btn");
const modalClose = document.querySelector(".icon-close");
const modalContainer = document.querySelector(".modal-wrapper");

modalBtn.onclick = function () {
  modalContainer.style.display = "flex";
  console.log("hello");
};

modalClose.onclick = function () {
  modalContainer.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
};
