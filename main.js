const btn = document.getElementById("btn");
const Reset = document.getElementById("reset").addEventListener("click", function(){
    location.reload();
});
const results = document.getElementById("result");
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.onstart = function(){
console.log("you can speek now");
}

recognition.onresult = function(event){
var text = event.results[0][0].transcript;
console.log(text);
document.getElementById("result").innerHTML = text;
}


function copyDivToClipboard() {
    const resultDiv = document.getElementById("result").innerText;

    // Use the modern clipboard API
    navigator.clipboard.writeText(resultDiv).then(() => {
        console.log("Copied to clipboard successfully!");
        // alert("Text copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}


