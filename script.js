function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=,./?\[]{};:<>';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

document.getElementById("btn-generate").addEventListener("click", function() {
    const length = 25; // length for string
    const randomString = generateRandomString(length);
    const resultElement = document.getElementById("result");
    resultElement.textContent = randomString;
    document.getElementById("result-container").style.display = "block";
});

document.getElementById("result-container").addEventListener("click", function() {
    const resultElement = document.getElementById("result");
    const range = document.createRange();
    range.selectNode(resultElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('Copied to clipboard!');
        } else {
            alert('Unable to copy. Please try again.');
        }
    } catch (err) {
        alert('Unable to copy. Please try again.');
    }

    window.getSelection().removeAllRanges();
});