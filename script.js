document.querySelectorAll(".l1").forEach(item=>{
    item.addEventListener('click',()=>{
        const secClass=item.getAttribute("data-section");
        const sec=document.querySelector("."+secClass);

        if(sec){
            sec.scrollIntoView({behavior:"smooth",block:"start"});
        }else{
            console.error("section not found",secClass)
        }
    });
});


function DogSlider()
{
const slider = document.querySelector(".dog_slider"); // Select single slider container
const leftButton = document.querySelector(".d-b-l");
const rightButton = document.querySelector(".d-b-r");


const cardWidth = document.querySelector(".dog_img").offsetWidth + 20; // 20px gap

leftButton.addEventListener("click", () => {
    slider.scrollBy({
        left: -cardWidth, // Move one card left
        behavior: "smooth",
    });
});

rightButton.addEventListener("click", () => {
    slider.scrollBy({
        left: cardWidth, // Move one card right
        behavior: "smooth",
    });
});
}

function CatSlider()
{
const slider = document.querySelector(".cat_slider"); // Select single slider container
const leftButton = document.querySelector(".c-b-l");
const rightButton = document.querySelector(".c-b-r");

const cardWidth = document.querySelector(".dog_img").offsetWidth + 20; // 20px gap

leftButton.addEventListener("click", () => {
    slider.scrollBy({
        left: -cardWidth, // Move one card left
        behavior: "smooth",
    });
});

rightButton.addEventListener("click", () => {
    slider.scrollBy({
        left: cardWidth, // Move one card right
        behavior: "smooth",
    });
});
}

function ParrotSlider()
{
const slider = document.querySelector(".parrot_slider"); // Select single slider container
const leftButton = document.querySelector(".p-b-l");
const rightButton = document.querySelector(".p-b-r");

const cardWidth = document.querySelector(".dog_img").offsetWidth + 20; // 20px gap

leftButton.addEventListener("click", () => {
    slider.scrollBy({
        left: -cardWidth, // Move one card left
        behavior: "smooth",
    });
});

rightButton.addEventListener("click", () => {
    slider.scrollBy({
        left: cardWidth, // Move one card right
        behavior: "smooth",
    });
});
}

CatSlider();
DogSlider();
ParrotSlider();

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded!");

  function eventsForForm() {
    console.log("Initializing event listeners...");

    // Login form visibility
    document.querySelector('.login').addEventListener('click', () => {
      console.log('Sign In button clicked!');
      document.querySelector('.form-container').style.display = 'flex';
    });

    // Register form visibility
    document.querySelectorAll('.signup').forEach(signUpBtn => {
      signUpBtn.addEventListener('click', () => {
        console.log('Sign Up button clicked!');
        document.querySelector('.form-container').style.display = 'none';
        document.querySelector('.form-container1').style.display = 'flex';
      });
    });

    // Revisibility of the Sign In form
    document.querySelector('.login').addEventListener('click', () => {
      console.log('Sign In button (inside Sign Up) clicked!');
      document.querySelector('.form-container1').style.display = 'none';
      document.querySelector('.form-container').style.display = 'flex';
    });

    // Close button for Sign In form
    document.querySelector('.cross').addEventListener('click', () => {
      console.log('Close button (Sign In) clicked!');
      document.querySelector('.form-container').style.display = 'none';
    });

    // Close button for Sign Up form
    document.querySelector('.cross1').addEventListener('click', () => {
      console.log('Close button (Sign Up) clicked!');
      document.querySelector('.form-container1').style.display = 'none';
    });
  }
  eventsForForm();
});

function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({
      behavior: 'smooth',block: 'start' });
}
 
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded!");
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) {
      console.error("Search input field not found!");
      return;
  }

  searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
          event.preventDefault(); 

          let searchQuery = searchInput.value.trim().toLowerCase();
          let sectionId = "";

          if (searchQuery === "cat") {
              sectionId = "cats_sect";
          } else if (searchQuery === "dog") {
              sectionId = "dogs_sect";
          } else if (searchQuery === "parrot") {
              sectionId = "parrots_sect";
          } else {
              alert("Oops! We only have Cats, Dogs, and Parrots. Check out our cute collection!");
              return;
          }
          const section = document.getElementById(sectionId);
          if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
              console.error("Section not found: " + sectionId);
          }
      }
  });
});



document.querySelectorAll(".adopt").forEach(button=>{
    button.addEventListener('click',()=>{
        console.log("adopt button clicked");
        document.querySelector(".form-container3").style.display='block';

        document.querySelector(".form-container3").scrollIntoView({behavior:"smooth", block:"center"});
    });
});
document.querySelector(".cross3").addEventListener('click',(e)=>{
    e.stopPropagation;
    document.querySelector(".form-container3").style.display='none';
    console.log("adopt button cross clicked");

});
document.querySelector(".userform").addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('Thank you for filling out the adoption form! Our team will contact you soon. 🐾');
    document.querySelector(".form-container3").style.display='none';

});


