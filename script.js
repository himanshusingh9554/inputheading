document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.trim();
    const inputDisplayHeading = document.getElementById('inputDisplay');

    if (userInput) {
        // Update the heading with the user input
        inputDisplayHeading.textContent = `Input Display: ${userInput}`;

        // Clear the input field after sending
        document.getElementById('userInput').value = '';
    } else {
        alert('Please enter some text before sending.');
    }
});
