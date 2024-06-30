document.getElementById('revealBtn').addEventListener('click', function() {
    var message = document.getElementById('hiddenMessage');
    var sound = document.getElementById('messageSound');
    if (message.style.display === 'none' || message.style.display === '') {
        message.style.display = 'block';
        setTimeout(() => message.style.opacity = 1, 10);
        sound.play();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        message.style.opacity = 0;
        setTimeout(() => message.style.display = 'none', 2000);
        sound.play();  // Optionally, use a different sound effect for hiding the message
    }
});
