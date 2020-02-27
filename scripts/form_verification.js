'use strict';

const enABC = 'abcdefghijklmnopqrstuvwxyz';
const ruABC = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const nums = '1234567890';

let addClassToElement = (elementClass, additionClass) => document.getElementsByClassName(elementClass)[0].classList.add(additionClass);
let removeClassFromElement = (elementClass, deletionClass) => document.getElementsByClassName(elementClass)[0].classList.remove(deletionClass);

const prefix = 'more-info__form_block_';

function validateForm() {
    const fullName = document.forms['more-info_form']['full_name'].value;
    // let company = document.forms['more-info_form']['full_name'].value;
    // let business_segment = document.forms['more-info_form']['business_segment'].value;
    const email = document.forms['more-info_form']['email'].value;
    const telNumber = document.forms['more-info_form']['tel_number'].value;
    // let comment = document.forms['more-info_form']['comment'].value;
    const isChecked = document.forms['more-info_form']['submit_data'].checked;

    let nameValid = validateString(fullName, 'name', verifyFullName);
    let emailValid = validateString(email, 'email', verifyEmail);
    let telNumberValid = validateString(telNumber, 'tel-number', verifyTelNumber);

    if (!isChecked) {
        addClassToElement('more-info__form_submit_personal-data_container_check_box', 'form-submit-error-check-box');
        addClassToElement('more-info__form_submit_personal-data_container_text', 'form-submit-error-label');
    } else {
        removeClassFromElement('more-info__form_submit_personal-data_container_check_box', 'form-submit-error-check-box');
        removeClassFromElement('more-info__form_submit_personal-data_container_text', 'form-submit-error-label');
    }

    return nameValid && emailValid && telNumberValid && isChecked;
}

function validateString(string, elementName, verifyType) {
    if (string === '') {
        removeClassFromElement(prefix + 'error_' + elementName + '-incorrect', 'form-input-error-text-visible');
        addClassToElement(prefix + 'error_' + elementName + '-unfilled', 'form-input-error-text-visible');
        addClassToElement(prefix + elementName, 'form-input-error-border');
        return false;
    } else {
        removeClassFromElement(prefix + 'error_' + elementName + '-unfilled', 'form-input-error-text-visible');
    }
    if (verifyType(string)) {
        removeClassFromElement(prefix + 'error_' + elementName + '-incorrect', 'form-input-error-text-visible');
        removeClassFromElement(prefix + elementName, 'form-input-error-border');
        return true;
    } else {
        addClassToElement(prefix + 'error_' + elementName + '-incorrect', 'form-input-error-text-visible');
        addClassToElement(prefix + elementName, 'form-input-error-border');
        return false;
    }
}

function verifyFullName(string) {
    string = String(string);
    return verifyForValidCharacters(string.toLowerCase(), ruABC + enABC + '-' + ' ');
}

function verifyEmail(string) {
    string = String(string);
    let stringStartEnd = string.charAt(0) + string.charAt(string.length - 1);
    if (verifyForValidCharacters(stringStartEnd, enABC + nums)) {
        string = string.substring(1, string.length - 1);
        let atCount = 0;
        for (let i = 0; i < string.length; i++) {
            if (string.charAt(i) === '@') {
                atCount++;
            }
        }
        if (atCount !== 1) {
            return false;
        }
        return verifyForValidCharacters(string.toLowerCase(), enABC + nums + '.@-_');
    } else {
        return false;
    }
}

function verifyTelNumber(string) {
    string = String(string);
    if (verifyForValidCharacters(string.charAt(0), nums + "+")) {
        return verifyForValidCharacters(string.substring(1).toLowerCase(), nums);
    } else {
        return false
    }
}

function verifyForValidCharacters(string, validCharacters) {
    string = String(string);
    for (let i = 0; i < string.length; i++) {
        let valid = false;
        for (let j = 0; j < validCharacters.length; j++) {
            if (string.charAt(i) === validCharacters.charAt(j)) {
                valid = true;
            }
        }
        if (!valid) {
            return false;
        }
    }
    return true;
}