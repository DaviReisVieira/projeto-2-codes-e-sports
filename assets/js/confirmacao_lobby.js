var h1Element = document.querySelector('main h1')
var ulElement = document.querySelector('main ul')
var imgElement = document.querySelector('main img')

var gameInfos = JSON.parse(localStorage.getItem('gameInfos'))
var playersJson = JSON.parse(localStorage.getItem('playersString'))
    
h1Element.innerHTML=gameInfos[0];
imgElement.setAttribute('src','../assets/img/'+gameInfos[1]);

function setPlayersInLobby(){
    for (player of playersJson){

        var liElement = document.createElement('li')
        
        var h2Element = document.createElement('h2')
        h2Element.innerHTML=player

        var spanElement = document.createElement('span')
        spanElement.innerHTML='&#9989;'

        liElement.appendChild(h2Element)
        liElement.appendChild(spanElement)
        ulElement.appendChild(liElement)
    }
}

setPlayersInLobby()

