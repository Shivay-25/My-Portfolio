window.onload = function () {
    emailjs.init("BD2tyxKy7-vkkyu5W"); // ✅ Your Public Key

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs
            .sendForm("service_l89ythr", "template_drpkg5k", form)
            .then(
                function () {
                    alert("✅ Thank you! Your message has been sent.");
                    document.getElementById("status-message").innerText =
                        "Message sent successfully!";
                    form.reset();
                },
                function (error) {
                    document.getElementById("status-message").innerText =
                        "❌ Failed to send. Check console.";
                    console.error("EmailJS Error:", error);
                }
            );
    });
};