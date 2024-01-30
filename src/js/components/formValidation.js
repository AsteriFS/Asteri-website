


		// SELECTORS
   
    const phoneForm = document.querySelector("#form-phone");
    const submitButton = document.querySelector("#form-submit");


	// VARIABLES
    let phoneIsValid = false;


		// HELPER FUNCTIONS
    const validatePhone = (value) => {
        const phoneValidation = /^(\+46)?\s*([7][0236])\s*(\d{4})\s*(\d{3})$/;
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
        submitButton.classList.add("submit-disabled-state");
    };
    const enableSubmitButton = () => {
        submitButton.disabled = false;
        submitButton.classList.remove("submit-disabled-state");
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


