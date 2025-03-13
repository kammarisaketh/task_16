const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
};

// Function to create navigation
function createNav() {
    const header = document.createElement("div");
    header.classList.add("header");
    header.innerText = "Class Works";

    const nav = document.createElement("div");
    nav.classList.add("navbar");

    // Create buttons for each project in the 'works' object
    Object.keys(works).forEach((key) => {
        const btn = document.createElement("button");
        btn.innerText = works[key].title;
        btn.classList.add("nav-btn");
        btn.onclick = () => loadTask(works[key].url, btn);
        nav.appendChild(btn);
    });

    document.body.appendChild(header);
    document.body.appendChild(nav);
}

// Function to load a task inside an iframe
function loadTask(url, clickedBtn = null) {
    let taskContainer = document.getElementById("taskContainer");
    if (!taskContainer) {
        // Create a container that will hold the iframe
        taskContainer = document.createElement("div");
        taskContainer.id = "taskContainer";
        taskContainer.style.display = "flex";
        taskContainer.style.justifyContent = "center";
        taskContainer.style.alignItems = "center";
        taskContainer.style.height = "500px";  // Adjust height as necessary
        taskContainer.style.marginTop = "20px";
        taskContainer.style.border = "2px solid #ccc";
        document.body.appendChild(taskContainer);
    }

    // Create the iframe element
    let iframe = document.getElementById("contentFrame");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "contentFrame";
        iframe.style.width = "80%";  // Adjust width as necessary
        iframe.style.height = "80%";  // Adjust height as necessary
        iframe.style.border = "none";
        taskContainer.appendChild(iframe);
    }
    
    // Set the iframe source to the selected project URL
    iframe.src = url;

    // Remove the 'active' class from all buttons and add it to the clicked button
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    if (clickedBtn) clickedBtn.classList.add("active");
}

// Initialize the navigation
createNav();

// Load the default landing page on startup
loadTask("works/landing.html");
