const categoryCollapseHandler = () => {
  const categoryCollapseButton = document.querySelector(
    ".category__collapse-button"
  );
  const categoryCollapseIcon = document.querySelector(
    ".category__collapse-icon"
  );
  const categoryCollapseContainer = document.querySelector(
    ".category__category-container--collapse"
  );

  categoryCollapseButton.addEventListener("click", () => {
    categoryCollapseIcon.classList.toggle("category__collapse-icon--active");
    categoryCollapseContainer.classList.toggle(
      "category__category-container--collapse--active"
    );
  });
};

export default () => {
  const category = document.querySelector(".category__category-container");
  const categoryList = document.querySelector(".category__list");
  const collapseButton = document.querySelector(
    ".category__collapse-button-container"
  );

  if (category.offsetWidth <= categoryList.offsetWidth) {
    category.classList.add("category__category-container--collapse");
    collapseButton.classList.add("category__collapse-button-container--active");
    categoryCollapseHandler();
  }
};
