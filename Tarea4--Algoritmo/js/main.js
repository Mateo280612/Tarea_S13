class Numeros{
    vuelto(){
        let cantidad = document.getElementById("cantidad").value
        let precio = document.getElementById("precio").value
        let costo = document.getElementById("costo")
        let iva = document.getElementById("costiva")
        let pago = document.getElementById("pago").value
        let vuelto= document.getElementById("resp")
        let cost=0,ivaa=0,valorfinal=0
        cost=cantidad*precio
        costo.value=cost
        if (document.getElementById("iva").checked) {
            ivaa = cost * 0.12;
            cost=cost+ivaa
          }
        iva.value=ivaa.toFixed(2)
        valorfinal=(pago-cost).toFixed(2)
        if (pago<cost){
            vuelto.textContent= "Su cantidad es inferior al total"
        }else{
            vuelto.textContent= `Su vuelto es: ${valorfinal}  `
        }
    }
    multiplo(){
        let num = document.getElementById("num1").value
        let mul = document.getElementById("num2").value
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        num = parseInt(num)
        mul = parseInt(mul)
        if (num % mul == 0) {
          resp.textContent = `${mul} Es multiplo de ${num}`  
        }else{
            resp.textContent = `${mul} No es multiplo de ${num}`
        }
    }
    divisores(){
        let num = document.getElementById("num").value
        let divisores = document.getElementById("resp")
        let divisor= []
        for (let i=1;i<num;i++){
            if (num % i ==0) {
                divisor.push(i)
            }
        }
        divisores.textContent= `Los divisores son: ${divisor}`
    
    }
    sumaDivisores(){
        let num = document.getElementById("num").value
        let sumadiv= document.getElementById("resp")
        num = parseInt(num)
        let suma= 0
        for (let i=1;i<num;i++){
            if (num % i ==0) {
                suma+=i
            }
        }
        sumadiv.textContent= `Los suma de los divisores es: ${suma}`
    }

    cantidadDivisores(){
        let num = document.getElementById("num").value
        let resp= document.getElementById("resp")
        num = parseInt(num)
        let cantidadDiv= 0
        for (let i=1;i<num;i++){
            if (num % i ==0) {
                cantidadDiv+=1
            }
        }
        resp.textContent= `La cantidad de divisores es: ${cantidadDiv}`
    }

    perfecto(){
        let num = document.getElementById("num").value
        let perfecto= document.getElementById("resp")
        num = parseInt(num)
        let suma= 0
        for (let i=1;i<num;i++){
            if (num % i ==0) {
                suma+=i
            }
        }
        if (suma==num){
            perfecto.textContent= `El numero ${num} es Perfecto`
        }else{
            perfecto.textContent= `El numero ${num} no es Perfecto`
        }
    }

    amigosa(){
        let num1 = document.getElementById("num1").value
        let num2 = document.getElementById("num2").value
        let resp = document.getElementById("resp")
        let acu1 = 0
        let acu2 = 0
        for (let i=1;i<num1;i++){
            if (num1 % i ==0) {
                acu1+=i
            }
        }
        for (let i=1;i<num2;i++){
            if (num2 % i ==0) {
                acu2+=i
            }
        }
        if (acu1==acu2){
            resp.textContent= `${num1} y ${num2} son amigos`
        }else{
            resp.textContent= `${num1} y ${num2} no son amigos`
        }
    }

    primo(){
        let num = document.getElementById("num").value
        let primo= document.getElementById("resp")
        let acu=0,divisor=2,band=1
        while(divisor < num && band == 1){
            if (num % divisor == 0){
                band=0
            }else{
                divisor=divisor+1
            }
        }
        if (band==1){
            primo.textContent= `El numero ${num} es primo` 
        }else{
            primo.textContent= `El numero ${num} no es primo` 
        }
    }

    primosGemelos(){
        let num1 = document.getElementById("num1").value
        let num2 = document.getElementById("num2").value
        let primosGemelos= document.getElementById("resp")
        let acu=0,divisor=2,divisor2=2,band1=1,band2=1
        while(divisor < num1 && band1 == 1){
            if (num1 % divisor == 0){
                band1=0
            }else{
                divisor=divisor+1
            }
        }
        while(divisor2 < num2 && band2 == 1 && num1-num2==2){
            if (num2 % divisor2 == 0){
                band2=0
            }else{
                divisor2=divisor2+1
            }
        }
        if (band1==1 && band2==1 && (Math.abs (num1-num2)==2)){
            primosGemelos.textContent= `El numero ${num1} y ${num2} son primos gemelos` 
        }else{
            primosGemelos.textContent= `El numero ${num1} y ${num2} no son primos gemelos` 
        }
    }

    numeroInvertido() {
        let num = document.getElementById("num").value
        let invertido= document.getElementById("resp")
        let digitos = ""
        while(num > 0) {
           digitos+=(num % 10)
           num=Math.trunc(num/10)
        }
        invertido.textContent= `El numero  invertido es: ${digitos}` 
      } 
    cantidadDigitos() {
        let num = document.getElementById("num").value
        let cantDigitos= document.getElementById("resp")
        let digitosF = 0
        while(num != 0) {
           num=Math.trunc(num/10)
           digitosF++
        }
        cantDigitos.textContent= `El numero tiene ${digitosF} digitos` 
      } 

    factorial(){
        let num = document.getElementById("num").value
        let factorial =document.getElementById("resp")
        let facto=1
        for(let i=1;i<=num;i++){
            facto=facto*i
        }
        factorial.textContent= `El factorial es: ${facto}`
      }

    exponente(){
        let num = document.getElementById("num1").value
        let exponente = document.getElementById("num2").value
        let exponenteF=document.getElementById("resp")
        let expo=1
        for(let i=1;i<=exponente;i++){
            expo=expo*num
        }
        exponenteF.textContent= `El resultado es: ${expo}`
      }

    tablaMul(){
        let num = document.getElementById("num").value
        let tabla =document.getElementById("resp")
        let result=""
        for (let i=1;i<=12;i++) {
        result+= `${num} * ${i} = ${num*i}<br>`
        }
        tabla.innerHTML = result
      }

    fibonacci(){
        let num = document.getElementById("num").value
        let fibonacci =document.getElementById("resp")
        let a=0,b=1,c=0
        let result =""
        result+=a
        result+=" "+b
        
        for (let i=2;i<num;i++){
            c=a+b
            a=b
            b=c
            result +=" "+c
        }
        fibonacci.textContent = result
      }
   limpiar(){
    document.getElementById("resp").textContent = "aqui va a ir la respuesta"
    document.getElementById("num").value = ""
   }
   limpiar2(){
    document.getElementById("resp").textContent = "aqui va a ir la respuesta"
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = "";
   }
   limpiarvuelto(){
    document.getElementById("resp").textContent = "aqui va a ir la respuesta"
    document.getElementById("cantidad").value = ""
    document.getElementById("precio").value = ""
    document.getElementById("costo").value = ""
    document.getElementById("costiva").value = ""
    document.getElementById("pago").value = ""
   }

   rangos(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let resp = document.getElementById("resp")
    num1=parseInt(num1)
    num2=parseInt(num2)
    let inicio=0,final=0,contador=0
    let valores =[]
    if (num1>num2){
        inicio=num2
        final =num1
        contador=-1
    }else{
        inicio=num2
        final=num1
        contador=1
    }
    for (let i=inicio;i<final;i+=contador){
        valores.push(i)
    }
    resp.textContent= `El rango es: ${valores} ` 
    }

    rango(){
         let num = parseInt(document.getElementById("num1").value)
         let num2 = parseInt(document.getElementById("num2").value)
         let resp =  document.getElementById("resp")
         let valores=""
        if (num<num2){
            for (let c = num +1; c < num2;c++){
                if (c % 2 !=0){
                    valores+= c + " " 
                }
                
            }
        }else{
            for (let c = num-1; c > num2; c--){
                if (c % 2 !=0){
                    valores+= c + " " 
                }
                
            }
            }
            resp.textContent= `El rango es: ${valores} ` 
        }  
        rangsado(){
            let num1=parseInt(document.getElementById("num1").value)
            let num2=parseInt(document.getElementById("num2").value)
            let resultado=document.getElementById("resp")
            let valores=""
            if(num1<num2){
                for(let c=num1+1;c<num2;c++){
                    valores+= c + " "
                }
            }else{
                for(let c=num1-1;c>num2;c--){
                    valores+= c + " "
                }
            }
            resultado.textContent=` los valores son ${valores}`
        }
}



const numero = new Numeros();
