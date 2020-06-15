const video = document.getElementById("myvideo")
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
let trackButton = document.getElementById("trackbutton")

let isVideo = false
let model = null

const modelParams = {
    flipHorizontal: true,
    maxNumBoxes: 20,
    iouThreshold: 0.5,
    scoreThreshold: 0.6
}

const startVideo = () => {
    handTrack.startVideo(video).then(status => {
        if (status) {
            isVideo = true
            runDetection()
        }
    })
}

const toggleVideo = () => {
    if (!isVideo) {
        startVideo()
    } else {
        handTrack.stopVideo(video)
        isVideo = false
    }
}

const runDetection = () => {
    model.detect(video).then(predictions => {
        model.renderPredictions(predictions, canvas, context, video)
        if (predictions.length) {
            if (predictions[0].bbox[1] > predictions[0].bbox[3]) {
                console.log("side")
                window.scrollBy(0, 15)
            }
            else {
                console.log("front")
                window.scrollBy(0, -15)
            }
    }
        if (isVideo) {
            requestAnimationFrame(runDetection)
        }
    })
}

handTrack.load(modelParams).then(lmodel => {
    model = lmodel
    trackButton.disabled = false
})
