function setGames(game,gameIcon){
    gameInfo=[game,gameIcon];
    localStorage.setItem('gameInfos', JSON.stringify(gameInfo));
}