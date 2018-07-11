document.addEventListener("DOMContentLoaded", function(e) {
  let timer;
  let pageIndex = 0;
  showPage();

  function showPage() {
    const pages = document.getElementsByClassName('page');
    const dots = document.getElementsByClassName('dot');
    const transitionTime = 15/pages.length * 1000;

    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }
    pageIndex++;
    if (pageIndex > pages.length) {
      pageIndex = 1;
    }
    pages[pageIndex-1].style.display = "block";
    dots[pageIndex-1].className += " active";
    if ((pages.length - pageIndex) === 0) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(showPage, transitionTime);
    }
  }
});


//   function showPage() {
//     console.log('hellow');
//     const pages = document.getElementsByClassName('page');
//     const dots = document.getElementsByClassName('dot');
//     const transitionTime = 15/pages.length * 1000;
//     setTimeout(() => {
//
//     }, transitionTime)
//   }
// })
