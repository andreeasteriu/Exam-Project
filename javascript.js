let mainnav = document.getElementById("mainnav");
function openNav() {
    console.log(openNav);
    mainnav.classList.add('open');
    mainnav.classList.remove('close');
    mainnav.style.transition = "0.2s";
}


function closeNav() {
    console.log(closeNav);
    mainnav.style.transition = "0.2s";
    mainnav.classList.remove('open');
    mainnav.classList.remove('open-mq');
    mainnav.classList.add('close');

}

let urlParams= new URLSearchParams(window.location.search);

let categories = urlParams.get("categories");
console.log("I want to get the category: " + categories);

fetch("http://deckadev.com/wordpress/wp-json/wp/v2/shop?categories=" + categories)
.then(e=>e.json())
.then(showProductType)



function showProductType(data){
    console.log(data);
    data.forEach(showProduct)
}
function showProduct(aProduct){
    console.log(aProduct);
    let template = document.querySelector("#template").content;
    let clone = template.cloneNode(true);
 clone.querySelector(".more").href="subpage_music.html?id=" + aProduct.id;
 clone.querySelector(".name-product").textContent = aProduct.title.rendered;
 clone.querySelector(".img-post").src = aProduct.acf.image.sizes.medium;


    let category = document.querySelector("#category");
    category.appendChild(clone);

}


