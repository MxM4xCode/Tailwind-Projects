const newsletterBtn = document.querySelector('.newsletter-form-btn');
const newsletterSuccessBtn = document.querySelector('.newsletter-form-btn-success');
const newsletterForm = document.querySelector('.newsletter-form');
const pWarning = document.querySelector('.warning');
const input = document.querySelector('input');
const success = document.querySelector('.success');


function checkMail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(re.test(input.value)) {
        pWarning.style.display = 'none';
        success.style.display = 'block';
        newsletterForm.style.display = 'none';
        input.value = '';
    } else {
        pWarning.style.display = 'block';
    }
}

function showNewsletter() {
    newsletterForm.style.display = 'block';
    success.style.display = 'none';
}


newsletterBtn.addEventListener('click', checkMail);
newsletterSuccessBtn.addEventListener('click', showNewsletter);