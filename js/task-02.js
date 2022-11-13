const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.innerText = ingredient;
  return listItem;
});
const ingredientsListEl = document.querySelector("#ingredients");
ingredientsListEl.append(...listEl);
