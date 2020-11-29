var h1Element = document.querySelector('main h1')
var listFriendsElement = document.querySelector('.amigos')

var playersJson = JSON.parse(localStorage.getItem('playersString'))

function setPlayersInLobby(){
    for (player of playersJson){

        var functionToUse = `setPlayerToRate('${player}')`

        var liElement = document.createElement('li')
        
        var h2Element = document.createElement('h2')
        h2Element.innerHTML=player

        var aElement = document.createElement('a')
        aElement.setAttribute('href',"avaliacao_individual.html")
        aElement.setAttribute('onclick',functionToUse)

        var iElement = document.createElement('i')
        iElement.setAttribute('class',"far fa-comment")

        aElement.appendChild(iElement)
        liElement.appendChild(h2Element)
        liElement.appendChild(aElement)
        listFriendsElement.appendChild(liElement)
    }
}

setPlayersInLobby()

function setPlayerToRate(name){
    localStorage.setItem('playerRated',name)

}