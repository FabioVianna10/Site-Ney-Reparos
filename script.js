const nav = document.querySelector("header nav div.navegacao");

const menu = document.querySelector("button");

const carregar = document.getElementById("reload");

function btn() {
  nav.style.height = "35vh";
}

function out() {
  nav.style.height = "0";
}

carregar.addEventListener("click", () =>{
    location.reload();
})