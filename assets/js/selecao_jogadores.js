var h1Element = document.querySelector('main h1')
var listFriendsElement = document.querySelector('.amigos')
var listLastPlayersElement = document.querySelector('.ultimos')

var gameInfos = JSON.parse(localStorage.getItem('gameInfos'))
    
h1Element.innerHTML=gameInfos[0];

var friends = {'Brundoon':[3,'lol_icon.png'],
                'Albatroz':[5,'csgo_icon.png'],
                'Chico Son':[4,'csgo_icon.png'],
                'Sobralizado':[4,'lol_icon.png']}
var players = {'Kakatu':[3,'lol_icon.png'],
                'Fallen':[5,'csgo_icon.png'],
                'Junin':[1,'btf_icon.png']}

listaPlayers = []

function renderNames(ulListToAppend,list_players){
    for (player in list_players){

        var idPlayer = player+String(list_players[player][0])
        var functionToUse = `setPlayer('${player}','${idPlayer}')`

        var buttonElement = document.createElement('button')
        buttonElement.setAttribute('id',idPlayer)
        buttonElement.setAttribute('onclick',functionToUse)
        //buttonElement.onclick='setPlayer(player,idPlayer)';

        var liElement = document.createElement('li')
        var h2Element = document.createElement('h2')
        h2Element.innerHTML=player

        var divElement = document.createElement('div')
        divElement.setAttribute('class','stars')

        for (i = 0; i < list_players[player][0]; i++){
            var starElement = document.createElement('span')
            starElement.setAttribute('class','fa fa-star checked')
            divElement.appendChild(starElement)
        }
        
        for (i = 0; i < 5-list_players[player][0]; i++){
            var starElement = document.createElement('span')
            starElement.setAttribute('class','fa fa-star')
            divElement.appendChild(starElement)
        }

        var img = document.createElement('img')
        img.setAttribute('src','../assets/img/'+list_players[player][1])

        buttonElement.appendChild(liElement)
        liElement.appendChild(h2Element)
        liElement.appendChild(divElement)
        liElement.appendChild(img)

        ulListToAppend.appendChild(buttonElement)


    }
}

renderNames(listFriendsElement,friends)
renderNames(listLastPlayersElement,players)

function setPlayer(playerName,id){
    var element = document.getElementById(id);

    if (element.classList.contains('active')){
        element.classList.remove("active");
        listaPlayers = listaPlayers.filter(function(item) {
            return item !== playerName
        })
        
    } else{
        element.classList.add("active");
        listaPlayers.push(playerName)
    }
    
}

var buttonElement = document.querySelector('.confirm-button')

function setPlayersString(){
    localStorage.setItem('playersString',JSON.stringify(listaPlayers))
}

buttonElement.setAttribute('onclick','setPlayersString()')