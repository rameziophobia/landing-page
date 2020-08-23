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
 *  Global Variables
 */
const sectionElements = document.getElementsByTagName("section");
const backToTopBtn = document.getElementById("back_to_top_btn");
const navbar_list = document.getElementById("navbar__list");

/**
 *  Helper Functions
 */

const isElementAtViewPortTop = (element) => {
    return element.getBoundingClientRect().top <= 70 &&
        element.getBoundingClientRect().bottom >= 0;
};

/**
 * Main Functions
 */

// build the nav
function buildNavBar() {
    const sectionsListFragment = document.createDocumentFragment();

    for (let element of sectionElements) {
        const li_element = document.createElement("li");
        li_element.textContent = element.dataset.nav;
        sectionsListFragment.appendChild(li_element);

        li_element.addEventListener('click', () => {
            element.scrollIntoView({ behavior: 'smooth' });
        });
    };

    navbar_list.appendChild(sectionsListFragment);
}

buildNavBar();


// Add class 'active' to section when near top of viewport
const setActiveSection = () => {
    li_elements = navbar_list.children;
    let index = 0;
    for (let element of sectionElements) {
        if (isElementAtViewPortTop(element)) {
            element.classList.add("your-active-class");
            li_elements[index].classList.add("your-active-class");
        } else {
            element.classList.remove("your-active-class");
            li_elements[index].classList.remove("your-active-class");
        }
        index++;
    };
}


// hide and Reveal back to top button
let btnHideTimer;
const showBackToTopBtn = () => {
    if (document.body.scrollTop > 27 || document.documentElement.scrollTop > 27) {
        backToTopBtn.classList.remove("hide");
        clearTimeout(btnHideTimer);
        btnHideTimer = setTimeout(() => {
            backToTopBtn.classList.add("hide");
        }, 1000);
    } else {
        backToTopBtn.classList.add("hide");
    }
}

/**
 *  Events
 * 
 */

document.addEventListener('scroll', () => {
    setActiveSection();
    showBackToTopBtn();
});