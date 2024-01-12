let secretInput = "";
const secretCode = "hello project classified";
const ivan = "alex ivan";

document.addEventListener("keydown", (event) => {
    // Capture the pressed key
    const key = event.key.toLowerCase();
    
    // If Enter is pressed, check the secret code
    if (key === "enter") {
        if (secretInput === secretCode) {
            window.location.href = "hello.html"; // Redirect to hello.html
        } else if (secretInput === ivan) {
            window.location.href = "ivan.html"; // Redirect to ivan.html
        } else {
            alert("Access Denied"); // Alert if the secret code is incorrect
        }
        secretInput = ""; // Clear the secret input
    } else {
        // Add the pressed key to the secret input
        secretInput += key;
    }
});