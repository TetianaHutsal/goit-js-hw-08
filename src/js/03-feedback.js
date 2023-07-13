import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const throttledSaveFormState = throttle(saveFormState, 500);

form.addEventListener('input', throttledSaveFormState);

document.addEventListener('DOMContentLoaded', () => {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const { email, message } = JSON.parse(savedFormState);
    emailInput.value = email;
    messageInput.value = message;
  }
});

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const email = emailInput.value;
  const message = messageInput.value;

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  const formState = {
    email,
    message,
  };
  console.log(formState);
}
