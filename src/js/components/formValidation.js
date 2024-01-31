
// SELECTORS

const phoneForm = document.querySelector("#form-phone");
const submitButton = document.querySelector("#form-submit");


// VARIABLES
let phoneIsValid = false;


    // HELPER FUNCTIONS
const validatePhone = (value) => {
    const phoneValidation = /^(?:\+\s*46\s*)?0?[1-9]\d{7,9}$/;
    if (value.match(phoneValidation)) {
        return true;
    }
    return false;
};
const applyInvalidStyles = (el) => {
    el.classList.add("input-error-state");
};
const applyValidStyle = (el) => {
    el.classList.remove("input-error-state");
};
const disableSubmitButton = () => {
    submitButton.disabled = true;
    submitButton.classList.add("is-disabled");
};
const enableSubmitButton = () => {
    submitButton.disabled = false;
    submitButton.classList.remove("is-disabled");
};
const updateSubmitButton = () => {
    if (phoneIsValid) {
        enableSubmitButton();
    }
    else {
        disableSubmitButton();
    }
};


phoneForm.addEventListener("input", (event) => {
    const phoneFormValue = event.target.value;
    if (validatePhone(phoneFormValue)) {
        phoneIsValid = true;
        applyValidStyle(phoneForm);
    }
    else {
        phoneIsValid = false;
        applyInvalidStyles(phoneForm);
    }
    updateSubmitButton();
});

    //EXECUTION
updateSubmitButton();