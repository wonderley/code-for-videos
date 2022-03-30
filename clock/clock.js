function updateClock() {
    const current = new Date()
    const clock = document.getElementById('clock')
    const h = String(current.getHours()).padStart(2, '0')
    const m = String(current.getMinutes()).padStart(2, '0')
    const s = String(current.getSeconds()).padStart(2, '0')
    clock.innerHTML = `${h}:${m}:${s}`
}

window.onload = () => {
    setInterval(updateClock)
}

