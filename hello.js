let secretInput = "";
const secretCode = "hello";
const ivan = "alex ivan";
const zero = "divide by zero";
const divide = "divide by 0";

document.addEventListener("keydown", (event) => {
    // Capture the pressed key
    const key = event.key.toLowerCase();
    
    // If Enter is pressed, check the secret code
    if (key === "enter") {
        if (secretInput === secretCode) {
            document.getElementById('chat').innerHTML = "hello user";
        } else if (secretInput === ivan) {
            document.getElementById('chat').innerHTML = "yes?";
        } else if (secretInput === zero || secretInput === divide) {
            document.getElementById('chat').innerHTML = "nice try";
        } else {
            document.getElementById('chat').innerHTML = ":(";
        }
        secretInput = ""; // Clear the secret input
    } else {
        // Add the pressed key to the secret input
        secretInput += key;
    }
});