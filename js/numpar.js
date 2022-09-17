function sali(){
    var entrada =  document.getElementById("numero").value;
     var contador = 0;
    let md =[];
     for (var i =0; i<= entrada; i++) {
        if (contador < entrada) {
            contador=contador +2;
        md[i]=[contador];
        }    
    }
return (md)  ; 
}
function insertarFila() {
    let tblDatos = document.getElementById('tblDatos').insertRow(0);
    let col1 = tblDatos.insertCell(0);
    let col2 = tblDatos.insertCell(1);
    col1.innerHTML = sali();
    
}