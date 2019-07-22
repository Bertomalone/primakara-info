export default () => {
  const buttonScroll = document.querySelector(".banner__icon-link");
  const headline = document.querySelector(".headline");

  buttonScroll.addEventListener("click", () => {
    headline.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
};
