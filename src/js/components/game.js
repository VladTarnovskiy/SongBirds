import birdsData from '../moduls/birds'

let level = 0
let score = 0
let levelCountScore = 5

//Audioplayer
const play = document.querySelector('.player__but')
const audio = new Audio();
let isPlay = false
let birdNumber = getRandomNum(6)
audio.src = birdsData[level][birdNumber].audio

async function getAudio() {
    try {
        if (!isPlay) {
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
const songSpecies = document.querySelector('.player__species')
const songDescription = document.querySelector('.player__description')
const nextLevelButton = document.querySelector('.next-level-btn')


const sectionBirdInfo = document.querySelector('.bird-description')
const birdInfoPlayer = sectionBirdInfo.querySelector('.player')
const birdInfoGuide = sectionBirdInfo.querySelector('.bird-description__guide')
let birdNumberDes = 0
let scoreFlag = false

birdsGroup.forEach((item, index) => {
    item.addEventListener('click', () => {
        birdInfoPlayer.classList.remove('disabled')
        birdInfoGuide.classList.add('disabled')
        birdNumberDes = item.dataset.birdNumber
        audioDes.src = birdsData[level][birdNumberDes].audio
        playDes.classList.remove('pause')
        isPlayDes = false
        audioDes.pause();
        getLinkToImageFlDes(birdsData[level][birdNumberDes].image)
        songNameDes.textContent = birdsData[level][birdNumberDes].name
        songSpecies.textContent = birdsData[level][birdNumberDes].species
        songDescription.textContent = birdsData[level][birdNumberDes].description


        if (item.textContent.trim() == birdsData[level][birdNumber].name) {
            if (scoreFlag == false) {
                score += levelCountScore
                scoreCounter.textContent = score
                levelCountScore = 5
                scoreFlag = true
            }
            if (level == 5) {
                localStorage.setItem('score', score);
                setTimeout(() => {
                    window.location.href = './results.html'
                }, 1000)
            }
            birdsMarker[index].style.background = '#008966'
            nextLevelButton.classList.add('next-level-btn_active')
            songName.textContent = birdsData[level][birdNumber].name
            getLinkToImageFl(birdsData[level][birdNumber].image)
            soundClick('./true-click.mp3')
        } else {

            soundClick('./false-click.mp3')
            if (scoreFlag == false) {
                birdsMarker[index].style.background = 'red'
                if (levelCountScore > 0) {
                    levelCountScore -= 1
                } else {
                    levelCountScore = 0
                }
            }
        }
    })
})






//player description
//Audioplayer
const playDes = sectionBirdInfo.querySelector('.player__but')
const songNameDes = sectionBirdInfo.querySelector('.player__title')
const audioDes = new Audio();
let isPlayDes = false


async function getAudioDes() {
    try {
        if (!isPlayDes) {
            playDes.classList.add('pause')
            isPlayDes = true
            audioDes.play()

        } else {
            playDes.classList.remove('pause')
            isPlayDes = false
            audioDes.pause();
        }
    } catch (err) {
        alert("Cant't upload!!")
    }
}

playDes.addEventListener('click', () => {
    getAudioDes()
})

const audioPlayerDes = sectionBirdInfo.querySelector('.player')
audioDes.addEventListener('loadeddata', () => {
    let musicTimerDes = sectionBirdInfo.querySelector('.player__progress-time-full')
    musicTimerDes.textContent = getTimeCodeFromNumDes(
        audioDes.duration
    )
    audioDes.volume = .75
},
    false
);

function getTimeCodeFromNumDes(num) {
    let secondsDes = parseInt(num);
    let minutesDes = parseInt(secondsDes / 60);
    secondsDes -= minutesDes * 60;
    const hoursDes = parseInt(minutesDes / 60);
    minutesDes -= hoursDes * 60;

    if (hoursDes === 0) return `${minutesDes}:${String(secondsDes % 60).padStart(2, 0)}`;
    return `${String(hoursDes).padStart(2, 0)}:${minutesDes}:${String(
        secondsDes % 60
    ).padStart(2, 0)}`;
}

const timelineDes = audioPlayerDes.querySelector(".player__progress-line");
timelineDes.addEventListener("click", e => {
    const timelineWidthDes = window.getComputedStyle(timelineDes).width;
    const timeToSeekDes = e.offsetX / parseInt(timelineWidthDes) * audioDes.duration;
    audioDes.currentTime = timeToSeekDes;
}, false);

setInterval(() => {
    const progressBarDes = sectionBirdInfo.querySelector(".player__progress-checker");
    progressBarDes.style.left = audioDes.currentTime / audioDes.duration * 100 + "%";
    const currentTimerDes = sectionBirdInfo.querySelector(".player__progress-time-current");
    currentTimerDes.textContent = getTimeCodeFromNumDes(
        audioDes.currentTime
    );
}, 50);

const volumeSliderDes = sectionBirdInfo.querySelector('.volume-container__slider')
volumeSliderDes.addEventListener('click', e => {
    const sliderWidthDes = window.getComputedStyle(volumeSliderDes).width;
    const newVolumeDes = e.offsetX / parseInt(sliderWidthDes);
    audioDes.volume = newVolumeDes;
    sectionBirdInfo.querySelector('.volume-container__percentage').style.width = newVolumeDes * 100 + '%';
}, false)

sectionBirdInfo.querySelector('.volume-container__button').addEventListener("click", () => {
    const volumeElDes = sectionBirdInfo.querySelector('.volume');
    audioDes.muted = !audioDes.muted;
    if (audioDes.muted) {
        volumeElDes.classList.remove("icono-volumeMedium");
        volumeElDes.classList.add("icono-volumeMute");
    } else {
        volumeElDes.classList.add("icono-volumeMedium");
        volumeElDes.classList.remove("icono-volumeMute");
    }
});


//bird's image
async function getLinkToImageFlDes(url) {
    const birdImageDes = sectionBirdInfo.querySelector('.player__img')
    birdImageDes.style.backgroundImage = await `url(${url})`
}

//next level
const birdItemsDescription = document.querySelectorAll('.birds-choosing__description')
const levelItems = document.querySelectorAll('.level-display__item')
const playerDes = sectionBirdInfo.querySelector('.player')

nextLevelButton.addEventListener('click', () => {
    if (nextLevelButton.classList.contains('next-level-btn_active')) {
        nextLevelButton.classList.remove('next-level-btn_active')
        scoreFlag = false
        level += 1
        birdNumber = getRandomNum(5)
        audio.src = birdsData[level][birdNumber].audio
        playerDes.classList.add('disabled')
        birdInfoGuide.classList.remove('disabled')
        songDescription.textContent = ''
        songName.textContent = '******'
        const birdImage = document.querySelector('.player__img')
        birdImage.style.removeProperty('background-image')
        changeSetBirds()
        removeMarkers()
        displayLevel()
    }
})

function changeSetBirds() {
    birdItemsDescription.forEach((item, index) => {
        item.textContent = birdsData[level][index].name
    })
}

function removeMarkers() {
    birdsMarker.forEach(item => {
        item.style.background = '#444'
    })
}

function displayLevel() {
    levelItems.forEach(item => {
        item.classList.remove('level-display__item_acive')
    })
    levelItems[level].classList.add('level-display__item_acive')
}









//different

function getRandomNum(max) {
    return Math.floor(Math.random() * max)
}

function soundClick(url) {
    const audioClick = new Audio()
    // if (flag !== true) {
    //     return
    // }
    audioClick.src = url
    audioClick.autoplay = true;
}

export default score