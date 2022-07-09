  
  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop unsupported keys from executing the function
    audio.currentTime = 0;// rewind the audio to start
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition(e){
    if(e.propertyName !== 'transform') return //skip the non transform events
    this.classList.remove('playing')
  }
  
  const keys = document.querySelectorAll(`.key`);
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener("keydown", playSound )