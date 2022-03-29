// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-z\d]{3,12}$/i,
    password: /^[\w@-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    telephone: /^\+380\d{9}$/,
    slug: /^[a-z\d-]{8,20}$/
}

// validation function
function validate(field, regex) {
    console.log(regex.test(field.value));
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        console.log(e.target.attributes.name.value);
        // validate(e.target, patterns.telephone);
        // validate(e.target, patterns['telephone']);
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})