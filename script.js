$('.carousel').slick({
    prevArrow: '<img src="images/arrowleft.png">',
    nextArrow: '<img src="images/arrowright.png">',
  });

  let burger = document.querySelector('.burger-menu')
  let nav = document.querySelector('.main-nav')
  burger.addEventListener('click', function(){
      burger.classList.toggle('active')
      nav.classList.toggle('active')
  })