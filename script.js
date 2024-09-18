// script.js

// Example JavaScript code to handle menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('showing');
    });
});
const stepIcons = document.querySelectorAll('.step-icon');
const stepTexts = document.querySelectorAll('.step-text');

window.addEventListener('scroll', () => {
  const rect = document.querySelector('.steps-section').getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    stepIcons.forEach(icon => icon.classList.add('animate'));
    stepTexts.forEach(text => text.classList.add('animate'));
  }
});
// Get the dropdown menu element
const dropdownMenu = document.querySelector('.dropdown-menu');

// Add a click event listener to the dropdown button
const dropdownButton = document.querySelector('.dropdown button');
dropdownButton.addEventListener('click', () => {
  // Toggle the visibility of the dropdown menu
  dropdownMenu.classList.toggle('show');
});

// Add a mouseleave event listener to the dropdown menu
dropdownMenu.addEventListener('mouseleave', () => {
  // Hide the dropdown menu
  dropdownMenu.classList.remove('show');
});
  document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Toggle dropdown menu visibility on button click
    dropdownButton.addEventListener('click', function() {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown if clicking outside of it
    window.addEventListener('click', function(event) {
      if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  });

