/**
 * Validation Service.
 */

export const validate = (input) => {
	const inputType = input.dataset.type;

	if(input.validity.valid) {
		input.parentElement.classList.remove("input-container--invalid");
		input.parentElement.querySelector(".input-message-error").innerHTML = "";
	} else {
		console.log(input.validity);
	    input.parentElement.classList.add("input-container--invalid");
		input.parentElement.querySelector(".input-message-error").innerHTML = showErrorMessage(inputType, input);
	}
}

/**
 * This gets the appropriate error message.
 * @param inputType The input type.
 * @param input The input element.
 * @returns The error message.
 */
const showErrorMessage = (inputType, input) => {
	let message = "";
	errorTypes.forEach((error) => {
		if(input.validity[error]) {
      		console.log(inputType, error);
      		console.log(input.validity[error]);
			console.log(errorMessage[inputType][error]);
      		message = errorMessage[inputType][error];
		}
	});
	return message;
}


/**
 * Error types from input validity attribute.
 */
const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

/**
 * This object represents an error message.
 */
const errorMessage = {
  name: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch:
      "Mínimo ocho y máximo 10 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.",
  },
  birth: {
    valueMissing: "Este campo no puede estar vacío",
    customError: "Debes tener al menos 18 años de edad",
  },
  number: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
  },
  address: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La dirección debe contener entre 10 a 40 caracteres.",
  },
  city: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
  },
  state: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
  },
};