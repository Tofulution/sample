// 1. Scroll Reveal Animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-element");
        }
    });
}, { threshold: 0.1 });

scrollElements.forEach((el) => {
    elementInView.observe(el);
});

// 2. Light / Dark Mode Toggle
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    
    // Change button text based on current mode
    if (body.classList.contains("light-mode")) {
        themeBtn.textContent = "Toggle Dark Mode";
    } else {
        themeBtn.textContent = "Toggle Light Mode";
    }
});

// 3. Simulated AI Response Feature
const askBtn = document.getElementById("ask-btn");
const aiInput = document.getElementById("ai-input");
const aiResponse = document.getElementById("ai-response");

// Array of fake AI responses
const simulatedResponses = [
    "Analyzing query... The future of AI relies on ethical implementation and machine learning advancements.",
    "Data processed. Neural networks indicate a high probability of technological singularity by 2045.",
    "Interesting question! As an AI, my computing resources are dedicated to enhancing human potential.",
    "Processing complete: AI is not here to replace humans, but to augment our capabilities."
];

askBtn.addEventListener("click", () => {
    const userText = aiInput.value.trim();
    
    if (userText === "") {
        alert("Please enter a question first!");
        return;
    }

    // Show loading text
    aiResponse.classList.remove("hidden");
    aiResponse.textContent = "Generating response...";
    aiResponse.style.color = "var(--text-main)";

    // Simulate a 1.5-second processing delay
    setTimeout(() => {
        // Pick a random response
        const randomAnswer = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
        aiResponse.textContent = `AI: "${randomAnswer}"`;
        aiResponse.style.color = "var(--accent-1)";
        aiInput.value = ""; // clear input
    }, 1500);
});