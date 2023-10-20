import './pages/index.css';
import { addCard } from "./card.js";
import { openPopup } from "./modal.js";
import { closePopup } from "./modal.js";
import { createImageCard } from "./card.js";
import { enableValidation } from "./validate.js";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const popEditBtn = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup');
const profileUsername = document.querySelector('.profile__username');
const profileDescription = document.querySelector('.profile__description');
const inputUsername = document.querySelector('.popup__input-username');
const inputDescription = document.querySelector('.popup__input-desription');

function submitInfo() {
  inputUsername.value = profileUsername.textContent;
  inputDescription.value = profileDescription.textContent;
}

popEditBtn.addEventListener('click', function () {
  submitInfo(profilePopup);
});

popEditBtn.addEventListener('click', function () {
  openPopup(profilePopup);
  submitInfo();
});



const formProfile = document.querySelector('.popup__form_profile');

function saveFormInfo(event) {
  event.preventDefault();
  profileUsername.textContent = inputUsername.value;
  profileDescription.textContent = inputDescription.value;
  closePopup(profilePopup);
}

formProfile.addEventListener('submit', saveFormInfo);


const formInputPlace = document.querySelector('.popup__input-title');
const formInputImage = document.querySelector('.popup__input-link');
const cardInfo = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup-add');
const formCard = document.querySelector('.popup__form_card');


initialCards.forEach(function (item) {
  addCard(createImageCard(item));
});


cardInfo.addEventListener('click', function () {
  openPopup(popupCard)
});


function saveFormCard(event) {
  event.preventDefault();
  const cardData = {
    link: formInputImage.value,
    name: formInputPlace.value
  }
  addCard(createImageCard(cardData));
}

formCard.addEventListener('submit', saveFormCard);


const validationSettings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  formSelector: '.popup__form',
  errorInputClass: 'popup__input_error',
}

enableValidation(validationSettings);


import arkhyz from "./images/arkhyz.jpg";
import chelyabinsk from "./images/chelyabinsk-oblast.jpg";
import ivanovo from "./images/ivanovo.jpg";
import kamchatka from "./images/kamchatka.jpg";
import kholmog from "./images/kholmogorsky-rayon.jpg";
import baikal from "./images/baikal.jpg";
import editButtontn from "./images/Vector.svg";
import addBtnProfile from "./images/Add-Button.svg";
import closePopupBtn from "./images/Close_Icon.svg";
import rectangle from './images/Rectangle.jpg';
import kusto from "./images/image.jpg";
import logo from "./images/logo.svg";
import likeActive from "./images/Union.svg";
import like from "./images/Vector-heart.svg";
import deleteBtn from "./images/Delete.svg";


const initialCard = [
  { name: 'Архыз', link: arkhyz },
  { name: 'Челябинская область', link: chelyabinsk },
  { name: 'Иваново', link: ivanovo },
  { name: 'Камчатка', link: kamchatka },
  { name: 'Холмогорский район', link: kholmog },
  { name: 'Байкал', link: baikal },
];