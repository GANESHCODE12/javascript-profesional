class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media)
    }

    private initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if(this.media.paused) {
            document.querySelector('#playButton').innerHTML = '<i class="fa fa-pause-circle-o fa-lg " style="color: white;"  aria-hidden="true"></i>'
            this.play();
        } else {
            document.querySelector('#playButton').innerHTML = '<i class="fa fa-play-circle fa-lg" style="color: white;"  aria-hidden="true"></i>'
            this.pause()
        }
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }
    
    toggleMute() {
        if(this.media.muted) {
            document.querySelector('#muteButton').innerHTML = '<i class="fa fa-volume-up fa-lg" style="color: white;" aria-hidden="true"></i>'
            this.unmute();
        } else {
            document.querySelector('#muteButton').innerHTML = '<i class="fa fa-volume-off fa-lg" style="color: white;" aria-hidden="true"></i>'
            this.mute()
        }
    }
}

export default MediaPlayer;