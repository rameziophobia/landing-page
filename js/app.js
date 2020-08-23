/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

const isElementAtViewPortTop = (element) => {
    return element.getBoundingClientRect().top <= 70;
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
const sectionElements = document.getElementsByTagName("section");
const backToTopBtn = document.getElementById("back_to_top_btn");
const navbar_list = document.getElementById("navbar__list");

for (let element of sectionElements) {
    const li_element = document.createElement("li");
    li_element.textContent = element.dataset.nav;

    li_element.addEventListener('click', (event) => {
        console.log('A paragraph was clicked.');
        element.scrollIntoView({ behavior: 'smooth' });
    });

    //add fragment
    navbar_list.appendChild(li_element);

    console.log(element.dataset.nav);
};


// Add class 'active' to section when near top of viewport


document.addEventListener('scroll', event => {
    for (let element of sectionElements) {
        if (isElementAtViewPortTop(element)) {
            element.classList.add("your-active-class");
        } else {
            element.classList.remove("your-active-class");
        }
    };
});

let btnHideTimer;
document.addEventListener("scroll", event => {
    if (document.body.scrollTop > 27 || document.documentElement.scrollTop > 27) {
        backToTopBtn.classList.remove("hide");
        clearTimeout(btnHideTimer);
        btnHideTimer = setTimeout(() => {
            backToTopBtn.classList.add("hide");
        }, 1000);
    } else {
        backToTopBtn.classList.add("hide");
    }
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active