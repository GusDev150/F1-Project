const galleries = document.querySelectorAll('.gallery');

galleries.forEach(gallery => {
    const mainImage = gallery.querySelector('.gallery-main');
    const thumbs = gallery.querySelectorAll('.gallery-thumbs img');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src;

            thumbs.forEach(img => img.classList.remove('active'));

            thumb.classList.add('active');
        });
    });
});
