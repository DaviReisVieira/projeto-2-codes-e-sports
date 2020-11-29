var h1Element = document.querySelector('header h1')

var playerName = localStorage.getItem('playerName')
    
h1Element.innerHTML='Olá, '+playerName+'!'