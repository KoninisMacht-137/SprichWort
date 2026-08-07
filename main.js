function showRandomContent() {
    const item = contents[Math.floor(Math.random() * contents.length)];

    document.getElementById("content-type").innerText = item.type;
    document.getElementById("content-title").innerText = item.title;
    document.getElementById("content-mood-text").innerText = item.mood;
    document.getElementById("content-text").innerText = item.text;
    document.getElementById("content-icon").innerText = item.icon;
    document.getElementById("content-date").innerText = item.date || "";
}

function showTodayContent() {
    const index = new Date().getDate() % contents.length;
    const item = contents[index];

    document.getElementById("content-type").innerText = item.type;
    document.getElementById("content-title").innerText = item.title;
    document.getElementById("content-mood-text").innerText = item.mood;
    document.getElementById("content-text").innerText = item.text;
    document.getElementById("content-icon").innerText = item.icon;
    document.getElementById("content-date").innerText = item.date || "";
}

document.getElementById("btn-today").addEventListener("click", showTodayContent);
document.getElementById("btn-random").addEventListener("click", showRandomContent);
