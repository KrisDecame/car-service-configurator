export const keyEventListeners = (nextStep, prevStep) => {
    window.addEventListener('keydown', (e) => {
        if (e.key === "ArrowRight") {
            nextStep();
        }
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === "ArrowLeft") {
            prevStep();
        }
    })
}
