class Arreglos{
  mayor(){
     let datos= document.getElementById("datos").value
     let numeros = datos.split(";") 
     let may=parseInt(numeros[0]) 
     for(let i=1;i < numeros.length;i++){
        if (may < parseInt(numeros[i])){
          may = parseInt(numeros[i])
        } 
     }
     let resp = document.getElementById("resp")
     resp.textContent=`El mayor del arreglo[${numeros}] es= ${may}`
  }

  menor(){
     let datos= document.getElementById("datos").value
     let numeros = datos.split(";") 
     let men=parseInt(numeros[0]) 
     for(let i=1;i < numeros.length;i++){
        if (men > parseInt(numeros[i])){
          men = parseInt(numeros[i])
        } 
     }
     let resp = document.getElementById("resp")
     resp.textContent=`El menor del arreglo[${numeros}] es= ${men}`
  }
  
  promedio(){
     let datos= document.getElementById("datos").value
     let resp = document.getElementById("resp")
     let numeros = datos.split(";") 
     let num=0,suma=0,promedio=0
     for(let i=0;i < numeros.length;i++){
        num=parseInt(numeros[i])
        suma+=num
     }
     promedio= (suma /numeros.length).toFixed(2)
     resp.textContent=`El promedio del arreglo es: ${promedio}`
  }

  nombresReves(){
    let datos= document.getElementById("datos").value
    let resp = document.getElementById("resp")
    let nombres = datos.split(";") 
    let nominver=[]
    for(let i=0;i < nombres.length;i++){
      let nombreInvertido=""
      for(let j=nombres[i].length-1;j >=0 ;j--){
        nombreInvertido += nombres[i][j]
        
      }
      nominver.push(nombreInvertido) 
    }
    resp.textContent=`Los nombres del arreglo al reves son: ${nominver}`
 }

  buscar(){
    let datos= document.getElementById("datos").value
    let buscado= document.getElementById("buscado").value
    let resp = document.getElementById("resp")
    let arreglo = datos.split(";") 
    let posicion=-1
    for(let i=0;i < arreglo.length;i++){
      if(arreglo[i]==buscado) {
        posicion=i
      }
    }
    if(posicion>=0){
      resp.textContent=`El elemento se encuentra en la posición: ${posicion}`
    }else{
      resp.textContent=`El elemento no se encuentra en el arreglo`
    } 
  }

  insertarElemento(){
    let datos= document.getElementById("datos").value
    let elemento= document.getElementById("buscado").value
    let posicion= parseInt(document.getElementById("posicion").value)
    let resp = document.getElementById("resp")
    let arreglo = datos.split(";") 
    let nuevoArr=[]
    for(let i=0;i <= arreglo.length;i++){
      if(i==posicion) {
        nuevoArr.push(elemento)
      }
        nuevoArr.push(arreglo[i])
    }
    if (posicion>arreglo.length || posicion<0){
      resp.textContent= `Posicion incorrecta`
    }else{
      resp.textContent= `El nuevo arreglo es: [${nuevoArr}]`
    }
  }

  eliminarElemento(){
    let datos= document.getElementById("datos").value
    let elemento= document.getElementById("buscado").value
    let resp = document.getElementById("resp")
    let numeros = datos.split(";") 
    let nuevoArr=[]
    for(let i=0;i < numeros.length;i++){
      if(numeros[i]!=elemento) {
        nuevoArr.push(numeros[i])
      }
    }
    resp.textContent= `El nuevo arreglo es: [${nuevoArr}]`
  }

  base2ABase10(){
    let datos = document.getElementById("datos").value;
    let resp = document.getElementById("resp");
    let base2 = datos,base10 = 0,exponente = 0,validacion=1

    for (let i = base2.length - 1; i >= 0; i--) {
      if (base2[i] !== '0' && base2[i] !== '1') {
        validacion = -1 
        break
      }
    }

    for (let i = base2.length - 1; i >= 0; i--) {
        if (base2[i] === '1') {
            base10 += Math.pow(2, exponente)
        }
        exponente++
    }
    if (validacion === 1) {
    resp.textContent = `La conversión es: ${base10}`
    } else {
    resp.textContent = "Ingresa un número binario válido"
    }
  }

  base10ABase2(){
    let datos= document.getElementById("datos").value
    let resp = document.getElementById("resp")
    let  digitos= [], base2=""
    let numero=parseInt(datos)
    while(numero > 0){
        digitos.push(numero%2)
        numero = parseInt(numero/2)
    }
    for(let i=digitos.length-1;i>=0;i--){
      base2+=digitos[i]
    }
    resp.textContent= `La conversión es: ${base2}`

  } 

  primosArreglo(){
    let datos= document.getElementById("datos").value
    let resp = document.getElementById("resp")
    let numeros = datos.split(";") 
    let acu=0,num=0,contadorPrimos=0
    for(let i=0;i < numeros.length;i++){
      num=parseInt(numeros[i])
      acu=this.acuDivisores(num)
      if(acu==1){
        contadorPrimos++
      }
    }
    resp.textContent=`La cantidad de primos del arreglo es: ${contadorPrimos}`
  }

