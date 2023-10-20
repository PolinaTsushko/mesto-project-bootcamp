function showError(inputField, errorMesage, errorInputClass) {
  const spanId = 'error-' + inputField.id;
  const errorElement = document.getElementById(spanId);
  inputField.classList.add(errorInputClass);
  errorElement.textContent = errorMesage;
}

function hideError(inputField, errorInputClass) {
  const spanId = 'error-' + inputField.id;
  const errorElement = document.getElementById(spanId);
  inputField.classList.remove(errorInputClass);
  errorElement.textContent = '';
}

function checkField(inputField, settings) {
  if (inputField.validity.valid) {
    hideError(inputField, settings.errorInputClass);
  } else {
    showError(inputField, inputField.validationMessage, settings.errorInputClass);
  }
}

function disableSubmit(button) {
  button.disabled = true;
}

function enableSubmit(button) {
  button.disabled = false;
}


function checkForm(form, button) {
  if (form.checkValidity()) {
    enableSubmit(button);
  } else {
    disableSubmit(button);
  }
}


export function enableValidation(settings) {
  const forms = document.querySelectorAll(settings.formSelector);
  forms.forEach(form => {
    const submitButton = form.querySelector(settings.submitButtonSelector);
    const inputAllField = form.querySelectorAll(settings.inputSelector);
    checkForm(form, submitButton);
    inputAllField.forEach(item => {
      item.addEventListener('input', () => {
        checkForm(form, submitButton);
        checkField(item, settings);
      });
    });
  });

}


