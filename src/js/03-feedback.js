// import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector(`.feedback-form`),
    input: document.querySelector(`input[name='email']`),
    textarea: document.querySelector(`textarea[name='message']`)
};

const STORAGE_EMAIL = `feedback-form-state`;

const STORAGE_MESSAGE = `feedback-form-state-message`;

populateEmail();
populateMessage();

refs.form.addEventListener(`submit`, onFormSubmit);
refs.input.addEventListener(`input`, onInputEmail);
refs.textarea.addEventListener(`input`, onTextareaInput);
// refs.input.addEventListener(`input`, throttle(onInputEmail, 500));
// refs.textarea.addEventListener(`input`, throttle(onTextareaInput, 500));


function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    // localStorage.removeItem(STORAGE_EMAIL);
    localStorage.removeItem(STORAGE_MESSAGE)
};

function onInputEmail(evt) {
    const valueEmail = evt.currentTarget.value;
    localStorage.setItem(STORAGE_EMAIL, valueEmail);
};

function onTextareaInput(evt) {
    const valueMessage = evt.currentTarget.value;
    localStorage.setItem(STORAGE_MESSAGE, valueMessage);
};

function populateEmail() {
    const savedEmail = localStorage.getItem(STORAGE_EMAIL);
    if (savedEmail) {
        refs.input.value = savedEmail;
    }
};

function populateMessage() {
    const savedMessage = localStorage.getItem(STORAGE_MESSAGE);
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
};


// ніяк не виходить підключити lodash.throttle
 