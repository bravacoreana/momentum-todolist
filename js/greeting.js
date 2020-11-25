const form = document.querySelector(".js-greetingForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const toDoForm = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser"; // user local storage
const SHOWING_CN = "showing"; // showing class name

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

function askForName() {
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello, ${text}`;
	toDoForm.classList.add(SHOWING_CN);
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();