var h1Element = document.querySelector('header h1')

var playersJson = localStorage.getItem('playerRated')

h1Element.innerHTML=playersJson;