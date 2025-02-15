function checkVowel() {
    let char = document.getElementById("charInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (char.length !== 1 || !char.match(/[a-z]/i)) {
        result.innerText = "Please enter a valid single letter.";
        result.style.color = "red";
        return;
    }

    if ("aeiou".includes(char)) {
        result.innerText = `${char.toUpperCase()} is a vowel.`;
        result.style.color = "green";
    } else {
        result.innerText = `${char.toUpperCase()} is not a vowel.`;
        result.style.color = "blue";
    }
}
