"use strict";
/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const gBtnInfoShow = $$("button.btn-info-show");
const gDivJobInfoDetail = $$(".jobs-info-details");

/*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */
// gBtnInfoShow.forEach((element, index) => {
//   element.onclick = function () {
//     console.log("Button is on");
//     if (gDivJobInfoDetail[index].style.display === "none") {
//       gBtnInfoShow[
//         index
//       ].innerHTML = `<i class="fa-solid fa-caret-down" style="color: #000000"></i
//       >View Less`;
//       gDivJobInfoDetail[index].style.display = "block";
//     } else {
//       gBtnInfoShow[
//         index
//       ].innerHTML = `<i class="fa-solid fa-caret-down" style="color: #000000"></i
//       >View More`;
//       gDivJobInfoDetail[index].style.display = "none";
//     }
//   };
// });

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
function onPageLoading() {
  console.log(gBtnInfoShow);
  console.log(gDivJobInfoDetail);
  gBtnInfoShow.forEach((element, index) => {
    element.onclick = function () {
      console.log("Button is on");
      if (gDivJobInfoDetail[index].classList.contains("hlt-show") == false) {
        gBtnInfoShow[
          index
        ].innerHTML = `<i class="fa-solid fa-caret-down" style="color: #000000"></i
        >View Less`;
        gDivJobInfoDetail[index].classList.add("hlt-show");
      } else {
        gBtnInfoShow[
          index
        ].innerHTML = `<i class="fa-solid fa-caret-down" style="color: #000000"></i
        >View More`;
        gDivJobInfoDetail[index].classList.remove("hlt-show");
      }
    };
  });
  // handledJobDetail();
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
