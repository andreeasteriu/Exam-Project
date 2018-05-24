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

let id = urlParams.get("id");
console.log("I want to get article: " + id);

fetch("http://deckadev.com/wordpress/wp-json/wp/v2/shop/"+id)
.then(e=>e.json())
.then(showSinglePost)


function fetchProducts(){
  fetch("http://deckadev.com/wordpress/wp-json/wp/v2/shop?category=96")
    .then(e => e.json())
    .then(showMusic)
}

function showMusic(data){
    console.log(data);
    data.forEach(showEvents)
}
function showEvents(anEvent){
    console.log(anEvent);
    let template = document.querySelector("#template").content;
    let clone = template.cloneNode(true);
 clone.querySelector(".more").href="subpage_music.html?id=" + anEvent.id;
 clone.querySelector(".name-event").textContent = anEvent.title.rendered;
 clone.querySelector(".day").textContent = anEvent.acf.date.substring(0,2) + "/";
  clone.querySelector(".month").textContent = anEvent.acf.date.substring(2,4) + "/";
 clone.querySelector(".year").textContent = anEvent.acf.date.substring(4,8);
 clone.querySelector(".clock").textContent = anEvent.acf.time;
    clone.querySelector(".img-post").src = anEvent.acf.image.sizes.medium;


    let eventsList = document.querySelector("#eventsList");
    eventsList.appendChild(clone);

}
fetchMusic();

