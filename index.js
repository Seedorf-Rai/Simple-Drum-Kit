window.addEventListener('keydown', function (e) {

    const getDrum = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const getDIV = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (getDrum) {
        if (!getDrum.paused) {
            // If the audio is already playing, reset it to the beginning
            getDrum.currentTime = 0;
        } else {
            // If the audio is not playing, start playing it
            getDrum.play();
        }
        console.log(getDrum);
        getDrum.play();
        getDIV.style.transform = 'scale(1.2, 1.2)'
        getDIV.style.background = 'rgba(243, 229, 229, 0.4)'
        setTimeout(() => {
            getDIV.style.transform = 'scale(1, 1)'
            getDIV.style.background = 'rgba(178, 171, 171, 0.4)'

        }, 500)
    }
})