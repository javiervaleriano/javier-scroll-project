// Set current year in the footer
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// Automatic height of navbar
const toggleBtn = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');
const linksContainer = document.querySelector('.navbar ul');

toggleBtn.addEventListener('click', function () {
    this.classList.toggle('toggle-active');
    
    this.classList.contains('toggle-active') ? navbar.style.height = `${linksContainer.getBoundingClientRect().height}px` :
    navbar.style.height = 0;
});


// Set the navigation bar links to close the navbar when clicked
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Prevent default behavior of links
        e.preventDefault();
        
        // Calculate height of navbar
        const navbarHeight = Math.round(document.querySelector('.header-nav').getBoundingClientRect().height);
        
        // Get id from 'href' navbar links
        const id = e.currentTarget.getAttribute('href').slice(1);
        const section = document.getElementById(id);
        
        // Scrolls down to that section minus the height of the navigation bar
        window.scroll(0, (section.offsetTop - navbarHeight) - 10);
        
        if (toggleBtn.classList.contains('toggle-active')) {
            toggleBtn.classList.remove('toggle-active');
            navbar.style.height = 0;
        }
    });
});

// Select the link that takes the user to the top
const topLink = document.querySelector('.fa-chevron-circle-up');

// Appears topLink and fixed navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.all-nav');
    const navbarHeight = Math.round(navbar.getBoundingClientRect().height);
    
    if (window.pageYOffset > navbarHeight) {
        navbar.classList.add('fixed-allnav');
    } else {
        navbar.classList.remove('fixed-allnav');
    }
    
    if (window.pageYOffset >= 722) {
          topLink.classList.add('show-toplink');
    } else {
        topLink.classList.remove('show-toplink');
    }
});

// Set top link
topLink.addEventListener('click', function () {
    if (toggleBtn.classList.contains('toggle-active')) {
        toggleBtn.classList.remove('toggle-active');
        navbar.style.height = 0;
    }
});