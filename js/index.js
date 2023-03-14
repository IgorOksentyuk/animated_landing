// jQuery slick slider logic
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    autoplay: true,
  });
});

//animation logic
const animItems = document.querySelectorAll(".anim-items");

// start if animItems are present
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  // function that adds and removes class .active when scrolling on item
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      // height of item
      const animItemHeigth = animItem.offsetHeight;
      // position of item relative to the top of the page
      const animItemOffset = offset(animItem).top;
      // coefficient of starting the animation (when 1/4 of item was scrolled)
      const animStart = 4;
      // point of start of the animation
      let animItemPoint = window.innerHeight - animItemHeigth / animStart;

      if (animItemHeigth > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      // adding of class if scroll position isnt lower or higher then item
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeigth
      ) {
        animItem.classList.add("active");
      } else {
        // here possible to add class ".no-hide" for not re-animate item
        animItem.classList.remove("active");
      }
    }
  }

  //function that gives offset value
  function offset(element) {
    const rect = element.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  animOnScroll();
}
