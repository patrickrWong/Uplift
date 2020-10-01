// NavBar Toggle
const navTog = () => {
    const tab = document.querySelector('.tab');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    tab.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) =>{
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkTog 0.5s ease forwards ${index/ 8 + 0.5}s`;
        }
    })

    tab.classList.toggle('toggle');
    });
}

navTog();

// Welcome Toggle
const welcomeTog = () => {
    const signIn = document.querySelector('.signIn')
}