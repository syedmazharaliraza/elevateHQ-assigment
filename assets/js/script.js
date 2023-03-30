function animateOnScroll() {
    const animationElements = document.querySelectorAll('.animate');
    animationElements.forEach((element) => {
        console.log(element);
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const offset = 50;

        if (elementPosition < windowHeight - offset) {
            element.classList.add('animate__fadeInUp');
        }
    });
}

['scroll', 'DOMContentLoaded'].forEach(each => {
    document.addEventListener(each, animateOnScroll);
})
