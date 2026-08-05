function showRandomContent() {
    const item = contents[Math.floor(Math.random() * contents.length)];

    document.getElementById("type").innerText = item.type;
    document.getElementById("title").innerText = item.title;
    document.getElementById("mood").innerText = item.mood;
    document.getElementById("text").innerText = item.text;
}
function showTodayContent() {
    const index = new Date().getDate() % contents.length;
    const item = contents[index];

    document.getElementById("type").innerText = item.type;
    document.getElementById("title").innerText = item.title;
    document.getElementById("mood").innerText = item.mood;
    document.getElementById("text").innerText = item.text;
}
function buildArchive() {
    const archive = document.getElementById("archive");

    contents.forEach((item, i) => {
        const div = document.createElement("div");
        div.className = "archive-item";
        div.innerText = `${i+1}. ${item.title} (${item.type})`;
        archive.appendChild(div);
    });
}
