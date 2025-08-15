
var allProducts = ``;


function loadData() {
    fetch('https://dummyjson.com/products').then( (response) => {
        return response.json();
    } ).then( (data) => {
        console.log( data.products );


        const showDisplay = data.products.slice(0, 10);
        console.log( showDisplay );
        showDisplay.map( (item) => {
                
                allProducts +=  ` 
                <div class="col-md-3 col-sm-6">
                        <div class="card product-card shadow-sm h-100">
                            <img src="${item.images}" class="card-img-top" alt="${item.title}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text text-muted">${item.description}</p>
                                <p class="card-text text-muted">$${item.price}</p>
                                <a href="#" class="btn btn-primary btn-custom">View Details</a>
                            </div>
                        </div>
                    </div>
                `;
        } )
        document.getElementById('viewAllProducts').innerHTML = allProducts;
    } ).catch( (error) => {
        console.log(error);
    } );
}
loadData();


const viewAllProducts = document.getElementById('viewAllProductsBtn');


viewAllProducts.addEventListener('click', function() {

    allProducts = ``;
    fetch('https://dummyjson.com/products').then( (response) => {
        return response.json();
    } ).then( (data) => {
        console.log( data.products );

        data.products.map( (item) => {
                
                allProducts +=  ` 
                <div class="col-md-3 col-sm-6">
                        <div class="card product-card shadow-sm h-100">
                            <img src="${item.images}" class="card-img-top" alt="${item.title}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text text-muted">${item.description}</p>
                                <p class="card-text text-muted">$${item.price}</p>
                                <a href="#" class="btn btn-primary btn-custom">View Details</a>
                            </div>
                        </div>
                    </div>
                `;
        } )
        document.getElementById('viewAllProducts').innerHTML = allProducts;
    } ).catch( (error) => {
        console.log(error);
    } );
    viewAllProducts.style.display = 'none';
} );  
