// Target date: February 26, 2026
const targetDate = new Date('2026-02-26T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display results
    document.getElementById('days').innerText = days.toLocaleString('pt-BR');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    // If the countdown is finished
    if (distance < 0) {
        document.getElementById('days').innerText = "0";
        document.getElementById('hours').innerText = "0";
        document.getElementById('minutes').innerText = "0";
        document.getElementById('seconds').innerText = "0";
        document.querySelector('h1').innerText = "FELIZ ANIVERSÁRIO DE 18 ANOS!";
        document.querySelector('p').innerText = "A maioridade finalmente chegou! 🎂🎉";
    }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);