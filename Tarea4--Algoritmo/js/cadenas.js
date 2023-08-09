class Cadena{
  vocales(){
    let frase = document.getElementById("datos").value
    let cv=0,cc=0
    for(let i=0;i < frase.length;i++){
      if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
        cv=cv+1
      }
    if (frase[i]>= 'a' && frase[i]<= 'z' ) {
        cc=cc+1
      }
    }
      let resp = document.getElementById("resp")
      resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
   }

   palabrasFrase(){
    let frase = document.getElementById("datos").value
    let resp = document.getElementById("resp")
    let cp=1
    frase = frase.trim()
    for (let i=0;i<frase.length;i++){
        if (frase [i] == " " && frase[i+1]!= " "){
            cp++
        }
    }
    resp.textContent=`La cantidad de palabras en la frase es: ${cp}`
   }

  caracteresEspeciales() {
    let frase = document.getElementById("datos").value
    let resp = document.getElementById("resp")
    let cc = 0,cp = 0,cpc = 0,cdp = 0
    for(let i = 0; i < frase.length; i++) {
      if (frase[i] === ',') {
        cc++
      } else if (frase[i] === '.') {
        cp++
      } else if (frase[i] === ';') {
        cpc++
      } else if (frase[i] === ':') {
        cdp++
      }
      }
    resp.textContent= `La frase tiene ${cc} "," ${cp} "." ${cpc} ";" ${cdp} ":"`
  }

  fraseIgual(){
    let frase=document.getElementById("datos").value
    let fraseinver=""
    let resp=document.getElementById("resp")
    let fraseSin=""
    for (let i=0;i<frase.length;i++){
      if (frase [i]!= " "){
        fraseSin+=frase[i]
      }
    }
    fraseSin= fraseSin.toLowerCase()
    for (let i=fraseSin.length-1;i>=0;i--){
        fraseinver+=fraseSin[i]
    }
    if (fraseSin==fraseinver){
      resp.textContent= `La frase es palindroma`
    }else{
      resp.textContent= `La frase no es palindroma`
    }
  }

  fraseInvertida(){
    let frase = document.getElementById("datos").value
    let resp = document.getElementById("resp")
    let frase2= ""
    for(let i = frase.length-1; i >= 0; i--) {
        frase2+=frase[i]
    }
    resp.textContent= `La frase invertida es: ${frase2}`

  }

  concatenarFrases(){
    let frase = document.getElementById("datos").value
    let frase2 = document.getElementById("datos2").value
    let resp = document.getElementById("resp")
    let fraseConc=""
    fraseConc=frase+" "+frase2
    resp.textContent= `Las frases concatendas son: ${fraseConc}`
  }

  buscarCar(){
    let frase= document.getElementById("datos").value
    let car= document.getElementById("datos2").value
    let resp = document.getElementById("resp")
    let posicion=-1
    for(let i=0;i < frase.length;i++){
      if(frase[i]==car) {
        posicion=i
      }
    }
    if(posicion>=0){
      resp.textContent=`La posición del caracter en la frase es: ${posicion}`
    }else{
      resp.textContent=`El caracter no se encuentra en la frase`
    } 
  }

  buscarSubCadena(){
    let frase = document.getElementById("datos").value
    let buscado = document.getElementById("datos2").value
    let resp = document.getElementById("resp")
    let posicion=-1
    for (let i = 0; i < frase.length; i++) {
        let sub = "";
      for (let j = i; j < frase.length; j++) {
        if (frase[j]!=" "){
          sub += frase[j];
        }else{
          break
        }
      if (sub === buscado) {
        posicion = i
      }
      }
    }
    if(posicion>=0){
        resp.textContent=`La posición de la subcadena en la frase es: ${posicion}`
      }else{
        resp.textContent=`La subcadena no se encuentra en la frase`
      } 
  }

  insertar() {
    let cadena = document.getElementById("datos").value
    let subcadena = document.getElementById("datos2").value
    let posicion = parseInt(document.getElementById("posicion").value)
    let resp = document.getElementById("resp")
    let aux=""
    if (posicion >= 0 && posicion <= cadena.length){ 
        for (let i = 0; i < posicion; i++) {
            aux=aux+cadena[i]
        }
        aux=aux+subcadena+ " "
        
        for (let i = posicion; i < cadena.length; i++) {
            aux = aux + cadena[i]
        }
         cadena=aux
         resp.textContent = `La nueva cadena es: ${cadena}`
     }
    else{
        alert("La posicion no es valida")
        }
  }

  eliminarSubcadena(){
    let frase = document.getElementById("datos").value;
    let subCadenaEliminar = document.getElementById("datos2").value;
    let resp = document.getElementById("resp");
    let posicion = -1;
    for (let i = 0; i <= frase.length - subCadenaEliminar.length; i++) {
        let subcadenaEncontrada = true;
        for (let j = 0; j < subCadenaEliminar.length; j++) {
            if (frase[i + j] !== subCadenaEliminar[j]) {
                subcadenaEncontrada = false;
                break;
            }
        }
        if (subcadenaEncontrada) {
            posicion = i;
            break;
        }
    }
    if (posicion >= 0) {
        let nuevaFrase = "";
        for (let i = 0; i < frase.length; i++) {
            if (i < posicion || i >= posicion + subCadenaEliminar.length) {
                nuevaFrase += frase[i];
            }
        }
        resp.textContent = `La frase después de eliminar la subcadena: "${nuevaFrase}"`;
    } else {
        resp.textContent = `La subcadena no se encuentra en la frase`;
    }
    

  }

  fraseArreglo(){
    let cadena = document.getElementById("datos").value
    let separador = document.getElementById("datos2").value
    let resp = document.getElementById("resp")
    let arreglo = cadena.split(separador)
    resp.textContent = `El arreglo es: ${JSON.stringify(arreglo)}`
  }
  
  sumaDigitos(){
    let frase= document.getElementById("datos").value
    let resp = document.getElementById("resp")
    let suma=0,num=0
    for (let i=0;i<frase.length;i++){
        if (frase[i]>="0" && frase[i]<="9"){
            num=parseInt(frase[i])
            suma+=num
        }
    }
    resp.textContent = `La suma de los digitos de la frase es: ${suma}`
  }

  limpiar1(){
    document.getElementById("resp").textContent = "Aqui va a ir la respuesta"
    document.getElementById("datos").value = ""

  }

  limpiar2(){
    document.getElementById("resp").textContent = "Aqui va a ir la respuesta"
    document.getElementById("datos").value = ""
    document.getElementById("datos2").value = ""

  }

  limpiar3(){
    document.getElementById("resp").textContent = "Aqui va a ir la respuesta"
    document.getElementById("datos").value = ""
    document.getElementById("buscado").value = ""
    document.getElementById("posicion").value = ""

  }


}
let cad = new Cadena()
//cad.vocales()
