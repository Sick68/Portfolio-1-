//From Validation

const form = document.getElementById("form");
const status = document.getElementById("formStatus");

form.addEventListener('submit' , (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim(); 

  if(!name || !email || !message ){
    status.textContent = "Please fill in all fields.";
    status.style.color = 'red';
    return;
  }
  status.textContent = "Thanks! Your message has been sent successfully.";
  status.style.color = 'green';

  form.reset();
})

// Smooth Transition of href clicks

document.querySelectorAll("a[href^='#']").forEach(link => {

  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

//Active Navlinks on Scroll

const sections = document.querySelectorAll("section, div[id]");
const navLinks = document.querySelectorAll("header ul a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY; 

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (!id) return;

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});


