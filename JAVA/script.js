let slideIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlide();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.length - 1;
    }
    showSlide();
}

function filtrarAnimais(categoria) {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains(categoria)) {
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
    }
}
