var allProducts = ``;

function loadData() {
  allProducts = ``;
  fetch("https://dummyjson.com/products?limit=8")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);
      data.products.forEach((item) => {
        allProducts = allProducts + renderProducts(item);
      });
      document.getElementById("viewAllProducts").innerHTML = allProducts;
    })
    .catch((error) => {
      console.log(error);
      document.getElementById(
        "viewAllProducts"
      ).innerHTML = `<p class="text-danger">Failed to load products.</p>`;
    });
}

loadData();

// input field for search
const inputField = document.getElementById("inputSearch");
inputField.addEventListener("keyup", function (event) {
  allProducts = "";
  document.getElementById("viewAllProducts").innerHTML = "";
  const searchValue = event.target.value;
  console.log(searchValue);
  fetch("https://dummyjson.com/products/search?q=" + searchValue)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);
      data.products.forEach((item) => {
        allProducts = allProducts + renderProducts(item);
      });
      document.getElementById("viewAllProducts").innerHTML = allProducts;
    })
    .catch((error) => {
      console.log(error);
      document.getElementById(
        "viewAllProducts"
      ).innerHTML = `<p class="text-danger">Failed to load products.</p>`;
    });
});

//load more products

const viewAllProductsBtn = document.getElementById("viewAllProductsBtn");
let page = 1;
viewAllProductsBtn.addEventListener("click", function () {
  const url = `https://dummyjson.com/products?limit=8&skip=${page * 8}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);
      data.products.forEach((item) => {
        allProducts = allProducts + renderProducts(item);
      });
      // Increment the page number
      page++;
      document.getElementById("viewAllProducts").innerHTML = allProducts;
    })
    .catch((error) => {
      console.log(error);
      document.getElementById(
        "viewAllProducts"
      ).innerHTML = `<p class="text-danger">Failed to load products.</p>`;
    });
});

function renderProducts(item) {
  return `
                    <div class="col-md-3 col-sm-6">
                        <div class="card product-card shadow-sm h-100">
                            <img src="${item.images[0]}" class="card-img-top" alt="${item.title}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text text-muted">${item.description}</p>
                                <p class="card-text text-muted">$${item.price}</p>
                                <a href="#" class="btn btn-primary btn-custom">View Details</a>
                            </div>
                        </div>
                    </div>
                `;
}
