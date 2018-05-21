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
