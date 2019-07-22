const categoryCollapseHandler = () => {
  const categoryCollapseButton = document.querySelector(
    ".category__collapse-button"
  );
  const categoryCollapseIcon = document.querySelector(
    ".category__collapse-icon"
  );

  categoryCollapseButton.addEventListener("click", () => {
    categoryCollapseIcon.classList.toggle("category__collapse-icon--active");
  });
};

export default () => {
  const category = document.querySelector(".category__category-container");
  const categoryList = document.querySelector(".category__list");

  if (category < categoryList) {
    category.classList.add("category__category-container--collapse");
    categoryCollapseHandler();
  }
};
