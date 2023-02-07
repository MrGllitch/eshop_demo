
$(document).ready(function() {
  let lastScrollTop = 0;
  $(window).scroll(function() {
    let currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > lastScrollTop) {
      $('#top-bar').addClass("hide");
    } else {
      $('#top-bar').removeClass("hide");
    }
    lastScrollTop = currentScrollTop;
  });
});
