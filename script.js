// ==========================
// Part 1: Variable Declarations & Conditionals
// ==========================
let userName = "Raphael";
let showList = false;
let items = ["Item 1", "Item 2", "Item 3", "Item 4"];

if (userName.length > 0) {
    document.getElementById("status").textContent = `Hello, ${userName}! Welcome to Assignment 5 by Raphael.`;
} else {
    document.getElementById("status").textContent = "Hello, Guest! Welcome to Assignment 5 by Raphael.";
}

// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: Greets the user and updates the info box
function greetUser() {
    document.getElementById("info").textContent = `Hi ${userName}, hope you're enjoying learning JavaScript!`;
    let domDemo = document.getElementById("dom-demo");
    domDemo.style.color = "blue";
    alert("DOM color changed and info div updated!");
}

// Function 2: Displays the list of items in the ul
function displayList() {
    let ul = document.getElementById("itemList");
    ul.innerHTML = ""; // Clear existing items
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.textContent = items[i];
        ul.appendChild(li);
    }
    showList = true;
}

// ==========================
// Part 3: Loop Examples
// ==========================

// Loop Example 1: For loop to log items to console
for (let i = 0; i < items.length; i++) {
    console.log(`For loop item: ${items[i]}`);
}

// Loop Example 2: For...of loop to log items to console
for (const item of items) {
    console.log(`For...of loop item: ${item}`);
}

// ==========================
// Part 4: DOM Interactions
// ==========================

// DOM Interaction 1: Button click to greet user
document.getElementById("greetBtn").addEventListener("click", greetUser);