const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");

let categoriesCount = categories.length;

console.log(`Number of categories: ${categoriesCount}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
