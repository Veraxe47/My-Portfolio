const projects = [
    {
        title: "ENSTA Bank",
        type: "WEB / UNIVERSITY",
        year: "2023",
        image: "images/enstabank.jpg",
        description:
            "A university web platform designed to help ENSTA students find courses and exam information across all five years. I contributed to the website design and development, focusing on a clear and accessible student experience.",
        tools: ["UI/UX", "Web Design", "Development"]
    },
    {
        title: "Uni Vibe",
        type: "APP / UNIVERSITY",
        year: "2025",
        image: "images/univibe.png",
        description:
            "A university-focused application designed around student clubs and campus events. Students can discover upcoming events while clubs can organize and share their activities in one place.",
        tools: ["UI/UX", "App Design", "Development"]
    },
    {
        title: "Moodify",
        type: "APP / PERSONAL",
        year: "2025",
        image: "images/moodify.png",
        description:
            "A music application concept that personalizes the listening experience according to the user's mood. The project combines interface design with development to create a more personal way to discover music.",
        tools: ["UI/UX", "App Design", "Development"]
    }
];

const tabs = document.getElementById("projectTabs");
const card = document.getElementById("projectCard");
const image = document.getElementById("projectImage");
const number = document.getElementById("projectNumber");
const type = document.getElementById("projectType");
const year = document.getElementById("projectYear");
const title = document.getElementById("projectTitle");
const description = document.getElementById("projectDescription");
const tools = document.getElementById("projectTools");
const progress = document.getElementById("progressBar");

let currentProject = 0;

projects.forEach((project, index) => {
    const button = document.createElement("button");
    button.className = "project-tab";
    button.type = "button";
    button.setAttribute("role", "tab");
    button.textContent = project.title;
    button.addEventListener("click", () => showProject(index));
    tabs.appendChild(button);
});

function showProject(index) {
    currentProject = (index + projects.length) % projects.length;
    const project = projects[currentProject];

    card.classList.add("changing");

    setTimeout(() => {
        image.src = project.image;
        image.alt = `${project.title} project preview`;
        number.textContent = String(currentProject + 1).padStart(2, "0");
        type.textContent = project.type;
        year.textContent = project.year;
        title.textContent = project.title;
        description.textContent = project.description;

        tools.innerHTML = "";
        project.tools.forEach(tool => {
            const tag = document.createElement("span");
            tag.className = "tool";
            tag.textContent = tool;
            tools.appendChild(tag);
        });

        progress.style.width = `${((currentProject + 1) / projects.length) * 100}%`;

        document.querySelectorAll(".project-tab").forEach((tab, tabIndex) => {
            tab.classList.toggle("active", tabIndex === currentProject);
            tab.setAttribute("aria-selected", tabIndex === currentProject);
        });

        card.classList.remove("changing");
    }, 180);
}

document.getElementById("prevProject").addEventListener("click", () => {
    showProject(currentProject - 1);
});

document.getElementById("nextProject").addEventListener("click", () => {
    showProject(currentProject + 1);
});

// Clicking the project image advances to the next project.
document.querySelector(".project-image-wrap").addEventListener("click", () => {
    showProject(currentProject + 1);
});

showProject(0);

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
