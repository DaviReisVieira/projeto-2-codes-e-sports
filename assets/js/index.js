var inputElement = document.querySelector('main input')
var aElement = document.querySelector('main a')

function setName(){
    var inputText = inputElement.value;
    localStorage.setItem('playerName',inputText)
    inputElement.value = '';
}

aElement.onclick = setName;

