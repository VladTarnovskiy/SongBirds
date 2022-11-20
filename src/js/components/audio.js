import birdsData from '../moduls/birds'
import './game-logic'

let level = 0
let score = 0
let levelCountScore = 5

//Audioplayer
const play = document.querySelector('.player__but')
const audio = new Audio();
let isPlay = false
let birdNumber = getRandomNum(5)
audio.src = birdsData[level][birdNumber].audio

async function getAudio() {
    try {
        if (!isPlay) {
            // audio.src = link
            // getAudio(birdsData[0][0].audio)
            play.classList.add('pause')
            isPlay = true
            audio.play()

        } else {
            play.classList.remove('pause')
            isPlay = false
            audio.pause();
        }
    } catch (err) {
        alert("Cant't upload!!")
    }
}

play.addEventListener('click', () => {
    getAudio()
})

const audioPlayer = document.querySelector('.player')
audio.addEventListener('loadeddata', () => {
    let musicTimer = document.querySelector('.player__progress-time-full')
    musicTimer.textContent = getTimeCodeFromNum(
        audio.duration
    )
    audio.volume = .75
},
    false
);

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}

const timeline = audioPlayer.querySelector(".player__progress-line");
timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);

setInterval(() => {
    const progressBar = document.querySelector(".player__progress-checker");
    progressBar.style.left = audio.currentTime / audio.duration * 100 + "%";
    const currentTimer = document.querySelector(".player__progress-time-current");
    currentTimer.textContent = getTimeCodeFromNum(
        audio.currentTime
    );
}, 50);

const volumeSlider = document.querySelector('.volume-container__slider')
volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    document.querySelector('.volume-container__percentage').style.width = newVolume * 100 + '%';
}, false)

document.querySelector('.volume-container__button').addEventListener("click", () => {
    const volumeEl = document.querySelector('.volume');
    audio.muted = !audio.muted;
    if (audio.muted) {
        volumeEl.classList.remove("icono-volumeMedium");
        volumeEl.classList.add("icono-volumeMute");
    } else {
        volumeEl.classList.add("icono-volumeMedium");
        volumeEl.classList.remove("icono-volumeMute");
    }
});

//bird's image
async function getLinkToImageFl(url) {
    const birdImage = document.querySelector('.player__img')
    birdImage.style.backgroundImage = `url(${url})`
}

//logic
const birdsGroup = document.querySelectorAll('.birds-choosing__item')
const birdsMarker = document.querySelectorAll('.birds-group__marker')
const scoreCounter = document.querySelector('.score__couner')
const songName = document.querySelector('.player__title')

const sectionBirdInfo = document.querySelector('.bird-description')
const birdInfoPlayer = sectionBirdInfo.querySelector('.player')
const birdInfoGuide = sectionBirdInfo.querySelector('.bird-description__guide')



birdsGroup.forEach((item, index) => {
    item.addEventListener('click', () => {
        birdInfoPlayer.classList.remove('disabled')
        birdInfoGuide.classList.add('disabled')
        if (item.textContent.trim() == birdsData[level][birdNumber].name) {
            birdsMarker[index].style.background = 'green'
            score += levelCountScore
            scoreCounter.textContent = score
            songName.textContent = birdsData[level][birdNumber].name
            getLinkToImageFl(birdsData[level][birdNumber].image)
        } else {
            birdsMarker[index].style.background = 'red'
            if (levelCountScore >= 0) {
                levelCountScore -= 1
            } else {
                levelCountScore = 0
            }

        }
    })
})














function getRandomNum(max) {
    return Math.floor(Math.random() * max)
}