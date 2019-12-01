const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  /* 
   1. Додати заварнтаження усіх необхідних частин біліотеки faceapi (ще 4) по прикладу вгорі
  */
]).then(startVideo)

// Функція для запуску відео з веб-камери
function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  /*
    2. Присвоїти константі canvas значення виклику методу для створення канвасу з відповідними параметрами
    const canvas 
    = faceapi.createCanvasFromMedia(video)
  */
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)

  // Функція інтервалу для створення іммітації режиму онлайн
  setInterval(async () => {

    /*
      3. Створити константу detections та присвоїти їй (асинхроно) метод detectAllFaces з відповіднми параметрами (враховуючи, 
      те що ми використовуємо TinyFaceDetector)
    */

    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

    faceapi.draw.drawDetections(canvas, resizedDetections)
    /* 
      4. Викликати методи малювання FaceLandmarks, FaceExpressions та AgeGender, по прикладу вгорі
    */

  }, 200)
})

