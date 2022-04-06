function updateClock() {
    const current = new Date()
    const clock = document.getElementById('clock')
    const h = String(current.getHours()).padStart(2, '0')
    const m = String(current.getMinutes()).padStart(2, '0')
    const s = String(current.getSeconds()).padStart(2, '0')
    clock.innerHTML = `${h}:${m}:${s}`
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

function showDigit(digit) {
    const segmentsToFill = segmentsForDigit(digit)
    let segIndex = 0
    for (let i = 1; i <= 7; i++) {
        const segment = document
            .getElementById(`segment${i}`)
        if (segmentsToFill[segIndex] === i) {
            segment.classList.add('fill')
            segIndex++
        } else {
            segment.classList.remove('fill')
        }
    }
}

window.onload = () => {
    let digit = 0
    showDigit(digit)
    setInterval(() => {
        digit = (digit + 1) % 10
        showDigit(digit)
    }, 1000)
}

