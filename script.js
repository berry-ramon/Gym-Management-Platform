// Toggle main section (e.g., "Research")
function toggleMain(id) {
  const mainElement = document.getElementById(id);
  if (mainElement) {
    mainElement.classList.toggle("active");
  }
}

// Toggle sub-sections (e.g., "User Features Research")
function toggleSub(event, id) {
  event.stopPropagation(); // Prevent the event from bubbling up to the parent elements
  const subElement = document.getElementById(id);
  if (subElement) {
    subElement.classList.toggle("active");
  }
}
function toggleDetails(sectionId) {
  const details = document.getElementById(sectionId);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
