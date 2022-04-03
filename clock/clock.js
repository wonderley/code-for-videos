function updateClock() {
    const current = new Date()
    const clock = document.getElementById('clock')
    const h = String(current.getHours()).padStart(2, '0')
    const m = String(current.getMinutes()).padStart(2, '0')
    const s = String(current.getSeconds()).padStart(2, '0')
    clock.innerHTML = `${h}:${m}:${s}`
}

window.onload = () => {
    sevenSegments = [
        document.getElementById('segment1'),
        document.getElementById('segment3'),
        document.getElementById('segment6'),
    ]
    for (segment of sevenSegments) {
        segment.classList.add('fill')
    }
}

