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
function fetchMusic(){
fetch("http://deckadev.com/wordpress/wp-json/wp/v2/shop?categories=" + categories)
.then(e=>e.json())
.then(showProductType)
}


function showProductType(data){
    console.log(data);
    data.forEach(showProduct)
}
function showProduct(aProduct){
    console.log(aProduct);
    let template = document.querySelector("#template").content;
    let clone = template.cloneNode(true);
 clone.querySelector(".more").href="subpage.html?id=" + aProduct.id;
 clone.querySelector(".name-product").textContent = aProduct.title.rendered;
 clone.querySelector(".img-post").src = aProduct.acf.image.sizes.medium;
clone.querySelector(".number").textContent = aProduct.acf.price + " DKK";

    if (aProduct.acf.availability == false){
       clone.querySelector(".model").classList.add('opacity');
        clone.querySelector(".sold_out").innerHTML = "SOLD OUT";
    };

    let category = document.querySelector("#category");
    category.appendChild(clone);

}
fetchMusic();



let id = urlParams.get("id");
console.log("I want to get article: " + id);

fetch("http://deckadev.com/wordpress/wp-json/wp/v2/shop/" + id)
.then(e=>e.json())
.then(showSinglePost)

function showSinglePost(anItem){
    console.log(anItem);


 document.querySelector(".name-product").textContent = anItem.title.rendered;

document.querySelector(".desc").innerHTML = anItem.content.rendered;

document.querySelector(".img-post").src = anItem.acf.image.sizes.medium;

    document.querySelector(".number").textContent = anItem.acf.price+ " DKK";
    document.querySelector(".size").textContent = "SIZE: " + anItem.acf.size;
    if (anItem.acf.availability == false){
        document.querySelector(".sold_out").innerHTML = "SOLD OUT";
    };
}

