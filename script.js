/* 🌹 Function to Create Falling Elements */
function createFallingElement(type, src, size, duration) {
    const element = document.createElement("img");
    element.src = src;
    element.className = "falling " + type;
    element.style.width = size + "px";
    element.style.animationDuration = duration + "s";
    element.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, duration * 1000);
}

/* 🌹 Falling Objects - Roses, Lilies, Hearts, and Text */
function createRose() {
    createFallingElement("rose", "https://www.transparentpng.com/thumb/rose/red-rose-png-pictures-14.png", 50, Math.random() * 3 + 2);
}

function createLily() {
    createFallingElement("lily", "https://www.transparentpng.com/thumb/lily/lily-transparent-background-12.png", 40, Math.random() * 3 + 2);
}

function createHeart() {
    createFallingElement("heart", "https://cdn-icons-png.flaticon.com/512/535/535183.png", 30, Math.random() * 2 + 1);
}

function createFallingText() {
    const text = document.createElement("div");
    text.className = "falling falling-text";
    text.textContent = "LENA"; // Falling text
    text.style.animationDuration = Math.random() * 4 + 3 + "s";
    text.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(text);

    setTimeout(() => {
        text.remove();
    }, 7000);
}

/* 🎭 Start Falling Effects */
setInterval(createRose, 150);
setInterval(createLily, 200);
setInterval(createHeart, 250);
setInterval(createFallingText, 1000);
