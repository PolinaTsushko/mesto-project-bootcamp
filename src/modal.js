const buttonCloseList = document.querySelectorAll('.close-button-all');

document.addEventListener('keydown', function (event) {
    const activePopup = document.querySelector('.popup__active');
    if (activePopup !== null && event.key === 'Escape') {
        closePopup(activePopup);
    }
});



window.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup')) {
        closePopup(event.target);
    }
});

buttonCloseList.forEach(function (item) {
    item.addEventListener('click', function (event) {
        closePopup(event.target.closest('.popup'));
    });
});


export function openPopup(event) {
    event.classList.add('popup__active');
}


export function closePopup(event) {
    event.classList.remove('popup__active');
}

const largeImage = document.querySelector('.popup_picture');


export function fullImgPopup(title, imageLink) {
    const image = largeImage.querySelector('.popup__image');
    const titleText = largeImage.querySelector('.popup__img-title');
    image.src = imageLink;
    image.alt = title;
    titleText.textContent = title;
}