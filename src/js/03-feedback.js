import throttle from "lodash.throttle";

var feedbackObj = {};
const refs = {
    form: document.querySelector(`.feedback-form`),
    input: document.querySelector(`input[name='email']`),
    textarea: document.querySelector(`textarea[name='message']`)
};

refs.form.addEventListener(`submit`, onFormSubmit);
refs.input.addEventListener(`input`, throttle(onInputEmail, 500));
refs.textarea.addEventListener(`input`, throttle(onInputEmail, 500));

populateEmailMessage();

function onFormSubmit(evt) { 
    console.log(JSON.parse(localStorage.getItem(`feedback-form-state`)));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(`feedback-form-state`)
};

function onInputEmail(evt) {
    const evtName = evt.target.name;
    const evtValue = evt.target.value;
    if (evtValue) {
        feedbackObj[evtName] = evtValue
        localStorage.setItem(`feedback-form-state`, JSON.stringify(feedbackObj));
     };   
};

function populateEmailMessage () {
    const savedEmailMessage = localStorage.getItem(`feedback-form-state`);
    const parseSavedEmailMessage = JSON.parse(savedEmailMessage);
    if (parseSavedEmailMessage) {
        if (parseSavedEmailMessage.email) {
            refs.input.value = parseSavedEmailMessage.email;
        };
        if (parseSavedEmailMessage.message) {
            refs.textarea.value = parseSavedEmailMessage.message;
        };  
    };
};


