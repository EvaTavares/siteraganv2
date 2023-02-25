window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      })});

const menu = document.querySelector(".bar-menu-mob");

menu.addEventListener("click", function() {
  const open = document.getElementById("menu-mobile");
  open.setAttribute("style", "left:0")
});

const closed = document.querySelector(".close-menu-mob");

closed.addEventListener("click", function(){
  const close = document.getElementById("menu-mobile");
  close.setAttribute("style", "left:-100%")  
})

