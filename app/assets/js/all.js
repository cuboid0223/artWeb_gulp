$(function () {
  //   display none the backdrop of the replyModal
  var userInfoCollapse = document.getElementById("userInfoCollapse");
  let count = 0;
  var nextStepBtn = document.getElementById("btn-nextStep");
  // console.log(nextStepBtn);
  $("#btn-nextStep").on("click", () => {
    count += 1;
    console.log(count);
    if (count >= 3) {
      location.href = "index.html";
    }
  });
  $("#btn-goBack").on("click", () => {
    if (count > 1) {
      count -= 1;
    }
    console.log(count);
  });
  if (count == 1) {
   
    $("#payInfoCollapse").addClass("d-none");
  } else {
    $("#payInfoCollapse").addClass("show");
    $("#userInfoCollapse").removeClass("show");
  }

  // userInfoCollapse.addEventListener("hidden.bs.collapse", function () {
  //   if (count == 2) {
  //     $("#payInfoCollapse").addClass("show");
  //   }
  // });

  // //點選上一步
  // userInfo.addEventListener("shown.bs.collapse", function () {
  //   console.log("remove");
  //   $("#payInfoCollapse").removeClass("show");
  // });
});
