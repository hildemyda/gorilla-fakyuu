const mainImage = document.getElementById('mainImage');
  const popup = document.getElementById('fullscreenPopup');
  const fullscreenImage = document.getElementById('fullscreenImage');

  function openFullscreen() {
    popup.style.display = 'flex';
    fullscreenImage.src = mainImage.src;

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }

  window.addEventListener('click', openFullscreen);
  window.addEventListener('touchstart', openFullscreen);