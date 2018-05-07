document.addEventListener("DOMContentLoaded", function(){
	setTimeout(function(){
		document.getElementById("loader-wrapper").style.opacity = "1";
	}, 500)
});

//Audio Controls

var status = 'pause';

var loadingSound = new Audio('audio/loading.mp3');

loadingSound.play(); 
loadingSound.loop = true;
status = 'play';

function fadeOut(p_audio){  
    if(status != 'play') return false;

    var actualVolume = p_audio.volume;
    var fadeOutInterval = setInterval(function(){
        actualVolume = (parseFloat(actualVolume) - 0.1).toFixed(1);
        if(actualVolume >= 0){
            p_audio.volume = actualVolume;
        } else {
            p_audio.pause();
            status = 'pause';
            clearInterval(fadeOutInterval);
        }
    }, 100);
}

//On Redirect, Call fadeout(loadingSound) before window.location