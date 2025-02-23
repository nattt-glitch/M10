document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            alert(`This is an image of ${img.alt}`);
        });
    });
});