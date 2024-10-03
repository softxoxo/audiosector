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
		
		const timerCircle = document.querySelector('.timer-circle');
		const timerNumber = document.querySelector('.timer-number');
		
		function animateTimer(duration, callback) {
			const startTime = Date.now();
			const endTime = startTime + duration * 1000;
		
			function updateTimer() {
				const currentTime = Date.now();
				const timeLeft = Math.max(endTime - currentTime, 0);
				const progress = 1 - (timeLeft / (duration * 1000));
		
				// Update circle
				const dashoffset = 283 * (1 - progress);
				timerCircle.style.strokeDashoffset = dashoffset;
		
				// Update number
				const secondsLeft = Math.ceil(timeLeft / 1000);
				if (secondsLeft !== parseInt(timerNumber.textContent)) {
					timerNumber.textContent = secondsLeft;
				}
		
				if (timeLeft > 0) {
					requestAnimationFrame(updateTimer);
				} else {
					callback();
				}
			}
		
			updateTimer();
		}
		
		function startCountdown() {
			animateTimer(3, () => {
				console.log('REDIRECT');
				// You can add any additional actions here after the countdown finishes
			});
		}
		
		startCountdown();