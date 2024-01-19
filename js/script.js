'use strict'

// form submission start
const contactForm = document.getElementById("contactform")//grabbing the contact form ID from the contact form 
const contactName = document.getElementById('name')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone')
const company = document.getElementById('company')
const reason = document.getElementById('reason')
const errorElement = document.getElementById('error')
// const contactNumber = document.getElementById('contact_number')
//email js▼
function sendMail() {
    let serviceID = "service_vq8wq4t"
    let templateID = "template_3ccoafn"
    let accessToken = "WzxvlVjcPD5UyHlpg"
    emailjs.sendForm(serviceID, templateID, contactForm, accessToken)
        .then(() => {
            alert("Your message has been sent!")
            if (alert = "Your message has been sent!") {
                contactName.value = ""
                email.value = ""
                phoneNumber.value = ""
                company.value = ""
                reason.value = ""
                errorElement.value = ""
            }
        }, function (error) {
            alert("Your message could not be delivered. Try again.")
            console.log('FAILED...', error);
        });
}
//email js ▲
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();//prevent browser default reload

    let errorMessages = [];
    //form validation
    if (contactName.value.trim() === '' || contactName.value == null) {
        errorMessages.push('Name is required')
    }
    if (email.value.trim() === '' || email.value == null) {
        errorMessages.push('Email is required')
    }
    if (phoneNumber.value.length <= 5) {
        errorMessages.push('Phone number must be 6 digets or longer')
    }
    if (reason.value.length <= 10 || reason.value == null) {
        errorMessages.push('Please provide a reason you are contacting me longer than 10 letters')
    }


    if (errorMessages.length > 0) {//if errorMessages are longer than 0 we prevent the form from submiting here

        errorElement.innerText = errorMessages.join(', ')

    } else {
        sendMail();
    }

}
)

// form submission end