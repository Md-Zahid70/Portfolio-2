let cvBtn = document.querySelector('#cvBtn');
let submit = document.querySelector('#submit');
let bar = document.querySelector('#bar');

cvBtn.addEventListener('click', function(){
    alert("downlode Sussesfully");
});

submit.addEventListener('click', function(){
    let email = document.querySelector("#email");
    let pass = document.querySelector("#pass");

    if(email.value == "" && pass.value == ""){
        alert("Fill Detail");
    }
    else{
        alert("Logged IN")
    }
});

let ul = document.querySelector("ul");
bar.addEventListener('click', function(){
    ul.classList.toggle("showData");

    if(ul.className == "showData"){
        bar.className = "fa-solid fa-xmark";
    }else{
        bar.className = "fa-solid fa-bars"; 
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider-progress");
  
    sliders.forEach(slider => {
      const width = slider.style.width;
      slider.style.width = "0";
      setTimeout(() => {
        slider.style.transition = "width 1s ease";
        slider.style.width = width;
      }, 100);
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    const images = document.querySelectorAll('.image-animate');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('visible');
            }
        });

        images.forEach(img => {
            const imageTop = img.getBoundingClientRect().top;
            if (imageTop < windowHeight * 0.85) {
                img.classList.add('visible');
            }
        });
    };

    // Run on scroll and initially on load
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

