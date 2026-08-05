function showRandomContent() {
    const item = contents[Math.floor(Math.random() * contents.length)];

    document.getElementById("type").innerText = item.type;
    document.getElementById("title").innerText = item.title;
    document.getElementById("mood").innerText = item.mood;
    document.getElementById("text").innerText = item.text;
}
