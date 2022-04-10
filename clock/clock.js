function updateClock() {
    const current = new Date()
    const clock = document.getElementById('clock')
    showDigit(Math.floor(current.getHours() / 10), 1)
    showDigit(current.getHours() % 10, 2)
    showDigit(Math.floor(current.getMinutes() / 10), 3)
    showDigit(current.getMinutes() % 10, 4)
    showDigit(Math.floor(current.getSeconds() / 10), 5)
    showDigit(current.getSeconds() % 10, 6)
}

function segmentsForDigit(digit) {
    return {
        0: [1,2,3,5,6,7],
        1: [3,6],
        2: [1,3,4,5,7],
        3: [1,3,4,6,7],
        4: [2,3,4,6],
        5: [1,2,4,6,7],
        6: [1,2,4,5,6,7],
        7: [1,3,6],
        8: [1,2,3,4,5,6,7],
        9: [1,2,3,4,6,7],
    }[digit]
}

function showDigit(digit, place) {
    const segmentsToFill = segmentsForDigit(digit)
    let segIndex = 0
    for (let i = 1; i <= 7; i++) {
        const segment = document
            .getElementById(`place${place}segment${i}`)
        if (segmentsToFill[segIndex] === i) {
            segment.classList.add('fill')
            segIndex++
        } else {
            segment.classList.remove('fill')
        }
    }
}

window.onload = () => {
    updateClock()
    setInterval(updateClock, 1000)
}

