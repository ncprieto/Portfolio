function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    if(!params.email.includes("@")) {
        alert("Please provide a valid email.");
        return;
    }

    const serviceID = "service_ybwqh1j";
    const templateID = "template_sgsr6fn";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message was sent successfully.");
            }
        )
        .catch((err) => console.log(err));
}

