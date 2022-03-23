import MediaPlayer from '@ganeshcode12/platzimediaplayer';
import AutoPlay from '@ganeshcode12/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@ganeshcode12/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@ganeshcode12/platzimediaplayer/lib/plugins/Ads';

const video =document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [ new AutoPlay(), new AutoPause(), new Ads() ] 
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(error => {
        console.log(error.message);
    });
}