const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');

var images = document.getElementById('gallery-img').querySelectorAll('img');

var cag1 = images[0].getAttribute('src');
var cag2 = images[1].getAttribute('src');
var cag3 = images[2].getAttribute('src');
var cag4 = images[3].getAttribute('src');
var cag5 = images[4].getAttribute('src');
var cag6 = images[5].getAttribute('src');

$('.gallery img').click(function () {
    Swal.fire({
        padding: '0',
        margin: '0',
        imageUrl: images[2].getAttribute('src'),
        showConfirmButton: false,
        imageWidth: 'auto',
        imageHeight: 'auto',
    });
});
