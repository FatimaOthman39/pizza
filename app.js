
const apiUrl = "https://dummyjson.com/products";


const menuContainer = document.getElementById("menu-container");

fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        displayMenu(data.products);
    })
    .catch((error) => {
        menuContainer.innerHTML = `<p>Error loading menu: ${error.message}</p>`;
    });


function displayMenu(items) {

    menuContainer.innerHTML = "";


    if (!items || items.length === 0) {
        menuContainer.innerHTML = "<p>No menu items found.</p>";
        return;
    }


    items.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}">
      <h2>${item.title}</h2>
      <p class="price">$${item.price.toFixed(2)}</p>
    `;

        menuContainer.appendChild(menuItem);
    });
}
