var number=prompt('Enter the card number') ;//49927398716
var arrayString=[];
var arrayNumber=[];
var arrayAux=[];
var arrayMultiply=[];
//Comprobando que se ingrese solo números
if(number===' '){
  number=prompt('No valido, introduce sólo números.');
  }else{
    arrayString= Array.from(number);
    for (i=0;i<arrayString.length;i++){//Obteniendo un arreglo de los números introducidos como string.
      arrayNumber.push(parseInt(arrayString[i]));
      if(i%2===0){//Armando un arreglo con 1 y 2 como elementos.
      arrayAux.push(1);
      }else{
        arrayAux.push(2);
        }
    }
  //console.log(arrayAux);
  }

isValidCard(arrayNumber);//Mandando a llamar a la función para validar tarjeta

function isValidCard(array){
  array.reverse();//Invierto los elementos del array
  var ResOfSum=0;//Variable que guardara la suma de los elementos del arrayMultiply
  for(j=0;j<arrayNumber.length;j++){
    var multiply=arrayNumber[j]*arrayAux[j]
    if(multiply>9){
      multiply=multiply-9;//Restar 9 en caso de que al multiplicar por 2, su valor es mayor a 9.
    }
    arrayMultiply.push(multiply);//Arreglo con los elementos ya alterados
    ResOfSum= arrayMultiply[j]+ResOfSum;//Se guarda la suma de cada elemento de arrayMultiply.
  }
  if(ResOfSum%10===0){
    return alert('Valid card number');
    }else{
      return alert ('Sorry, invalid card number');
    }
}
