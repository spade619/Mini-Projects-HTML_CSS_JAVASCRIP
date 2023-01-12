const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles

const songs = ['1-Adele-all_i_ask', 
               '2-Clinton_Kane-i_guess_im_inlove', 
               '3-Justin-Bieber-sorry', 
               '4-Anastasia-at_the_beginning', 
               '5-The_Chainsmokers-dont-let-me-down',
               '6-Ariel_Rivera-a-smile-in-your-heart',
               '7-MLTR-its-gonna-make-sense']

//keep track of songs

let songIndex = 0

//initially load song into DOM
loadSong(songs[songIndex])

//update song details

function loadSong(song) {
    title.innerText=song
    audio.src = `music/${song}.mp3`
    cover.src = `assets/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.bi').classList.remove('bi-play-btn-fill')
    playBtn.querySelector('i.bi').classList.add('bi-pause-btn-fill')
    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.bi').classList.add('bi-play-btn-fill')
    playBtn.querySelector('i.bi').classList.remove('bi-pause-btn-fill')
    audio.pause()
}


function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])
    playSong()
}

function nextSong(){
    songIndex++

    if(songIndex > songs.length - 1){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

function updateProgress(e){
const {duration, currentTime} = e.srcElement
const progressPercent = (currentTime / duration) * 100

progress.style.width = `${progressPercent}%`

}


function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}

//event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})


//change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)


