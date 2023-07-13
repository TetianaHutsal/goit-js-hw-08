import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeElement = document.getElementById('vimeo-player');
const player = new Player(iframeElement);

player.ready().then(() => {
  const handleTimeUpdate = throttle(data => {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000);

  player.on('timeupdate', handleTimeUpdate);

  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    const currentTime = parseFloat(savedTime);
    player.setCurrentTime(currentTime).catch(error => {
      console.error('Failed to set current time:', error);
    });
  }
});
