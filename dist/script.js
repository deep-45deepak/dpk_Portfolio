// Array of Tailwind CSS background color classes
const colors = [
  "bg-primary",
  "bg-secondary",
  "bg-third",
  "bg-forth",
];
let currentColorIndex = 0;

// Function to change the color of the circle
function changeColor() {
  const circle = document.getElementById("circle");
  // Remove the current color class
  circle.classList.remove(colors[currentColorIndex]);
  // Update the color index
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  // Add the new color class
  circle.classList.add(colors[currentColorIndex]);
}

// Change color every 2 seconds
setInterval(changeColor, 2000);

document.getElementById("skillBtn").addEventListener("click", function () {
  document.getElementById("content").textContent =
    "Skills: Proficient in JavaScript, Python, and Java. Experienced with frameworks like React, Angular, and Django.";
});

document.getElementById("experienceBtn").addEventListener("click", function () {
  document.getElementById("content").textContent =
    "Experience: Worked at XYZ Corp for 5 years as a software engineer. Led a team of 10 developers. Successfully delivered multiple projects.";
});

document.getElementById("educationBtn").addEventListener("click", function () {
  document.getElementById("content").textContent =
    "Education: Bachelor's degree in Computer Science from ABC University. Master's degree in Software Engineering from DEF University.";
});


document.getElementById('more-info-btn').addEventListener('click', function() {
  var moreInfo = document.getElementById('more-info');
  if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
  } else {
      moreInfo.style.display = 'none';
  }
});