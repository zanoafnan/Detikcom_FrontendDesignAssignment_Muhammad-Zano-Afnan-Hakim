const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

function setInitialThumbnail() {
    thumbnails[currentIndex].style.filter = 'none';
}

setInitialThumbnail();

function showSlide(index) {
    const newPosition = -index * 100 + '%';
    slider.style.transform = 'translateX(' + newPosition + ')';

    // Reset thumbnail styles
    thumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            // Set color to the thumbnail corresponding to the current slide
            thumbnail.style.filter = 'none';
        } else {
            // Convert other thumbnails to black and white
            thumbnail.style.filter = 'grayscale(100%)';
        }
    });
}

function selectThumbnail(index) {
   slider.style.transition = 'none';

    currentIndex = index;
    showSlide(currentIndex);

    setTimeout(() => {
        slider.style.transition = '';
    }, 0);
}


thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        selectThumbnail(index);
    });
});

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    const newPosition = -currentIndex * 100 + '%';

    slider.style.transition = 'none';

    slider.style.transform = 'translateX(' + newPosition + ')';

    // Reset thumbnail styles
    thumbnails.forEach((thumbnail, i) => {
        if (i === currentIndex) {
            thumbnail.style.filter = 'none';
        } else {
            thumbnail.style.filter = 'grayscale(100%)';
        }
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    const newPosition = -currentIndex * 100 + '%';

    slider.style.transition = 'none';

    slider.style.transform = 'translateX(' + newPosition + ')';

    // Reset thumbnail styles
    thumbnails.forEach((thumbnail, i) => {
        if (i === currentIndex) {
            thumbnail.style.filter = 'none';
        } else {
            thumbnail.style.filter = 'grayscale(100%)';
        }
    });
}




document.querySelector('.arrow.left').addEventListener('click', prevSlide);
document.querySelector('.arrow.right').addEventListener('click', nextSlide);
