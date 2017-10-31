var sentence=prompt('Ingrese una frase');

if(typeof (sentence===''||sentence)!='string'){//Invalido si es campo vacío o no es un string.
 console.log('Invalid sentence');
  }else{
  sentence=sentence.toUpperCase();//Convirtiendo a mayúsculas
  //console.log(sentence);
  }

var arraySentence=[];
var arraySentenceASCII=[];//Guardaré el valor el ASCII con los 33 espacios ya añadidos o disminuidos (según la función: cipher/decipher.
var arraySentenceEncryp=[];//Letras encriptadas
var option= cipher(sentence);//¿Encriptado o desencriptado?

function cipher(sentence){
arraySentence=Array.from(sentence);
  for(i=0;i<arraySentence.length;i++){//Obtengo los valores en ASCII de cada letra.
    var ASCII=arraySentence[i].charCodeAt() ;
    arraySentenceASCII.push(ASCII+7);//26+7=33 espacios
   var letterEncryp=String.fromCharCode(ASCII+7);
   arraySentenceEncryp.push(letterEncryp);
  }
return console.log(arraySentenceEncryp);
}


function decipher(sentence){
arraySentence=Array.from(sentence);
  for(i=0;i<arraySentence.length;i++){//Obtengo los valores en ASCII de cada letra.
    var ASCII=arraySentence[i].charCodeAt() ;
    arraySentenceASCII.push(ASCII-7);//Regreso 7 para volver a la misma posición
    var letterEncryp=String.fromCharCode(ASCII-7);
    arraySentenceEncryp.push(letterEncryp);
  }
return console.log(arraySentenceEncryp);
}
