var inputElement = document.querySelector('main input')
var aElement = document.querySelector('main a')

function setName(){
    var inputText = inputElement.value;
    localStorage.setItem('playerName',inputText)
    inputElement.value = '';

    var val = getRadioValue( document.getElementById('form_inicial'), 'gender' );
    localStorage.setItem('gender',val)
}

aElement.onclick = setName;

function getRadioValue(form, name) {
    var val;
    var radios = form.elements[name];
    
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            break; 
        }
    }
    return val;
}
