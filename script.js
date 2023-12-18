document.addEventListener("DOMContentLoaded", function() {
    // Set the new date for the Baccalaureat exam (June 5, 2024 at 8:00 AM GMT+1)
    const examDate = new Date("June 5, 2024 08:00:00 GMT+0100").getTime();

    // Update the countdown every second
    const countdownElement = document.getElementById("countdown");

    const updateCountdown = function() {
        const now = new Date().getTime();
        const distance = examDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.innerHTML = "The exam is happening now!";
        }
    };

    // Initial call to set the countdown
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});
