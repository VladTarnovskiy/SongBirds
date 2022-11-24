import birdsData from '../moduls/birds'

const sectionBirdInfo = document.querySelector('.bird-description')

const birdItemInner = `
<article class="bird-description">
            <section class="player">
              <div class="player__img"></div>
              <div class="player__display">
                <div class="player__title">******</div>
                <div class="player__species"></div>
                <div class="player__controls">
                  <div class="player__but"></div>
                  <div class="player__progress">
                    <div class="player__progress-line"></div>
                    <div class="player__progress-checker"></div>
                    <div class="player__progress-time-current">00:00</div>
                    <div class="player__progress-time-full">00:00</div>
                    <div class="volume-container">
                      <div class="volume-container__button">
                        <div class="volume icono-volumeMedium"></div>
                      </div>
                      <div class="volume-container__slider">
                        <div class="volume-container__percentage"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="player__description"></div>
          </article>
`

function galleryBuilder() {
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {

            let div = document.createElement('div');
            div.className = `galleryBirdItem${i}${j}`;
            div.style.marginBottom = '20px'
            div.innerHTML = birdItemInner
            sectionBirdInfo.appendChild(div)

            setTimeout(() => {
                birdItem(i, j)
            }, 1000);
        }
    }
}

galleryBuilder()

function birdItem(level, bird) {
    const birdItemBody = document.querySelector(`.galleryBirdItem${level}${bird}`)
    const playDes = birdItemBody.querySelector('.player__but')
    const songNameDes = birdItemBody.querySelector('.player__title')
    const songSpecies = birdItemBody.querySelector('.player__species')
    const songDescription = birdItemBody.querySelector('.player__description')
    const audioDes = new Audio();
    let isPlayDes = false

    getLinkToImageFlDes(birdsData[level][bird].image)
    songNameDes.textContent = birdsData[level][bird].name
    songSpecies.textContent = birdsData[level][bird].species
    songDescription.textContent = birdsData[level][bird].description
    audioDes.src = birdsData[level][bird].audio

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

    const audioPlayerDes = birdItemBody.querySelector('.player')
    audioDes.addEventListener('loadeddata', () => {
        let musicTimerDes = birdItemBody.querySelector('.player__progress-time-full')
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

    const timelineDes = birdItemBody.querySelector(".player__progress-line");
    timelineDes.addEventListener("click", e => {
        const timelineWidthDes = window.getComputedStyle(timelineDes).width;
        const timeToSeekDes = e.offsetX / parseInt(timelineWidthDes) * audioDes.duration;
        audioDes.currentTime = timeToSeekDes;
    }, false);

    setInterval(() => {
        const progressBarDes = birdItemBody.querySelector(".player__progress-checker");
        progressBarDes.style.left = audioDes.currentTime / audioDes.duration * 100 + "%";
        const currentTimerDes = birdItemBody.querySelector(".player__progress-time-current");
        currentTimerDes.textContent = getTimeCodeFromNumDes(
            audioDes.currentTime
        );
    }, 50);

    const volumeSliderDes = birdItemBody.querySelector('.volume-container__slider')
    volumeSliderDes.addEventListener('click', e => {
        const sliderWidthDes = window.getComputedStyle(volumeSliderDes).width;
        const newVolumeDes = e.offsetX / parseInt(sliderWidthDes);
        audioDes.volume = newVolumeDes;
        birdItemBody.querySelector('.volume-container__percentage').style.width = newVolumeDes * 100 + '%';
    }, false)

    birdItemBody.querySelector('.volume-container__button').addEventListener("click", () => {
        const volumeElDes = birdItemBody.querySelector('.volume');
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
        const birdImageDes = birdItemBody.querySelector('.player__img')
        birdImageDes.style.backgroundImage = `url(${url})`
    }
}