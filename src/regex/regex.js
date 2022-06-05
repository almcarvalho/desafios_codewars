//https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
//boa referência para estudos:
//https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/

function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(password);
}

module.exports = validate;