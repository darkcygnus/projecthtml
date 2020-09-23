const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');

var images = document.getElementById('gallery-img').querySelectorAll('img');

previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        const originalSrc = preview.getAttribute('src');
        Swal.fire({
            imageUrl: originalSrc,
            showConfirmButton: false,
            width: 'auto',

            background: '#c7cbcf',
            allowOutsideClick: true,
            timer: '5000',
        });
    });
});
