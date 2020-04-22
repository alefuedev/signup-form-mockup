window.addEventListener("load", () => {
	let button = document.querySelector("button");
	let inputs = document.querySelectorAll("input");
	let errorIcons = document.querySelectorAll(".error-icon");
	let errorTexts = document.querySelectorAll(".error");

	button.addEventListener("click", function(event) {
		event.preventDefault();
		button.style.color = "hsl(154, 59%, 75%)";

		let indexInputs = [];

		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].value == "") {
				indexInputs.push(i);
			}
		}

		if (indexInputs.length == 4) {
			for (let i = 0; i < indexInputs; i++) {
				errorIcons[i].style.opacity = "1";
				errorTexts[i].style.opacity = "1";
				inputs[i].placeholder = "";
			}
		}

		for (index of indexInputs) {
			errorIcons[index].style.opacity = "1";
			errorTexts[index].style.opacity = "1";
			inputs[index].placeholder = "";

			if (indexInputs.includes(3)) {
				let passwordError = document.querySelector(
					".password-error"
				);
				passwordError.style.opacity = "1";
			}
		}

		if (indexInputs.includes(2) == false) {
			let passwordText = document.querySelector(
				".email-error"
			);
			passwordText.style.opacity = "0";
		}
	});
});
