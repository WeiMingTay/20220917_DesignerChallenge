let email = document.getElementById("email");
let subscription1 = document.getElementById("subscription");
let opacityBody = document.getElementById("footerForSubmit");

function submit() {
    console.log(email.value);
    opacityBody.style.opacity=".1";
    subscription1.style.display="block";

}