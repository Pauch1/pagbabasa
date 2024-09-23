function unlockChapter(chapter) {
    const passwords = {
        Article: "alice",
        kasaysayan: "filipino",
        chapter3: "page3",
        chapter4: "page4"
    };

    const enteredPassword = prompt(`Enter the password for ${chapter}:`);

    if (enteredPassword === passwords[chapter]) {
        window.location.href = `${chapter}.html`;
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function goBack() {
    window.location.href = "index.html";
}