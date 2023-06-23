// Change Navbar style on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show / Hide FAQ

document.querySelectorAll(".faq").forEach(faq => {
   faq.addEventListener('click',()=>{
    faq.classList.toggle('open')
   })
});