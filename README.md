In this project, I have created a web application to copy speech-to-text. You just need to click on the "Speech to Text" button, and speech recording will start. Whatever you say will be converted into text. In this web application, I have created a "Copy" button using a new method:

function copyDivToClipboard() {
    const resultDiv = document.getElementById("result").innerText;

    // Use the modern clipboard API
    navigator.clipboard.writeText(resultDiv).then(() => {
        console.log("Copied to clipboard successfully!");
        alert("Text copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
