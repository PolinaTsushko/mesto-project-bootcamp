import { openPopup } from "./modal.js";
import { fullImgPopup } from "./modal.js";
const cardSection = document.querySelector('.photo-grid');
const largeImage = document.querySelector('.popup_picture');


const cardTemplate = document.getElementById('template-card').content;

export function createImageCard(cardItem) {
    const newElement = cardTemplate.querySelector('.element').cloneNode(true);
    const newImage = newElement.querySelector('.element__image');
    newImage.src = cardItem.link;
    newImage.alt = cardItem.name;
    const imageTitle = newElement.querySelector('.element__title');
    imageTitle.textContent = cardItem.name;

    const deleteButton = newElement.querySelector('.element__delete');
    deleteButton.addEventListener('click', function () {
        newElement.remove();
    });

    const likeButton = newElement.querySelector('.element__like');
    likeButton.addEventListener('click', function (event) {
        event.target.classList.toggle('element__like_active');
    });

    newImage.addEventListener('click', function () {
        fullImgPopup(cardItem.name, cardItem.link);
        openPopup(largeImage);
    });

    return newElement;
}

export function addCard(element) {
    cardSection.prepend(element);
}