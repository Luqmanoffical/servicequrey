// FAQ's Accordion functionality Start

function toggleAccordion(index) {
    const content = document.getElementById(`accordionContent-${index}`);
    const arrow = document.getElementById(`arrow-${index}`);

    if (content.style.maxHeight) {
        // Close the accordion smoothly
        content.style.maxHeight = null;
        arrow.classList.remove('open');

        // Allow time for the transition to complete before setting display to none
        content.addEventListener('transitionend', function () {
            content.style.display = "none"; // Set display to none after transition
        }, { once: true }); // Ensures the event listener is only called once
    } else {
        // Open the accordion smoothly
        content.style.display = "block"; // Change display to block first
        content.style.maxHeight = content.scrollHeight + 'px'; // Then set max-height
        arrow.classList.add('open');
    }
}
// FAQ's Accordion functionality End

// Privacy-policy Functionality Start


const text = " HOLOMODULAR, LLC|";
let index = 0;
const speed = 100; // typing speed in milliseconds

function typeEffect() {
    if (index < text.length) {
        document.getElementById("privacy-policy-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect;


function toggleSection(id) {
    var section = document.getElementById(id);
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}

// Privacy-policy Functionality End

