var audio = new Audio()

function PlaySound(soundName){
    audio.pause()
    audio.duration = 0
    audio = new Audio(`./resources/${soundName}.mp3`)
    
    audio.play()
}