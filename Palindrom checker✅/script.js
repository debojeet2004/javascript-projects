document.getElementById("search").addEventListener("click", function() {
    var inputText = document.getElementById("input").value.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert input to lowercase and remove non-alphanumeric characters
    var reversedText = inputText.split('').reverse().join(''); // Reverse the input text

    if (inputText === reversedText) {
        document.getElementById("mssg").innerHTML = "<p>Yes Its is a Palindrom</p>"; // Display "Yes, It's a Palindrome" message
    } else {
        document.getElementById("mssg").innerHTML = "<p>No Its is not a Palindrom</p>";
    }
});
