// Time script
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = currentTime;
}

updateTime();
setInterval(updateTime, 1000);



// Get the loading text element
const loadingText = document.getElementById('loading-text');

// Function to update the loading text from 1% to 100%
function updateLoadingText() {
    for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
            loadingText.textContent = `${i}% Loaded`;
        }, i * 15); // Change the interval (50) to speed up or slow down the animation
    }
}

// Call the function to start the animation
updateLoadingText();
