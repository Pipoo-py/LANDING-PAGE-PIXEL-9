const form = document.querySelector(".main__form");
const buttonSubmit = document.getElementById("submitButton");
const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const result = document.getElementById("result");

const validationInputs = ()=>{
	let username = usernameInput.value;
	let email = emailInput.value;
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
	return (emailRegex.test(email) && usernameRegex.test(username));
}


form.addEventListener("submit",(e)=>{
	e.preventDefault();
	validationInputs() ? result.textContent = "Se han enviado los datos": result.textContent = "Ha habido un error, verifica los datos";
})