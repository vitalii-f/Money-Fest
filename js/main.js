var slider = document.getElementsByClassName("slider");
var sliderChild = document.getElementsByClassName("slider__item");

var slideIndex = 1;
currentSlide(slideIndex);

document.querySelector('.slider__dots').addEventListener('click', (event) => {
    const $slide = document.querySelector(event.target.getAttribute('href'));
    if (!$slide) return;
    
    if ($slide.scrollIntoViewIfNeeded) {
      event.preventDefault();
      $slide.scrollIntoViewIfNeeded();
    } else if ($slide.scrollIntoView) {
      event.preventDefault();
      $slide.scrollIntoView();
    }
  });

document.querySelector('.slider').addEventListener('scroll', (event) => {
    // console.log("W: " + sliderChild[0].clientWidth);
    // console.log("L: " + slider[0].scrollLeft);
    var swipeSlide = Math.floor(slider[0].scrollLeft / sliderChild[0].clientWidth + 1);
    // var swipeSlide = Math.floor(slider[0].scrollLeft / 1000 + 1);
    changeSlide(slideIndex = swipeSlide);
});

function currentSlide (currentId) {
    changeSlide(slideIndex = currentId);
}

function plusSlide() {
    if (slideIndex == sliderChild.length) {
        changeSlide(slideIndex = sliderChild.length);
    } else {
        slider[0].scrollLeft += slider[0].clientWidth;
        changeSlide(slideIndex += 1); 
    }
}

function minusSlide() {
    if (slideIndex == 1) {
        changeSlide (slideIndex = 1);
    } else {
        slider[0].scrollLeft -= slider[0].clientWidth;
        changeSlide (slideIndex -= 1);
    }  
}

function changeSlide (currentId) {
    var dots = document.getElementsByClassName("slider__dots_item");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[currentId - 1].className += " active";
  }

function closeDiscount() {
    var discount_block = document.getElementsByClassName("discount__back");
    discount_block[0].style.display = "none";
}


var burgerMenu = document.getElementsByClassName("header__burger");
var headerLinks = document.getElementsByClassName("header__links");
var headerButton = document.getElementsByClassName("header__account_button");

document.querySelector('.header__burger').addEventListener('click', (event) => {
    console.log("yes");
    burgerMenu[0].classList.toggle('_active');
    headerLinks[0].classList.toggle('_active');
    headerButton[0].classList.toggle('_active');
});