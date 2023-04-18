const viewMoreBtns = document.querySelectorAll(".view-more");
viewMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const jobContent = btn.nextElementSibling;
    console.log(jobContent);
    if (jobContent.classList.contains("hide")) {
      jobContent.classList.remove("hide");
      btn.textContent = "View Less";
    } else {
      jobContent.classList.add("hide");
      btn.textContent = "View More";
    }
  });
});
