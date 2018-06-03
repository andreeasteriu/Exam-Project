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

function fetchProducts(){
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
    clone.querySelector(".size").textContent = "SIZE: " + aProduct.acf.size;
clone.querySelector(".number").textContent = aProduct.acf.price + " DKK";

    if (aProduct.acf.availability == false){
       clone.querySelector(".model").classList.add('opacity');
        clone.querySelector(".sold_out").innerHTML = "SOLD OUT";
    };

    let category = document.querySelector("#category");
    category.appendChild(clone);

}
fetchProducts();



function fetchBlogs(){
fetch("http://deckadev.com/wordpress/wp-json/wp/v2/blog?categories=" + categories)
.then(e=>e.json())
.then(showBlogPosts)
}

function showBlogPosts(data){
    console.log(data);
    data.forEach(showBlogs)
}

function showBlogs(aBlogPost) {
    console.log(aBlogPost);
    let templateBlog = document.querySelector('#blog-template').content;
    let cloneBlog = templateBlog.cloneNode(true);

cloneBlog.querySelector('.img-blog').src = aBlogPost.acf.image.sizes.medium;
cloneBlog.querySelector('.title-blog').textContent = aBlogPost.title.rendered;
cloneBlog.querySelector('.description-blog').innerHTML = aBlogPost.content.rendered;

let blog = document.querySelector("#blog-category");
    blog.appendChild(cloneBlog);
}

fetchBlogs();








let id = urlParams.get("id");
console.log("I want to get article: " + id);

fetch("http://deckadev.com/wordpress/wp-json/wp/v2/shop/" + id)
.then(e=>e.json())
.then(showSinglePost)

function showSinglePost(anItem){
    console.log(anItem);


 document.querySelector(".name-sub").textContent = anItem.title.rendered;

document.querySelector(".desc").innerHTML = anItem.content.rendered;
document.querySelector(".material").textContent = anItem.acf.material;
document.querySelector(".img-sub").src = anItem.acf.image.sizes.large;

    document.querySelector(".number-sub").textContent = anItem.acf.price+ " DKK";

    console.log(anItem.acf.size.split(","));

    let aOptions = anItem.acf.size.split(",");
    var i;
    for (i = 0; i < aOptions.length; i++) {
        document.querySelector("#select-size").innerHTML += '<option>' + aOptions[i] + '</option>';
    }
    console.log(aOptions.length);


    if (anItem.acf.availability == false){
        document.querySelector(".soldout-sub").innerHTML = "SOLD OUT";
    };
}

document.querySelector('.read').addEventListener('click', function() {
  document.querySelector('.desc').style.height= 'auto';
  this.style.display= 'none';
});



function back() {
    window.history.back();
}


function sizeDropDown() {
    document.querySelector(".open-arrow").classList.toggle("hide");
}

