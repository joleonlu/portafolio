// Datos de traducción
const translations = {
  
  es: {
    welcomeMessage: "Hello! How can I help you?",
    questions: {
      "hello": "Hello! How can I help you, I'm Jose Luis, a web developer?",
      "experience": "Of course, I have 5 years of experience.",
      "framework": "Sure, I have knowledge in Angular, React, and Vue.js.",
      "skills": "Yes, I have skills in different frameworks, preprocessors, and databases.",
      "live": "Colombia, Bogotá.",
      "english": "Sure, my English level is B1.",
      "contacts": "joseluisleonluna@gmail.com."
    },
    errorMessage: "I'm sorry, I don't understand what you're saying. If you want, you can contact me at my WhatsApp number (57) 3125382663 or at my email joseluisleonluna@gmail.com.",
    formValidationMessage: "Cannot send the message. Please, fill in all the required fields."
  },
};

let currentLanguage = 'es'; 


function changeLanguage(language) {
  currentLanguage = language;
  
}


const chatHistory = document.getElementById('chat-history');
const inputText = document.getElementById('input-text');
const sendBtn = document.getElementById('send-btn');
const chatContainer = document.getElementById('chat-container');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  chatContainer.classList.toggle('minimized');
});

sendBtn.addEventListener('click', () => {
  const message = inputText.value.trim();
  if (message) {
    addMessageToHistory(message, true);
    inputText.value = '';
    const responseMessage = getResponseMessage(message);
    addMessageToHistory(responseMessage, false);
  }
});

function addMessageToHistory(message, isUser) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');
  messageContainer.classList.add(isUser ? 'user' : 'bot');

  const messageBubble = document.createElement('div');
  messageBubble.classList.add('message-bubble');
  messageBubble.innerText = message;

  messageContainer.appendChild(messageBubble);
  chatHistory.appendChild(messageContainer);
}

function getResponseMessage(message) {
  const keywords = translations[currentLanguage].questions;
  message = message.toLowerCase();

  for (const [key, value] of Object.entries(keywords)) {
    if (message.includes(key)) {
      return value;
    }
  }

  return translations[currentLanguage].errorMessage;
}


function enviarMensaje() {
 
  var nombre = document.forms["formulario"]["nombre"].value;
  var telefono = document.forms["formulario"]["telefono"].value;
  var correo = document.forms["formulario"]["correo"].value;
  var tema = document.forms["formulario"]["tema"].value;
  var mensaje = document.forms["formulario"]["mensaje"].value;
  
 
  if (nombre == "" || correo == "" || tema == "" || mensaje == "") {
    alert(translations[currentLanguage].formValidationMessage);
    return false;
  }
}


function changeLanguage(language) {
  currentLanguage = language;


  updateChatbotMessages();
  
  
}


function updateChatbotMessages() {
  
  chatHistory.innerHTML = ''; 
}


document.getElementById('btn-es').addEventListener('click', () => changeLanguage('es'));
document.getElementById('btn-en').addEventListener('click', () => changeLanguage('en'));
