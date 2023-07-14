import throttle from 'lodash.throttle';
import storage from './storage.js';

const form = document.querySelector(".feedback-form");
const localStorage_Key = 'feedback-form-state';

form.addEventListener("input", throttle(saveDataInLS, 500));

function saveDataInLS() {
    const userDataSavedInLocalStorage = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem(localStorage_Key, JSON.stringify(userDataSavedInLocalStorage));
}

form.addEventListener("submit", checkData);

function checkData() {
    e => {
        e.preventDefault();
        userEmail.value = JSON.parse(localStorage.getItem(localStorage_Key)).email;
        userMessage.value = JSON.parse(localStorage.getItem(localStorage_Key)).message;
        console.log(`email: ${userEmail.value},\nmessage: ${userMessage.value}`);
        e.currentTarget.reset();
        localStorage.removeItem(localStorage_Key);
    }
};

const storageData = storage.load(localStorage_Key);

if (storageData) {
    form.elements.email.value = storageData.email;
    form.elements.message.value = storageData.message;
}

/*
console.log("ABCD");
const dataStringifyJSON = localStorage.getItem(localStorage_Key);
console.log(dataStringifyJSON);
const dataParseJSON = JSON.parse(dataStringifyJSON);
console.log(dataParseJSON);
console.log(`email: ${dataParseJSON.email}`);
console.log(`message: ${dataParseJSON.message}`);


const userData = storage.load(localStorage_Key);
console.log(userData.email);
console.log(userData.message);
*/