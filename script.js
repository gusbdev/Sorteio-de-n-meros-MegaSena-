const zeroFill = n => {
    return ('0' + n).slice(-2);
}

// Cria intervalo
const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    // Exibe na tela usando a div#data-hora
    document.getElementById('data-hora').innerHTML = dataHora;
}, 1000);

function sortear(){
    /* var audio = new Audio('audio.mp3');
    audio.addEventListener('canplaythrough', function() {
    audio.play();
    }); */
    var sorteio;
    var mega = new Array();

    var i=0;
    while (i < 6){

        sorteio = Math.ceil(Math.random()*60);
        if( mega.indexOf(sorteio)< 0){
            mega.push(sorteio);
            i++;
            
        }

        function orderNumbers(a,b){
            return a-b;     
        }
    }

    mega.sort(orderNumbers);
    document.getElementById('num1').value = mega[0];
    document.getElementById('num2').value = mega[1];
    document.getElementById('num3').value = mega[2];
    document.getElementById('num4').value = mega[3];
    document.getElementById('num5').value = mega[4];
    document.getElementById('num6').value = mega[5];
    alert('Números sorteados. Boa sorte!');
    document.getElementById('num1').disabled = false;
    document.getElementById('num2').disabled = false;
    document.getElementById('num3').disabled = false;
    document.getElementById('num4').disabled = false;
    document.getElementById('num5').disabled = false;
    document.getElementById('num6').disabled = false;
}