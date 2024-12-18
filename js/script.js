let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}




window.onloadTurnstileCallback = function () {
    turnstile.render("#myWidget", {
      sitekey: "0x4AAAAAAA3DsQ8MAh9fXzQD",
      callback: function (token) {
        console.log(`Challenge Success ${token}`);
        setTimeout(() =>{
            document.querySelector(".container").style.display = "block";
            document.getElementById("myWidget").style.display = "none";
            // Optionally, hide the "Please verify" message too
            document.getElementById("verification-message").style.display = "none";
        }, 2000);
      },
    });
  };