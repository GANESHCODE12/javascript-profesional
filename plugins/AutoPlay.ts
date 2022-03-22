import MediaPlayer from '../assets/MediaPlayer';

class AutoPlay {
    constructor() {

    }
    run(player: MediaPlayer) {
        player.mute();
        player.play();
    }
}

export default AutoPlay;