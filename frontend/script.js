document.addEventListener("DOMContentLoaded", function() {
    fetch("https://perpetuo-lyzz.onrender.com/articles")  // NEW: Your live backend
    .then(response => response.json())
        .then(data => {
            const container = document.getElementById("articles-container");
            data.forEach(article => {
                let articleElement = document.createElement("div");
                articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
                container.appendChild(articleElement);
            });
        })
        .catch(error => console.error("Error loading articles:", error));
});
