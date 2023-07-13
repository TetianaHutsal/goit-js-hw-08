import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.ready().then(() => {
  const handleTimeUpdate = throttle(() => {
    const currentTime = player.getCurrentTime();
    sessionStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000);

  player.on('timeupdate', handleTimeUpdate);

  const savedTime = sessionStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    const currentTime = parseFloat(savedTime);
    player.getDuration().then((duration) => {
      if (currentTime >= 0 && currentTime < duration) {
        player.setCurrentTime(currentTime);
      } else {
        sessionStorage.removeItem('videoplayer-current-time');
      }
    });
  }
});