  acuDivisores(num){
     let acu=0
     for(let c=1;c<num;c++){
        if (num%c==0){
            acu=acu+c
        }
     }
     return acu 
  }

  sumaDivisores(){
    let datos= document.getElementById("datos").value
    let numeros = datos.split(";") 
    let acu,num=0,resultado=""
    for(let i=0;i < numeros.length;i++){
        num=parseInt(numeros[i])
        acu=this.acuDivisores(num)
        resultado=resultado+acu+ " "
    }
    let resp = document.getElementById("resp")
    resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`
    
  }

  perfectos(){
    let datos= document.getElementById("datos").value
    let numeros = datos.split(";") //["4","6","9","10"]
    let acu,num=0,resultado=""
    for(let i=0;i < numeros.length;i++){
        num=parseInt(numeros[i])
        acu=this.acuDivisores(num)
        if (acu==num){
           resultado=resultado+num+" "    
        }
     }
    let resp = document.getElementById("resp")
    resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`

  }

  sueldos(){
    let datos= document.getElementById("datos").value
    let vH= document.getElementById("buscado").value
    let nHoras= document.getElementById("posicion").value
    let resp = document.getElementById("resp")
    let nombres = datos.split(";") 
    let valorHora= vH.split(";")
    let numeroHoras= nHoras.split(";")
    let sueldo=0,sueldos=0,promedio=0
    for(let i=0;i < nombres.length;i++){
      sueldo= parseInt(valorHora[i]) * parseInt(numeroHoras[i])
      sueldos+=sueldo
    }
    promedio=(sueldos/nombres.length).toFixed(2)
    resp.textContent= `El promedio de los sueldos es: ${promedio}`
  }

  arrRandom(){
    let numero= document.getElementById("datos").value
    let resp = document.getElementById("resp")
    let resp2 = document.getElementById("resp2")
    let acu,num=0
    let posicion=-1
    let arreglo=[]
    for(let i=0;i < 100;i++){
        arreglo.push(parseInt(Math.random() * 100))
     }
     let resultado = "";
    for (let i = 0; i < arreglo.length; i++) {
        resultado += arreglo[i] + " ";
        if ((i + 1) % 10 === 0) {
            resultado += "\n"
        }
    }
    for(let i=0;i < arreglo.length;i++){
      if (numero==arreglo[i])
      posicion=i
   }
    resp.textContent=`${resultado}`
    if(posicion>=0){
      resp2.textContent=`Adivinaste se encuentra en la posicion: ${posicion}`
    }else{
      resp2.textContent=`Error no adivinaste`
    } 
  }

  repeticionNum(){
    let datos= document.getElementById("datos").value
    let buscado= document.getElementById("buscado").value
    let resp = document.getElementById("resp")
    let numeros = datos.split(";") 
    let cantidad=0
    for(let i=0;i < numeros.length;i++){
      if(numeros[i]==buscado) {
        cantidad++
      }
    }
    resp.textContent=`La cantidad de veces que se repite ${buscado} en el arreglo es: ${cantidad}`  
  }

  vuelto(){
    let pago= document.getElementById("datos").value
    let costo= document.getElementById("buscado").value
    costo= parseFloat(costo)
    pago= parseFloat(pago)
    let vuelto= pago-costo
    const billetes = [50, 20, 10, 5, 1];
    let resultado = []
    if(vuelto<100 && costo<pago){
      for (let i = 0; i < billetes.length; i++) {
        let denominacion = billetes[i];
        let cantidad = Math.floor(vuelto / denominacion);
        if (cantidad > 0) {
            if (denominacion >= 1) {
                resultado.push(`${cantidad} Billetes de --- $${denominacion}`);
            } else {
                resultado.push(` ${cantidad * 100} centavos`);
            }
            vuelto -= cantidad * denominacion;
        }
    }
    
    resultado.push(`Y ${vuelto.toFixed(2)} centavos`);

    resp.innerHTML = `Tu cambio en billetes es:<br>${resultado.join('<br>')}`;
    }else{
      resp.innerHTML = `Error en el pago`;
    }
  }

  limpiar1(){
    document.getElementById("resp").textContent = "Aqui va a ir la respuesta"
    document.getElementById("datos").value = ""

  }

  limpiar2(){
    document.getElementById("resp").textContent = "Aqui va a ir la respuesta"
    document.getElementById("datos").value = ""
    document.getElementById("buscado").value = ""

  }

  limpiar3(){
    document.getElementById("resp").textContent = "Aqui va a ir la respuesta"
    document.getElementById("datos").value = ""
    document.getElementById("buscado").value = ""
    document.getElementById("posicion").value = ""

  }
}
const arr = new Arreglos()

