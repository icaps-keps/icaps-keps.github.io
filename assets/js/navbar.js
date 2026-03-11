// Responsiveness for the navigation bar
const btn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")
const showbtn = document.getElementById("show-button")
const hidebtn = document.getElementById("hide-button")

btn.addEventListener("click", (e) => {
  e.stopPropagation() // prevent document click
  menu.classList.toggle("hidden")
  showbtn.classList.toggle("hidden")
  hidebtn.classList.toggle("hidden")
})

// Close menu when clicking outside
document.addEventListener("click", (e) => {

  const clickedInsideMenu = menu.contains(e.target)
  const clickedButton = btn.contains(e.target)

  if (!clickedInsideMenu && !clickedButton && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden")
    showbtn.classList.remove("hidden")
    hidebtn.classList.add("hidden")
  }

})



// Zoom out logo on scroll
const logo = document.getElementById("logo")
let lastScroll = 0
window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset

  if (currentScroll > lastScroll) {
    logo.classList.add("scale-90")
  } 
  if (currentScroll == 0) {
    logo.classList.remove("scale-90")
  }

  lastScroll = currentScroll
})


// Scroll spy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".mynavlink");

function updateActiveMenu() {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove(
      "text-cyan-600",
      "font-semibold",
      "border-b-2",
      "border-cyan-600",
      "scale-110"
    );

    link.classList.add("text-gray-700");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.remove("text-gray-700");
      link.classList.add("text-cyan-600","font-semibold","scale-110");
    }

  });

}

window.addEventListener("scroll", updateActiveMenu);
window.addEventListener("load", updateActiveMenu);


const faders = document.querySelectorAll(".fade-in")

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-8")
      entry.target.classList.add("opacity-100", "translate-y-0")
      observer.unobserve(entry.target) // animate once
    }
  })
}, { threshold: 0.1 })

faders.forEach(el => observer.observe(el))