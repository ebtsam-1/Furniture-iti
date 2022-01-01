// sign container

let signContainer = document.getElementById("signContainer");
let closeBtn = document.getElementById("close");
let signBtn = document.getElementById("signBtn");

let furnCart = document.getElementById("furnCart");

function signAppear(){
    if(localStorage.name!=undefined){
     alert("You Log Out Successfully!");
     location.reload();
    localStorage.removeItem("name");
   
    localStorage.removeItem("AllCart");
    signBtn.innerText = `Sign In`;
   
    
    }else
    signContainer.classList.toggle("active");
}

// Local storage

function setUser(){

    localStorage.name = document.getElementById("username").value;
}


if(localStorage.name){
    signBtn.innerHTML = `Hello ${localStorage.name}  sign out?`;
}

// nav bar
let bars = document.getElementById('faBars');
            let options = document.querySelector('.options');

            bars.addEventListener('click', function(){
                options.classList.toggle('active');
            })

// Slider

let slides = Array.from(document.querySelectorAll(".slide"));

console.log(slides)

slides.forEach (function (slide, index) {

    slide.style.left = `${index * 100}%`;

});

let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let counter = 0;


prevBtn.addEventListener("click", function(){
    counter--;
    moving();
});

nextBtn.addEventListener("click", function(){
    counter++;
    moving();
});

function moving(){
    if(counter < 0){
        counter = slides.length - 1;
    }
    if(counter == slides.length){
        counter = 0;
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

function sliderInterval(){
    counter++;
    moving();
}

let t = setInterval(sliderInterval, 4000);



function cartOpenning(){

    furnCart.classList.toggle("active");
}