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
    const archiveList = document.querySelector(".archive-list");
    archiveList.innerHTML = ""; // leeren

    contents.forEach(item => {
        const div = document.createElement("div");
        div.className = "archive-item";

        div.innerHTML = `
            <span class="archive-emoji">${item.emoji}</span>
            <span class="archive-title">${item.title}</span>
            <span class="archive-type" style="opacity:0.6;">(${item.type})</span>
        `;

        archiveList.appendChild(div);
    });
}

// Archiv direkt beim Laden erzeugen
buildArchive();

