# 1. Cifrado César.
Es una página web que pide, por medio de un prompt(), una frase al usuario y devuelve el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha. Y viceversa.

Por ejemplo:
Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
# Pseudocodigo:
1. Crear una variable en la que el usuario ingrese un string y otra variable en la que se especifique si quiere cifrar i descifrar su frase.
2. Comprobar que la frase ingresada sea un string y convertirla a mayúscula en caso de contener letras minusculas.
3. Crear dos funciones que reciban un string como parametro, una se llamará cipher y la otra decipher.
 4. En  la función cipher:
 4.1 Se guardara en un arreglo la frase y cada letra ocupara un indice en el arreglo.
 4.2 Se recorrera la posición del arreglo, se obtendra el valor de la letra en acii, se le sumara 33 y del resultado se devolvera la letra correspondiente para así obtener el valor de la letra cifrada.
 4.3 Después de hacer la operación se devolvera un string en lugar de un arreglo.
 5. En  la función decipher:
 4.1 Se guardara en un arreglo la frase y cada letra ocupara un indice en el arreglo.
 4.2 Se recorrera la posición del arreglo, se obtendra el valor de la letra en acii, se le restará 33 y del resultado se devolvera la letra correspondiente para así obtener el valor de la letra cifrada.
 4.3 Después de hacer la operación se devolvera un string en lugar de un arreglo
6. Fin.

![Diagrama de flujo del cifrado César](https://fotos.subefotos.com/894707626ace47d15ef509f832d800fao.png)
