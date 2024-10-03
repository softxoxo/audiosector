const planeField = document.querySelector('.plane-field');
const lines = planeField.querySelectorAll('.line');

function getRandomDuration() {
    return Math.random() * 2000 + 2000; // Random duration between 2-4 seconds
}

function positionLine(line) {
    const fieldRect = planeField.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect();

    const maxRight = fieldRect.width;
    const maxBottom = fieldRect.height;

    const right = Math.random() * maxRight - 20;
    const top = Math.random() * maxBottom;

    line.style.right = `${right}px`;
    line.style.top = `${top}px`;
    
    const duration = getRandomDuration();
    line.style.animationDuration = `${duration}ms`;
    line.style.WebkitAnimationDuration = `${duration}ms`;
    
    return duration;
}


// Initial animation for each line
lines.forEach(line => positionLine(line));


const arrowsDown = document.querySelector('.arrows-down');

        function animateArrow() {
            arrowsDown.classList.add('animate-arrow');
            setTimeout(() => {
                arrowsDown.classList.remove('animate-arrow');
            }, 1000);
        }

        // Initial animation
        animateArrow();

        // Repeat animation every 10 seconds
        setInterval(animateArrow, 10000);