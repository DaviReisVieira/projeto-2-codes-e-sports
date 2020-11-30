var h1Element = document.querySelector('header h1')

var imgElement = document.querySelector('header img')

var playerName = localStorage.getItem('playerName')
    
h1Element.innerHTML=playerName;

function selectGenderImage(){
    var genderSelected=localStorage.getItem('gender')
    if (genderSelected =='f'){
        imgElement.src='../assets/img/avatarF.jpg'
    } else if (genderSelected =='m'){
        imgElement.src='../assets/img/avatarM.jpg'
    } else {
        imgElement.src='../assets/img/logoEsports.png'
    }
}

selectGenderImage()