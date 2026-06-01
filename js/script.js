function showMessage(socialNetwork) {
    console.log("Redirecting to: " + socialNetwork);
    alert("You are being redirected to my " + socialNetwork + "!");
}

function copyEmail() {
    navigator.clipboard.writeText("gabrielfernandesdagostin@gmail.com");

    alert("E-mail copied!");
}

