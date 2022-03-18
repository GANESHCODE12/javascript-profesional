class AutoPause {
    constructor() {
        this.threshold = 0.25
    }
    run(player) {
        this.player = player

        const observer = new IntersectionObserver(
            this.handleIntersection = entries => {
                const entry = entries[0];

                entry.intersectionRatio >= this.threshold
                    ? this.player.play()
                    : this.player.pause()
            } , {
                threshold: this.threshold,
            }
        );

        observer.observe(this.player.media)
    }
}

export default AutoPause;